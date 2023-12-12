"use client"
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import React from "react";
const Hero = () => {
    return (
        <div className=" -mt-24 mb-9 ">
            <section className="text-gray-600 body-font bg-gray-100 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            I am
                            <br className="hidden lg:inline-block" />
                            <Typewriter
                                options={{
                                    strings: ['web developer', 'freelancer',],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <div className="w-[100px] h-[2px] bg-green-800"></div>
                        <i className="mb-8 leading-relaxed">
                            Hi! I really like coming up with new ideas and paying close attention to the little details. Recently, I have jumped into the world of artificial intelligence and computing, and its been a super exciting journey! I am all about learning and doing things really well, and thats already led to some cool achievements, especially in the fast-moving world of web development. Stick around, and lets explore how technology can make a big impact together. Oh, and guess what? I am also getting into digital marketing. Come along for the ride!
                        </i>
                        <div className="flex justify-center">
                            <Link href={"#contact"}>
                                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">
                                    Contact
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            width={500}
                            height={500}
                            className="object-cover object-center rounded mx-auto w-[15rem]"
                            alt="hero"
                            src={require("../../../public/pictures/profile.jpg")}
                        />
                    </div>
                </div>
            </section>
        </div>
    )

}
export default Hero