"use client";
import React from "react";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center justify-center ">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#3B82F6]/20 blur-xl animate-float1"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-[#2563EB]/20 blur-xl animate-float2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-[#93C5FD]/10 blur-xl animate-float3"></div>

          {/* Blue Grid pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBkPSJNIDAgMCBMIDAgNTAgTCA1MCA1MCBMIDUwIDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM0I4MkY2IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <p className="text-lg md:text-xl font-medium text-[#3B82F6]">
              We Provide custom
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
              Business Dashboards
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto mb-10"
          >
            Join us to grow your business with our custom dashboard solutions. We
            provide tailored analytics and insights to help you make informed
            decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </div>

        {/* Scrolling animation indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-22 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce w-6 h-10 border-2 border-[#3B82F6] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-[#3B82F6] rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>

        {/* Custom animations in Tailwind config */}
        <style
          dangerouslySetInnerHTML={{
            __html: ` 
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, 15px) rotate(-3deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -10px) rotate(2deg); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}}
        />
      </section>

      {/* Card Section */}
      <section className="relative translate-y-[-4rem] flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative"
          >
            {/* Full Image inside the Card with no cropping */}
            <div
              className="w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/creation/dashboard.png)',
                paddingTop: '56.25%' // This is the 16:9 aspect ratio (9 / 16 = 0.5625, so 56.25% height)
              }}
            ></div>
          </motion.div>
        </div>
      </section>
      <div className="text-center mt-8 ">
        <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-gray-900 mb-4">
          It&apos;s easier with our Templates: Generate your website
        </h1>
        <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          Blank page anxiety? Forget it. Start creating your website with a simple website template. Choose any template, and within a minute, you&apos;ll have a ready draft for your website.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>

       <div className="bg-gray-100 my-16">
        <div className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
          <div className="max-w-lg pt-10 pr-10">
            <h2 className="mb-7 text-3xl font-medium text-gray-700 sm:text-4xl">Detailed Analytics</h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600 sm:leading-loose">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet deserunt? Enim praesentium dolor hic laudantium?
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-600 sm:leading-loose">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate repellat laboriosam fugiat illum excepturi dolore dolores inventore unde officiis amet, asperiores id, sed beatae quibusdam sint dolor voluptatum ex dolorum!
            </p>
          </div>

          <div className="-order-1 lg:order-1">
            <div className="mb-8">
              <Image
                className="shadow-blue-500/10 mb-7 h-full w-full rounded-xl object-contain shadow-lg"
                src="/creation/dashboard.png"
                alt="Dashboard 1"
                width={500}
                height={300}
              />
            </div>

          </div>
        </div>
      </div>

      <section className="mx-auto flex max-w-lg flex-col px-4 mb-12 lg:max-w-screen-xl lg:flex-row">
        {/* Left Section: Text Content */}
        <div className="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
          <div className="mb-5 text-4xl font-bold text-blue-600">
            Analytics App With an Edge. Innovation.
          </div>
          <div className="mb-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi, magni repellat doloremque autem
            tempore facere adipisci nam ratione vitae quibusdam earum optio laudantium ipsum aliquid harum nulla.
          </div>
          <div className="">
            <p className="font-bold text-blue-600">JAMES EDWARD</p>
            <p className="text-gray-500">CEO, Analytica</p>
          </div>
        </div>

        {/* Middle Section: Image and Content */}
        <div className="mr-10 mb-6 lg:mb-0">
          <div className="relative">
            <Image
              src="/creation/dashboard.png"
              alt="Analytics App"
              className="shadow-blue-600/10 w-full max-w-sm object-contain object-left shadow-lg"
              width={500}
              height={300}
            />
          </div>
          <div className="p-4">
            <p className="mb-1 font-medium uppercase text-blue-600">Who we are</p>
            <h5 className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, temporibus!</h5>

          </div>
        </div>

        {/* Right Section: Image and Content */}
        <div className="">
          <div className="relative">
            <Image
              src="/creation/dashboard.png"
              alt="Our Practices"
              className="shadow-blue-600/10 w-full max-w-sm object-contain object-left shadow-lg"
              width={500}
              height={300}
            />
          </div>
          <div className="p-4">
            <p className="mb-1 font-medium uppercase text-blue-600">Our Practices</p>
            <h5 className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, temporibus!</h5>
          </div>
        </div>
      </section>


     
      <section className="bg-blue-900 mb-16">
        <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-medium text-white">
              Unmatched <br />
              Services.<br />
              Unmatched <br />
              Excellence.
            </h2>
          </div>

          {/* Service Card 1 */}
          <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
            <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-16 w-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
            <p className="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
          </div>

          {/* Service Card 2 */}
          <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
            <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-16 w-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
            <p className="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
          </div>

          {/* Service Card 3 */}
          <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
            <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-16 w-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
            <p className="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
          </div>

          {/* Service Card 4 */}
          <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
            <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-16 w-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
            <p className="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
          </div>

          {/* Service Card 5 */}
          <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
            <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-16 w-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <p className="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
            <p className="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
