"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Imagegallery from './_components/imagegallery/Imagegallery';

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  // To avoid hydration errors, we can wait until the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="text-gray-600 body-font mt-12">

      {/* Image and Heading section */}
      <div className="w-full bg-gray-100 py-32 sm:py-80 px-10 relative mb-4">
        <Image
          alt="gallery"
          className="w-full object-cover h-full object-center block absolute inset-0"
          src="/homepage/frame.jpg"
          layout="fill"
        />
      </div>
      <div className="text-center sm:mt-20 mt-10 mb-20">
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

      {/* Mockup section */}
      <div className='bg-white max-sm:hidden dark:bg-gray-900 px-8'>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Create a website without limits
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Unleash your creativity! Ditch design limitations with our free website templates. Build anything you can imagine, from a sleek portfolio to a bustling online store. We empower you to bring your vision to life, for free.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Create
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>

          {isClient && (
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                className="rounded"
                src="/homepage/mockup.jpg"
                alt="mockup"
                width={1500}
                height={800}
                layout="responsive"
              />
            </div>
          )}
        </div>
      </div>

      {/* Image Gallery Section  */}
      <Imagegallery />

      <div className="container px-5  mx-auto flex flex-wrap">
        <h2 className="sm:text-6xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Build more than a website</h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base">From selling online, starting a blog and organizing events to promoting your business and building your community, create a website that can grow with you</p>
          <div className="flex md:mt-4 mt-6">

            <a className="text-indigo-500 inline-flex items-center ">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mockup section 2 */}
      <div className="mx-auto mt-8 flex px-5 py-14 md:flex-row flex-col items-center bg-gradient-to-r from-indigo-500 to-blue-600">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 h-[300px] relative">
          <Image
            className="object-cover object-center rounded w-full h-full"
            alt="hero"
            src="/homepage/way.png"
            layout="fill"
          />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            And create it your way
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            - Easy copy and paste <br />
            - 1000’s of advanced design components <br />
            - Custom functionality, responsive and more <br />
            - Full-stack web templates with custom functionality <br />
            - API technology-based templates
          </p>
          <div className="flex justify-center">
            <Link href="#">
              <button className="hover:bg-white-100 bg-white py-2 px-4 font-bold rounded-full shadow-md focus:outline-none">
                <span className="hidden md:inline-block text-indigo-600">Get Started</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Text area section  */}
      <div className="container px-16 mt-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">FREE TEMPLATES</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Launch Your Dream Site, Faster: Free Coding Templates</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unleash your website vision without the coding burden. Free website templates offer beautiful, customizable layouts to jumpstart your project. Get SEO-friendly foundations, responsive design, and built-in security – all at zero cost. Focus on your content, let the template handle the res.</p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Kickstart Your Build</h2>
            <p className="leading-relaxed text-base mb-4">Save time and effort with pre-designed layouts you can customize.</p>
            <a className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">SEO-Ready Foundations</h2>
            <p className="leading-relaxed text-base mb-4">Built-in best practices to help your site rank higher in search results.</p>
            <a className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Secure from the Start</h2>
            <p className="leading-relaxed text-base mb-4">Coded with security in mind, protecting your content and visitors.</p>
            <a className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Responsive & Adaptable</h2>
            <p className="leading-relaxed text-base mb-4">Templates work flawlessly across devices, desktops to mobiles.</p>
            <a className="text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <Link href="#">
          <button className="flex mx-auto mt-16 text-white bg-gradient-to-r from-indigo-500 to-blue-600 border-0 py-2 px-8 focus:outline-none hover:text-gray-100 rounded-full font-bold text-lg">Get Started</button>
        </Link>
      </div>

      {/* Steps section  */}
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-stretch">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">How to create a website for free</h1>
            <p className="lg:w-2/3 mx-auto font-medium leading-relaxed text-xl">Follow these 5 simple steps to create a website today..</p>
          </div>
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                <p className="leading-relaxed">Sign up for a free website templates and choose what kind of website you want to create</p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                <p className="leading-relaxed">​Choose a template or get a website made for you. Choose your starting point</p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                <p className="leading-relaxed">Drag and drop 1000s of web templates. Add text, galleries, videos, vector art and more</p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                <p className="leading-relaxed">Get ready for business. Add an online store, booking system, members area and blog</p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative ">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                <p className="leading-relaxed">Publish your website and go live. Start building your professional online presence.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 md:w-1/2 md:pl-10">
            <Image
              src="/homepage/steps.jpg"
              alt="step"
              width={800} // Adjust for quality
              height={600} // Proportional to width
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

        </div>
      </div>

      <div className=" bg-gradient-to-r from-indigo-500 to-blue-600 px-5 py-24 mx-auto mb-18">
        <div className="flex flex-wrap w-full  flex-col items-center text-center">
          <h1 className="sm:text-6xl text-2xl font-medium title-font mb-10 text-white">Tomorrow’s success starts today.</h1>

          <Link href="#">
            <button className=" hover:bg-white-100 sm:text-xl bg-white  py-2 px-4 font-bold rounded-full shadow-md focus:outline-none">
              <span className="hidden md:inline-block text-indigo-600">Get Started</span>
            </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
