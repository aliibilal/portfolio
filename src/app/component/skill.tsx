import { AiOutlineCheckSquare } from "react-icons/ai";
import React from "react";
const Skill = () => {
    return (
        <div id="skills" className="bg-[#0d141b] ">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-[#519949] tracking-widest font-medium title-font mb-1">
                            SKILLS
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#FEE715]">
                            My Skills
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4 ">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full  p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#519949] text-white flex-shrink-0">
                                        <AiOutlineCheckSquare className=" text-xl font-bold" />
                                    </div>
                                    <i className="text-[#faef8e] text-lg title-font font-medium">
                                        Web Development
                                    </i>
                                </div>
                                <div className="flex-grow text-[#f8e9c4]">

                                    <i> Next.js, HTML5, CSS3,
                                        JavaScript</i>

                                </div>
                            </div>
                        </div>


                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full  p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#519949] text-white flex-shrink-0">
                                        <AiOutlineCheckSquare className=" text-xl font-bold" />
                                    </div>
                                    <i className="text-[#faef8e] text-lg title-font font-medium">
                                        Problem Solving
                                    </i>
                                </div>
                                <div className="flex-grow text-[#f8e9c4]">

                                    <i> I am really good at solving hard problems quickly and in a simple way.</i>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full  p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#519949] text-white flex-shrink-0">
                                        <AiOutlineCheckSquare className=" text-xl font-bold" />
                                    </div>
                                    <i className="text-[#faef8e] text-lg title-font font-medium">
                                        Communication
                                    </i>
                                </div>
                                <div className="flex-grow text-[#f8e9c4]">

                                    <i>Strong verbal and written communication skill</i>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>


    )
}
export default Skill