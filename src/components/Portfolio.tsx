import React from 'react';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-16 px-32 bg-gray-100">
      <div className="mx-auto px-4 md:px-8 lg:px-16">
        <div className='flex pb-16'>
            <div>
                <h2 className="text-xl font-normal text-[#999999] mb-8">
                03 — Our Portfolio
                </h2>
                <p className="text-4xl font-light text-[#999999] mb-12 max-w-[90%]">
                Our user-centered design encourages productivity and boosts revenue.
                </p>
            </div>
            <div>
                <h2 className="text-6xl font-normal text-[#242424] mb-8">
                We don't do cookie-cutter solutions
                </h2>
                <button className='text-[#242424b3]'>Schedule a meeting</button>
            </div>
        </div>

        <div className="flex gap-2 py-2">
            <div className="flex-[1_0_60%]">
                <a className='w-full h-[594px] rounded-xl relative overflow-hidden block cursor-pointer group'>
                <div className='rounded-xl w-full h-full overflow-hidden flex items-center justify-center relative'>
                    <Image
                    src="/portfolio/spinapp.png"
                    alt="Project"
                    width={2000}
                    height={2000}
                    className="w-full object-cover translate-none flex-shrink-0 !relative h-[calc(100%+300px)] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
                    <div className="absolute bottom-0 left-0 right-0 max-w-[calc(100%-20px)] p-4 m-4 bg-white rounded-3xl flex justify-between items-center">
                        <div>
                            <h2 className="text-md font-semibold">SpinApp</h2>
                            <p className="text-[13px] text-[#8D8D8D]">Web Development for Web3 Gaming Platform with community-driven assets, decentralized economy and gamified experience</p>
                        </div>
                        <div className="transition-transform duration-500 group-hover:rotate-[360deg] bg-[#D9D9D9] p-2 rounded-full">
                            <MoveUpRight />
                        </div>
                    </div>
                </div>
                </a>
            </div>

            <div className="flex-[1_0_40%] py-2">
                    <a className='w-full h-[594px] rounded-xl relative overflow-hidden block cursor-pointer group'>
                        <div className='rounded-xl w-full h-full overflow-hidden flex items-center justify-center relative'>
                            <Image
                            src="/portfolio/bottle-haus.v2.png"
                            alt="Project"
                            width={2000}
                            height={2000}
                            className="w-full object-cover translate-none flex-shrink-0 !relative h-[calc(100%+300px)] transition-transform duration-500 group-hover:scale-105"
                            />
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
                            <div className="absolute bottom-0 left-0 right-0 max-w-[calc(100%-20px)] p-4 m-4 bg-white rounded-3xl flex justify-between items-center">
                                <div>
                                    <h2 className="text-md font-semibold">Bottle Haus</h2>
                                    <p className="text-[13px] text-[#8D8D8D]">Website Development for Bottle-Haus - Leading Online Retailer of Fine Alcoholic Spirits</p>
                                </div>
                                <div className="transition-transform duration-500 group-hover:rotate-[360deg] bg-[#D9D9D9] p-2 rounded-full">
                                    <MoveUpRight />
                                </div>
                            </div>
                        </div>
                    </a>
            </div>
        </div>

        <div className="flex gap-2">
            <div className="flex-[1_0_40%]">
                <a className='w-full h-[594px] rounded-xl relative overflow-hidden block cursor-pointer group'>
                <div className='rounded-xl w-full h-full overflow-hidden flex items-center justify-center relative'>
                    <Image
                    src="/portfolio/syfter.v2.jpg"
                    alt="Project"
                    width={2000}
                    height={2000}
                    className="w-full object-cover translate-none flex-shrink-0 !relative h-[calc(100%+300px)] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
                    <div className="absolute bottom-0 left-0 right-0 max-w-[calc(100%-20px)] p-4 m-4 bg-white rounded-3xl flex justify-between items-center">
                        <div>
                            <h2 className="text-md font-semibold">UI UX Design And Mobile Development for Fintech App</h2>
                            <p className="text-[13px] text-[#8D8D8D]">In Syfter App,we made it easy for people to invest into crypto and stock market assets with its user friendly interface and interactive swiping experience</p>
                        </div>
                        <div className="transition-transform duration-500 group-hover:rotate-[360deg] bg-[#D9D9D9] p-2 rounded-full">
                            <MoveUpRight />
                        </div>
                    </div>
                </div>
                </a>
            </div>

            <div className="flex-[1_0_60%]">
                    <a className='w-full h-[594px] rounded-xl relative overflow-hidden block cursor-pointer group'>
                        <div className='rounded-xl w-full h-full overflow-hidden flex items-center justify-center relative'>
                            <Image
                            src="/portfolio/vvs.v2.jpg"
                            alt="Project"
                            width={2000}
                            height={2000}
                            className="w-full object-cover translate-none flex-shrink-0 !relative h-[calc(100%+300px)] transition-transform duration-500 group-hover:scale-105"
                            />
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
                            <div className="absolute bottom-0 left-0 right-0 max-w-[calc(100%-20px)] p-4 m-4 bg-white rounded-3xl flex justify-between items-center">
                                <div>
                                    <h2 className="text-md font-semibold">Mobile App Design and Development for NFT Marketplace</h2>
                                    <p className="text-[13px] text-[#8D8D8D]">We created slick design for nft app that brings nft market right into users smartphone allowing them to trade tokens and share with their friends.</p>
                                </div>
                                <div className="transition-transform duration-500 group-hover:rotate-[360deg] bg-[#D9D9D9] p-2 rounded-full">
                                    <MoveUpRight />
                                </div>
                            </div>
                        </div>
                    </a>
            </div>
        </div>

        <div className="flex py-6">
            <a className='w-full h-[594px] rounded-xl relative overflow-hidden block cursor-pointer group'>
                <div className='rounded-xl w-full h-full overflow-hidden flex items-center justify-center relative'>
                    <Image
                        src="/portfolio/ritilo.v2.jpg"
                        alt="Project"
                        width={2000}
                        height={2000}
                        className="w-full object-cover translate-none flex-shrink-0 !relative h-[calc(100%+300px)] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>
                    <div className="absolute bottom-0 left-0 right-0 max-w-[calc(100%-20px)] p-4 m-4 bg-white bg-opacity-75 rounded-3xl flex justify-between items-center">
                        <div>
                            <h2 className="text-md font-semibold">Modern Design And Development of Ecommerce App</h2>
                            <p className="text-[13px] text-[#8D8D8D]">Retlify - is an ecommerce app that broadens limits of users and sellers by offering them interactive and innovative shopping experience</p>
                        </div>
                        <div className="transition-transform duration-500 group-hover:rotate-[360deg] bg-[#D9D9D9] p-2 rounded-full">
                            <MoveUpRight />
                        </div>
                    </div>
                </div>
            </a>
        </div>
        
      </div>
    </section>
  );
};

export default PortfolioSection;
