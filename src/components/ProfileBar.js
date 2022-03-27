import { useState } from 'react';
import Image from 'next/image';
import { styled, keyframes } from '@stitches/react';
import { useAuth } from '../managers/auth';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import {
  DiscordLogoIcon,
  GearIcon,
  BookmarkIcon,
  DownloadIcon,
  Half2Icon,
  Cross2Icon,
  RocketIcon
} from '@radix-ui/react-icons';
import { useWeb3React } from '@web3-react/core';
import web3 from 'web3';

import punkImg from '../assets/punk.png';

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="bottom"]': { animationName: slideDownAndFade },
    },
  },
});

export default function ProfileBar() {
  const auth = useAuth();
  const { address, balance, ens } = auth;

  return (
    <ProfileDropdown auth={auth}>
      <div className="flex items-center cursor-pointer">
        <div className="hidden sm:flex flex-col items-end mr-4">
          <span className="text-base font-bold dark:text-white">{address && `${address.substring(0, 6)}...${address.substring(address.length - 4)}`}</span>
          <span className="text-xs font-bold text-blue-l-01 dark:text-blue-d-01">{balance.toFixed(2)} AVAX</span>
        </div>
        <div className="flex">
          <Image
            src={punkImg}
            alt="profile-pic" 
            width={44} 
            height={44} 
            className="rounded-full cursor-pointer" 
            quality={100}
          />
        </div>
      </div>
    </ProfileDropdown>
  )
}

function ProfileDropdown({ children, auth }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HoverCardPrimitive.Root onOpenChange={open => setIsOpen(open)} openDelay={50} closeDelay={200}>

      <HoverCardPrimitive.Trigger asChild>
        { children }
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        align="end"
        sideOffset={10}
      >
        <Dropdown auth={auth} isOpen={isOpen} />
      </HoverCardPrimitive.Content>

    </HoverCardPrimitive.Root>
  );
}

function Dropdown({ auth, isOpen }) {
  const { address, tokens } = useAuth();
  const { deactivate } = useWeb3React();
  return (
    <DropdownMenuPrimitive.Root open={isOpen}>
        <DropdownMenuPrimitive.Trigger></DropdownMenuPrimitive.Trigger>

        <DropdownMenuContent
          className="w-48 rounded-lg px-1.5 py-1 md:w-56 bg-white dark:bg-blackDark cursor-pointer before:content-[''] before:h-20 before:w-full before:absolute before:bottom-full"
        >
          <DropdownMenuPrimitive.Item
            className="flex select-none items-center rounded-md px-2 py-2 text-xs outline-none bg-blue-l-01 text-white focus:bg-blue-600 dark:focus:bg-gray-d-06"
          >
            <RocketIcon className="mr-2 h-3.5 w-3.5" />
            <a className="flex-grow text-white dark:text-gray-300" href={`https://snowtrace.io/address/${address}`} target='_blank' rel="noreferrer">
              See on Block Explorer
            </a>
          </DropdownMenuPrimitive.Item>

          {
            tokens?.length ? (
              <>
                <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
                <span className='text-gray-800 dark:text-gray-400'>Tokens:</span>
              </>
            ) : null
          }

          {
            tokens.map(token => (
              <DropdownMenuPrimitive.Item
                className="flex select-none items-center rounded-md px-2 py-2 text-xs outline-none text-blue-l-01 focus:bg-gray-100 dark:focus:bg-gray-d-06"
                key={token.address}
              >
                <div className='flex flex-row justify-between w-full'>
                  <span className="text-xs font-bold text-blue-l-01 dark:text-blue-d-01">
                    {token.name}
                  </span>
                  <span className="text-gray-800 dark:text-gray-400">
                    {token.balance.toFixed(2)}
                  </span>
                </div>
              </DropdownMenuPrimitive.Item>
            ))
          }

          <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

          <DropdownMenuPrimitive.Item
            className="flex select-none items-center rounded-md px-2 py-2 text-xs outline-none  text-blue-l-01 focus:bg-gray-100 dark:focus:bg-gray-d-06"
            onClick={() => deactivate()}
          >
            <Cross2Icon className="mr-2 h-3.5 w-3.5" />
            <span className="flex-grow text-gray-700 dark:text-gray-300">
              Logout
            </span>
          </DropdownMenuPrimitive.Item>  
          
        </DropdownMenuContent>
      </DropdownMenuPrimitive.Root>
  )
}