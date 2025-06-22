import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 pb-18 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link className="flex title-font font-bold items-center md:justify-start justify-center text-gray-900" href={"/"}>
              <Image
                src="/img/logo.svg"
                alt="Hellistudios"
                width={80} 
                height={50}
              />

            </Link>
            <p className="mt-2 text-sm text-gray-500">The Hellistudios offers a complete free website templates – enabling anyone to create and grow online.</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">SERVICES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-600 hover:text-indigo-600 hover:underline" href='/WebsiteTemplate'>Web-Development</Link>
                </li>
                <li>
                  <Link href="AdvanceWebsite" className="text-gray-600 hover:text-indigo-600 hover:underline">Web-Design</Link>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900  tracking-widest text-sm mb-3">SOLUTIONS</h2>
              <nav className="list-none mb-10">
                
                <li>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">E-Commerce Website</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Restaurant Website</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Portfolio Website</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Online Booking</Link>
                </li>
              </nav>
            </div>
           
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">USEFUL LINKS</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-indigo-600 hover:underline">Home</Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Creations</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-indigo-600 hover:underline">Services</Link>
                </li>

              </nav>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start w-full md:w-auto">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">
                Leave a Comment
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white hover:text-gray-100 bg-gradient-to-r from-indigo-500 to-blue-600 py-2 px-4 font-bold rounded-full shadow-md focus:outline-none"
            >
              Submit
            </button>
          </div>

          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <Link href="#" className="text-gray-500 hover:text-indigo-600 cursor-pointer">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link href="#" className="ml-3 text-gray-500 hover:text-indigo-600 cursor-pointer">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-gray-500 hover:text-indigo-600 cursor-pointer"
            >
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
            <Link href="#" className="ml-3 text-gray-500 hover:text-indigo-600 cursor-pointer">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </Link>
          </span>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 cursor-pointer text-sm">
            © Copyright 2025 Hellistudios Free Html Website Templates. All Rights Reserved.
          </span>
        </div>
      </div>

      </footer>
    </>
  )
}

export default Footer
