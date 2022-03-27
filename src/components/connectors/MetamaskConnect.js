import { useCallback } from 'react';
import { useAuth } from '../../managers/auth';
import { useWeb3React } from '@web3-react/core';
import Image from 'next/image';
import injected from './injected';

import coinbaseImg from '../../assets/coinbase.jpeg';

export default function MetamaskConnect() {
  const { activate, active } = useWeb3React();

  return (
    <div>
      <button
        className="bg-blue-l-01 hover:bg-blue-700 transition-all text-white font-bold py-3 px-6 rounded-lg flex items-center gap-3"
        onClick={() => activate(injected)}
      >
         <div className="hidden opacity-0 sm:flex sm:opacity-100">
          <Image src={coinbaseImg} alt="coinbase" layout="fixed" width={24} height={24}/>
        </div>
        <span className="whitespace-nowrap">{'Connect'}</span>
      </button>
    </div>
  )
}