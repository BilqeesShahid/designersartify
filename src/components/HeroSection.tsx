"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="py-10 sm:py-20 mt-20 px-4 bg-gray-400 relative z-10">
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                {/* Text Section */}
                <div className='col-span-12 lg:col-span-8  place-self-center order-2 sm:text-left lg:order-1'>
                    <h1 className='text-myindigo mb-4 py-4 sm:py-8 text-4xl sm:text-6xl lg:text-5xl font-extrabold'>
                        <span data-aos="zoom-in-up" className='text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black'>Hello, We're{" "}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Graphic Designers',
                                1000,
                                'Editors',
                                1000,
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-black text-base sm:text-lg lg:text-xl mx-auto mb-6 py-4 sm:py-6">
                        We are a team of creative professionals dedicated to bringing your ideas to life through stunning visuals and innovative design solutions. Whether it's graphic design, video editing, or branding, we have the skills and passion to make your project stand out.
                    </p>
                    <div className='flex flex-col sm:flex-row sm:space-x-4'>
                        <Link href="#contact">
                            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 sm:mb-0 
                     bg-gradient-to-br from-gray-500 to-black text-white 
                     transition duration-300 ease-in-out hover:opacity-90">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Image Section */}
                <div className='col-span-12 lg:col-span-4 place-self-center order-1 lg:order-2 mt-4 lg:mt-0'>
                    <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
                        <Image
                            src="/images/haroon12.png"
                            alt="hero image"
                            className='w-full h-full object-cover'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
