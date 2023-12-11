import Image from 'next/image'
import Link from 'next/link'
import React from "react";

const Project = () => {
  return (
    <div id='project' className="">
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              MY PROJECTS
            </h1>

          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]  justify-center">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0  object-cover object-center w-[500px] h-[200px]"
                  src={require('../../../public/pictures/fce.jpeg')}
                  width={300}
                  height={300}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                    FACEBOOK
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    LOGIN PAGE
                  </h1>
                  <i className="leading-relaxed">
                    This is Facebook Login Page
                  </i>
                  <Link href={"https://login-ali-bilals-projects.vercel.app/"}>
                    <p className="leading-relaxed text-green-500 hover:text-green-800 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>

  )
}
export default Project