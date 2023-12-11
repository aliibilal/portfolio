import Image from "next/image";
const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300] h-[400]"
              alt="hero"
              src={require("../../../public/pictures/profile.jpg")}
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ABOUT ME

            </h1>
            <i className="mb-5 leading-relaxed">
              Hi! My name is ALI BILAL I'm a 16-year-old high school student at Usman Public School in Karachi. Right now, I'm diving into the world of coding with next.js, CSS, and HTML
              through the PIAIC course. But wait, there's more! I've also started exploring the cool universe of digital marketing with Bano Qabil.
              Join me on this journey as I learn, code, and market my way through the digital landscape. Exciting times ahead, and I'll be sharing it all right here!
            </i>
            <div className="flex justify-center">
              <a href={"/assets/mycv.pdf"}
                target="blank">
                <button className=" inline-flex text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-800 rounded text-lg ">
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