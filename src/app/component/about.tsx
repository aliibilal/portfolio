import Image from "next/image";
import React from "react";
const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-2xl mx-auto w-[300] h-[400]"
              alt="hero"
              src={require("../../../public/pictures/profile.jpg")}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#FEE715]">
              ABOUT ME

            </h1>
            <i className="mb-5 leading-relaxed text-[#f8e9c4]">
              Hi! My name is ALI BILAL I am a 16-year-old high school student at Usman Public School in Karachi. Right now, I am diving into the world of coding with next.js, CSS, and HTML
              through the PIAIC course. But wait, there is more! I have also started exploring the cool universe of digital marketing with Bano Qabil.
              Join me on this journey as I learn, code, and market my way through the digital landscape. Exciting times ahead, and I will be sharing it all right here!
            </i>
            <div className="flex justify-center">
              <a href={"/assets/mycv.pdf"}
                target="blank">
                <button className=" inline-flex text-white bg-[#3A6B35] border-0 py-2 px-5 focus:outline-none hover:bg-[#1d3b1a] rounded-2xl text-lg ">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}
export default About