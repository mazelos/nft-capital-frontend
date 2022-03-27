import { useState, memo } from 'react';
import TimeAgo from 'react-timeago';
import dayjs from 'dayjs';
import Image from 'next/image';
import Tooltip from './Tooltip';

import EthLogo from '../assets/icons/eth.png';
import WethLogo from '../assets/icons/weth.png';
import EtherscanLogo from '../assets/icons/etherscan.svg'
import OpenseaLogo from '../assets/icons/opensea.svg'

export default memo(function EventItem(props) {
  const [imgError, setImgError] = useState(false);

  const { type, event, active, collectionImage } = props;
  if (!event) return null

  const currency = type === 'listing' ? 'eth' : event.currency;

  const handleClick = () => {
    if (!active) return;
    console.log(event);
    props.onPurchase([event.contract, event.tokenId]);
  }

  /* removed animation: animate__animated animate__fadeIn animate__fast */
  return (
    <div className={`${active === false ? 'bg-gray-l-05 dark:bg-gray-d-05' : 'bg-gray-l-06 dark:bg-gray-d-06'} border border-gray-l-04 shadow-md p-2 px-3 rounded-lg mb-1 flex shadow-sm dark:text-white dark:border-gray-d-05`}>
      <div className={`${active === false && "opacity-60"} flex`}>
        <Image
          src={imgError ? collectionImage : `https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/${event.contract}:${event.tokenId}`}
          alt="" 
          className="rounded-lg" 
          layout="fixed" 
          width={60} 
          height={60}
          objectFit="contain"
          quality={60}
          onError={() => setImgError(true)}
        />
      </div>
      <div className={`${active === false && "opacity-60"} flex flex-col justify-between w-full ml-2`}>
        <div className="flex justify-between w-full">
          <div className="flex">
            <span className="font-semibold text-xl">#{event.tokenId.toString().substring(0, 4)}</span>
            <a className="flex ml-2 mt-0.5" href={`https://opensea.io/assets/${event.contract}/${event.tokenId}`} target="_blank" rel="noreferrer">
              <div className="flex"><Image src={OpenseaLogo.src} alt="" width="22" height="22" layout="fixed" /></div>
            </a>
            {
                type === 'sale'
                  ? (
                    <a className="flex ml-1 mt-0.5" href={`https://etherscan.io/tx/${event.txHash.split(":")[0]}`} target="_blank" rel="noreferrer">
                      <div className="flex"><Image src={EtherscanLogo.src} alt="" width="22" height="22" layout="fixed" /></div>
                    </a>
                  )
                  : null
              }
          </div>
          <span className="text-sm font-medium text-gray-l-01 text-right truncate dark:text-gray-d-01"><TimeAgo date={event.date} /></span>
        </div>
        <div className="flex justify-between items-end w-full">
          <div className="bg-gray-l-05 py-0.5 px-3 rounded-lg flex items-center dark:bg-gray-d-05">
            <Tooltip
              content="Item has not been indexed yet"
              side="bottom"
              delay={100}
              sideOffset={7}
            >
              <span className="font-semibold text-sm">No Rank</span>
            </Tooltip>
          </div>
          <div className="flex">
            <div className="bg-gray-l-05 py-1 px-3 rounded-lg flex items-center dark:bg-gray-d-05">
              <Image src={currency === 'eth' ? EthLogo : WethLogo} alt="" width={12} height={19} />
              <span className="font-semibold ml-2">{event.price}</span>
            </div>
            {
              type === 'listing'
                ? (
                  <button className={`${active ? 'bg-blue-l-01 hover:bg-blue-700 dark:bg-blue-d-01' : 'bg-gray-l-04 cursor-default dark:bg-gray-d-04'} transition-all py-1 px-3 rounded-lg ml-2`} onClick={handleClick}>
                    <span className={`font-semibold text-white text-sm`}>{ active ? 'BUY' : 'SOLD' }</span>
                  </button>
                )
                : null
            }
          </div>
        </div>
      </div>
    </div>
  )
})