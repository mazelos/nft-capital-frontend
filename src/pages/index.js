/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { RocketIcon } from '@radix-ui/react-icons';

export default function Home() {
    return (
    <div className="homepage">
        <section className="relative w-full bg-white pt-16 dark:bg-blackDark">
            <div className="relative items-center justify-center w-full overflow-x-hidden lg:pb-40 sm:pt-8 md:pt-12">
                <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto lg:flex-row xl:px-0">
                    <div className="z-30 flex flex-col items-center w-full max-w-xl text-center lg:items-start lg:w-1/2 lg:pt-24 lg:text-left">
                        <h1 className="relative mb-4 text-5xl font-black leading-tight text-gray-900 dark:text-gray-100 lg:pr-16 sm:text-6xl lg:mb-8">Risk-Free Bootstrapping of your NFT Treasury e</h1>
                        <p className="pr-0 mb-8 text-base text-gray-600 dark:text-gray-400 sm:text-lg xl:text-xl lg:pr-20"></p>
                        <Link href="/create-pool" passHref>
                            <a className="relative flex items-center self-start w-auto py-3 px-6 mx-auto mt-0 text-base font-bold text-white bg-blue-l-01 hover:bg-blue-700 dark:bg-blue-d-01 dark:hover:bg-blue-600 transition-all border-gray-200 rounded-lg shadow-xl sm:mt-1 font-bold lg:mx-0"><FontAwesomeIcon icon={faRocket} fixedWidth className="mr-2" /> Create a pool</a>
                        </Link>
                    </div>
                    <div className="relative z-40 flex flex-col items-end justify-center w-full h-full lg:w-1/2 lg:pl-10">
                        <div className="container relative left-0 w-full max-w-3xl lg:absolute lg:w-screen">
                            <img src="./assets/nfts_landing.png" className="w-full h-auto mt-20 mb-20 ml-0 z-40 rounded-xl lg:mb-0 lg:h-full xl:-ml-12" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}
