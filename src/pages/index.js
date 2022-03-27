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
                        <h1 className="relative mb-4 text-5xl font-black leading-tight text-gray-900 dark:text-gray-100 lg:pr-16 sm:text-6xl lg:mb-8">Risk-Free Bootstrapping of your NFT Treasury</h1>
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


        <section className="pt-10 box-border relative w-full font-sans leading-6 text-gray-700 bg-white border-0 border-solid dark:bg-blackDark dark:text-gray-300">
            <div className="box-border flex flex-col items-center px-8 py-20 mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center md:py-24">
                <div className="relative pb-10">
                    <h2 className="w-full m-0 font-sans text-4xl font-black leading-loose tracking-wide text-center text-gray-800 border-0 sm:text-5xl dark:text-gray-200">
                        How Does it work
                    </h2>
                </div>

                <div className="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-8">
                <div className="col-span-4 font-sans text-gray-700 bg-gray-50 rounded-3xl dark:bg-gray-d-06 dark:text-gray-300">
                        <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                            <div className="flex-shrink-0 p-3 font-sans text-gray-700 border rounded-full dark:text-gray-300">
                                <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">1</h6>
                            </div>
                            <div className="mt-4 font-sans text-left text-gray-700 border-0 sm:mt-2 sm:ml-4 dark:text-gray-300">
                                <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Set up a Pool</h6>
                                <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                    Set up a pool with a Capital Protection Ratio, 90% of the capital will be used for farming with an expected reward of 10k USDC annualized
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 font-sans text-gray-700 bg-gray-50 rounded-3xl dark:bg-gray-d-06 dark:text-gray-300">
                    <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                            <div className="flex-shrink-0 p-3 font-sans text-gray-700 border rounded-full dark:text-gray-300">
                                <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">2</h6>
                            </div>
                            <div className="mt-4 font-sans text-left text-gray-700 border-0 sm:mt-2 sm:ml-4 dark:text-gray-300">
                                <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Deposit</h6>
                                <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                    Users deposit into the pool and the capital starts accruing yield 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 font-sans text-gray-700 bg-gray-50 rounded-3xl dark:bg-gray-d-06 dark:text-gray-300">
                        <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                            <div className="flex-shrink-0 p-3 font-sans text-gray-700 border rounded-full dark:text-gray-300">
                                <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">3</h6>
                            </div>
                            <div className="mt-4 font-sans text-left text-gray-700 border-0 sm:mt-2 sm:ml-4 dark:text-gray-300">
                                <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Invest</h6>
                                <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                    The Pool manager has now 10k to invest in risky trades 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 font-sans text-gray-700 bg-gray-50 rounded-3xl dark:bg-gray-d-06 dark:text-gray-300">
                        <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                            <div className="flex-shrink-0 p-3 font-sans text-gray-700 border rounded-full dark:text-gray-300">
                                <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">4</h6>
                            </div>
                            <div className="mt-4 font-sans text-left text-gray-700 border-0 sm:mt-2 sm:ml-4 dark:text-gray-300">
                                <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">Earn</h6>
                                <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                    Investors can Leave the pool at any time and collect principal with reward
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative w-full bg-white pt-16 dark:bg-blackDark mb-8">
            <div className="relative items-center justify-center w-full overflow-x-hidden lg:pb-40 sm:pt-8 md:pt-12">
                <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto lg:flex-row xl:px-0">
                    <div className="z-30 flex flex-col items-center w-full max-w-xl text-center lg:items-start lg:w-1/2 lg:pt-24 lg:text-left">
                        <h1 className="relative mb-4 text-5xl font-black leading-tight text-gray-900 dark:text-gray-100 lg:pr-16 sm:text-6xl lg:mb-8">Principal capital to raise: 100k usdc</h1>
                        <p className="pr-0 mb-8 text-base text-gray-600 dark:text-gray-400 sm:text-lg xl:text-xl lg:pr-20">90/10 principal protected note strategy for nft treasury bootstrapping mechanism</p>
                        <Link href="https://docs.google.com/presentation/d/1rNppxcbeYU13vCqlrW7vnGGHkZqHSNVF2T8YgL7k9rQ/edit#slide=id.g11f39167f02_0_55" >
                            <a className="relative flex items-center self-start w-auto py-3 px-6 mx-auto mt-0 text-base font-bold text-white bg-blue-l-01 hover:bg-blue-700 dark:bg-blue-d-01 dark:hover:bg-blue-600 transition-all border-gray-200 rounded-lg shadow-xl sm:mt-1 font-bold lg:mx-0"><FontAwesomeIcon icon={faRocket} fixedWidth className="mr-2" />More details</a>
                        </Link>
                    </div>
                    <div className="relative z-40 flex flex-col items-end justify-center w-full h-full lg:w-1/2 lg:pl-10">
                        <div className="container relative left-0 w-full max-w-3xl lg:absolute lg:w-screen">
                            <img src="./assets/schema.png" className="w-full h-auto mt-20 mb-20 ml-0 z-40 rounded-xl lg:mb-0 lg:h-full xl:-ml-12" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
