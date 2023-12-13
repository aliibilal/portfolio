import React from "react";
const Contact = () => {
  return (
    <div id="contact" className="bg-[#0d141b]">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.4232674564178!2d67.06102594928561!3d24.95170992098308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3409938bea62b%3A0x7645cbd2d125bbe6!2sPlot%20A%2016%2C%20Sector%2015-A%2F5%20Sector%2015%20A%205%20Buffer%20Zone%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1701858269679!5m2!1sen!2s"
              style={{ filter: " contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-amber-300 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-amber-100">
                  Sector15A5  Bufferzone
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-amber-300 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-[#448b3c] leading-relaxed">aliiblal112@gmail.com</a>
                <h2 className="title-font font-semibold text-amber-300 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-amber-100">03341860478</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4 rounded-xl">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#e4b94d]">
              Contact
            </h2>
            <form
              action="https://formspree.io/f/xrgwnryl"
              method="POST"
              target="blank">
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-amber-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-300 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-amber-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-300 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-amber-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-slate-300 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-300 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                  required
                />
              </div>
              <button className="text-white bg-[#3A6B35] border-0 py-2 px-6 focus:outline-none hover:bg-[#254921] rounded text-lg">
                send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact


