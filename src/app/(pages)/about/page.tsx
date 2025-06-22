"use client";
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-wrap text-slate-800 mb-16">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-slate-600 text-center md:flex md:w-1/3">
        <Image
          className="mx-auto w-56 max-w-lg rounded-lg object-cover"
          src="/about/hellionwall.jpeg"
          alt="Moving Service"
          width={300}
          height={300}
        />
        <div className="mx-auto px-8 text-white">
          <p className="my-6 text-4xl font-bold leading-10">
            We will do the <span className="truncate border-b-8 border-yellow-400 font-bold text-yellow-400">your growth</span>
          </p>
          <p className=" text-lg font-medium">Moving has never been easier</p>
        </div>
      </div>

      <div className="flex w-full flex-col md:w-2/3 mt-12">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="#" className="text-2xl font-bold text-gray-800 bg-yellow-400 px-2 "> Contact US </a>
        </div>
        <div className="my-auto flex max-w-screen-md flex-col justify-center px-6 md:pl-12 pt-8 sm:pt-0 md:justify-start">

          <form className="flex flex-col items-stretch pt-3 pb-8 md:pt-8">
            <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
              <label className="block" htmlFor="name">
                <p className="mb-1 mt-2 text-sm text-gray-600">Name</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="text"
                  placeholder="Enter your name"
                />
              </label>

              <label className="block" htmlFor="phone">
                <p className="mb-1 mt-2 text-sm text-gray-600">Phone Number</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="phone"
                  placeholder="Enter your phone number"
                />
              </label>
              <label className="block" htmlFor="email">
                <p className="mb-1 mt-2 text-sm text-gray-600">Email address</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="email"
                  placeholder="Enter your email address"
                />
              </label>

              <label className="block" htmlFor="address">
                <p className="mb-1 mt-2 text-sm text-gray-600">Street Address</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  type="text"
                  placeholder="Enter your address"
                />
              </label>

              <label className="block sm:col-span-2" htmlFor="message">
                <p className="mb-1 mt-2 text-sm text-gray-600">Message</p>
                <textarea
                  className="h-32 w-full rounded-md border bg-white py-2 px-2 outline-none ring-yellow-500 focus:ring-2"
                  placeholder="Write your special requirements here"
                ></textarea>
              </label>
            </div>

            <div className="block">
              <label className="inline-block text-sm text-gray-500">
                By clicking submit you agree to the <a className="underline" href="#">Terms and Conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-full bg-yellow-400 px-4 py-2 text-center text-base font-semibold shadow-md outline-none ring-yellow-500 ring-offset-2 transition hover:bg-yellow-400 focus:ring-2 md:w-40"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
