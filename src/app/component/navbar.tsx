import Image from "next/image"
import Link from "next/link"
import React from "react"
const Navbar = () => {
    return (
        <div className="bg-white z-50 sticky top-0 mb-24">
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image 
                        src={require("../../../public/pictures/logo.jpg")}
                         alt="ali"
                          width={100} 
                          height={100}
                          className="w-[44px]"
                          />
                        <span className="ml-3 text-xl">ALI BILAL</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className="mr-5 hover:text-green-500">Home</Link>
                        <Link href={"#about"} className="mr-5 hover:text-green-500">About</Link>
                        <Link href={"#skills"} className="mr-5 hover:text-green-500">Skills</Link>
                        <Link href={"#project"} className="mr-5 hover:text-green-500">Projects</Link>
                        <Link href={"#contact"} className="mr-5 hover:text-green-500">Contact</Link>
                    </nav>
                    <a 
                    target="blank"
                    href="/assets/mycv.pdf">
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none
                     hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        View CV
                        </button>
                        </a>
                </div>
            </header>
        </div>
    )
}
export default Navbar