"use client"
import { useTransition, useState } from 'react'
import Image from 'next/image'
import React from 'react'
import TabButton from './TabButton'


const Tab_Data = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul data-aos="zoom-in-up" className='font-bold list-disc pl-2'>
                <li data-aos="zoom-in-up">Adobe Illustrator</li>
                <li data-aos="zoom-in-up">Adobe Photoshop</li>
                <li data-aos="zoom-in-up">Canva</li>
            </ul>
        )
    },
]
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id: React.SetStateAction<string>) => {
        startTransition(() => {
            setTab(id)
        });
    }
    return (
        <section id="about" className='text-black container py-8'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/baki.png" alt="About Me" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col'>

                    <h1 data-aos="zoom-in-up" className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black mt-12'>About Us!</h1>
                    <p data-aos="zoom-in-up" className='text-base  lg:text-xl text-myblue'>
                        We are a team of creative professionals dedicated to bringing your ideas to life
                        through stunning visuals and innovative design solutions. Whether it is graphic design,
                        video editing, or branding, we have the skills and passion to make your project stand out.
                    </p>
                    <div className="flex flex-row justify-start mt-4">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}Skills{" "}
                        </TabButton>
                    </div>
                    <div className='mt-3'>{Tab_Data.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection