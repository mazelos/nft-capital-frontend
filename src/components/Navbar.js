import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import MetamaskConnect from './connectors/MetamaskConnect';
import Image from 'next/image';
// import { useWeb3React } from '@web3-react/core';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { useAuth } from '../managers/auth';
import ProfileBar from './ProfileBar';
// import ga from '../lib/ga';

import Logo from '../assets/logo.png';

const fetchSearchMatches = async (input) => {
  try {
    const res = await axios.get(`${process.env.apiUri}/search?name=${input}`);
    return res.data;  
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default function Navbar() {
  const [debounceInterval, setDebounceInterval] = useState(false);
  const [searchBlur, setSearchBlur] = useState(false);
  const [input, setInput] = useState('');
  const [searchMatches, setSearchMatches] = useState([]);
  const auth = useAuth();
  // const { active, account } = useWeb3React();

  const debounce = (func, delay) => {
    clearTimeout(debounceInterval);
    setDebounceInterval(setTimeout(func, delay));
  }

  const handleSearch = (input_) => {
    setInput(input_);
    if (!input_) return
    debounce(async () => {
      const matches = await fetchSearchMatches(input_);
      if (matches && Array.isArray(matches)) {
        setSearchMatches(matches);
      }
    }, 200)
  }

  return (
    <div className="mx-auto px-4 sm:px-10 lg:px-20 py-5 bg-white dark:bg-blackDark">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center">
          {/* <Link href="/" passHref>
            <a className="leading-none">
              <Image src={Logo} alt="logo" className="hidden sm:block cursor-pointer dark:filter dark:invert"  />
            </a>
          </Link> */}
          <div className="gap-10 mx-10 lg:mx-20 hidden sm:flex">
            <Link href="/join-pool" passHref>
              <span className="text-sm font-semibold cursor-pointer text-gray-l-01 hover:text-black dark:hover:text-white transition">Join Pool</span>
            </Link>
            <Link href="/create-pool" passHref>
              <span className="text-sm font-semibold cursor-pointer text-gray-l-01 hover:text-black dark:hover:text-white transition">Create Pool</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          {
            !auth?.connected
              ? <MetamaskConnect />
              : <ProfileBar />
          }
        </div>
      </div>
    </div>
  )
}