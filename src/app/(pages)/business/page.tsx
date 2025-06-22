import React from 'react'
import ImageSlider from './_components/ImageSlider'
import Link from 'next/link'
import Image from 'next/image'
import Faq from '@/app/_components/Faq'

const page = () => {
  return (
    <>
      <div>
        <div className='mb-16 shadow-lg'>
          <ImageSlider />
        </div>
        <div className="text-center sm:mt-20 mt-10 mb-20">
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Create More than an eCommerce Website</p>
          <h1 className="sm:text-3xl text-2xl font-extrabold title-font text-gray-900 mb-4">Sell everywhere with CodingCheff eCommerce Templates</h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className='bg-indigo-200'>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 className="sm:text-5xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">The all-in-one eCommerce platform</h2>
            <div className="md:w-3/5 md:pl-6">
              <p className="leading-relaxed text-base sm:text-xl">Sell online through your eCommerce website, social media and sales channels, or in-person with POS. Manage shipping, payments, marketing and more, from one unified dashboard.</p>
              <div className="flex md:mt-4 mt-6">
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">CodingCheff eCommerce Templates. </h1>
            <h2 className="text-base text-indigo-500 tracking-widest font-medium title-font mb-1">Fast. Reliable. Secure.</h2>

          </div>
          <div className="flex flex-wrap justify-center">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Industry-leading speed</h2>
              <p className="leading-relaxed text-base mb-4">Our powerful templates ensures fast page loading to deliver an enhanced online shopping experience for your customers.</p>

            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Scalable and resilient</h2>
              <p className="leading-relaxed text-base mb-4">Your eCommerce website is equipped to handle record traffic, high-volume sales, and up to 750 simultaneous transactions per second.</p>

            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Security</h2>
              <p className="leading-relaxed text-base mb-4">Enjoy our free, secure eCommerce templates! Elevate your online store with professionally crafted designs, ensuring both style and safety for your customers. </p>
            </div>
          </div>
        </div>
        <div className="container px-5 mb-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image alt="ecommerce" className="rounded-3xl lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center " src="/business/blog.png" width={150} height={150} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">MINI STORE</h1>
              <p className="text-lg leading-relaxed">Introducing our ecommerce website template, where you can showcase and sell mobile phones and watches effortlessly. With sleek design and intuitive navigation, it offers a seamless shopping experience for your customers. Customize product listings, manage inventory, and process orders efficiently. Elevate your online store with Mini Store and start selling today!</p>
              <div className="flex mt-5">
                <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=138288&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                <Link href="https://themewagon.github.io/MiniStore/" target='blank'>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">CYCLE</h1>
              <p className="text-lg leading-relaxed">Introducing our Cycle Hub ecommerce template, designed for seamless online bike sales. Explore a diverse range of bicycles, from mountain bikes to city cruisers. Elevate your cycling experience with our user-friendly platform. Customize listings, manage inventory, and deliver exceptional service. Launch your online bike shop with Cycle Hub today!</p>
              <div className="flex mt-5">
                <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=131544&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                <Link href="https://themewagon.github.io/Cycle/" target='blank'>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                </Link>
              </div>
            </div>
            <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src="/business/eCom2.png" width={150} height={150} />
          </div>
        </div>

        <div className="text-center sm:mt-20 mt-10 mb-20">
          <h1 className="sm:text-5xl text-2xl font-extrabold title-font text-gray-900 mb-4">Blog templates that set you up for success</h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Choose from 100+ free customizable templates built with everything you need.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="container px-5 mb-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image alt="ecommerce" className="rounded-3xl lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center " src="/business/blog.png" width={150} height={150} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">MINI STORE</h1>
              <p className="text-lg leading-relaxed">Introducing our ecommerce website template, where you can showcase and sell mobile phones and watches effortlessly. With sleek design and intuitive navigation, it offers a seamless shopping experience for your customers. Customize product listings, manage inventory, and process orders efficiently. Elevate your online store with Mini Store and start selling today!</p>
              <div className="flex mt-5">
                <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=138288&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                <Link href="https://themewagon.github.io/MiniStore/" target='blank'>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">CYCLE</h1>
              <p className="text-lg leading-relaxed">Introducing our Cycle Hub ecommerce template, designed for seamless online bike sales. Explore a diverse range of bicycles, from mountain bikes to city cruisers. Elevate your cycling experience with our user-friendly platform. Customize listings, manage inventory, and deliver exceptional service. Launch your online bike shop with Cycle Hub today!</p>
              <div className="flex mt-5">
                <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=131544&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                <Link href="https://themewagon.github.io/Cycle/" target='blank'>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                </Link>
              </div>
            </div>
            <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src="/business/eCom2.png" width={150} height={150} />
          </div>
        </div>

        <div className="text-center sm:mt-20 mt-10 mb-20">
          <h1 className="sm:text-5xl text-2xl font-extrabold title-font text-gray-900 mb-4">Restaurant templates that set you up for success</h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Choose from 100+ free customizable templates built with everything you need.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="container px-5 mb-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image alt="ecommerce" className="rounded-3xl lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center " src="/business/blog.png" width={150} height={150} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">MINI STORE</h1>
              <p className="text-lg leading-relaxed">Introducing our ecommerce website template, where you can showcase and sell mobile phones and watches effortlessly. With sleek design and intuitive navigation, it offers a seamless shopping experience for your customers. Customize product listings, manage inventory, and process orders efficiently. Elevate your online store with Mini Store and start selling today!</p>
              <div className="flex mt-5">
                <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=138288&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                <Link href="https://themewagon.github.io/MiniStore/" target='blank'>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">CYCLE</h1>
              <p className="text-lg leading-relaxed">Introducing our Cycle Hub ecommerce template, designed for seamless online bike sales. Explore a diverse range of bicycles, from mountain bikes to city cruisers. Elevate your cycling experience with our user-friendly platform. Customize listings, manage inventory, and deliver exceptional service. Launch your online bike shop with Cycle Hub today!</p>
              <div className="flex mt-5">
                <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=131544&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                <Link href="https://themewagon.github.io/Cycle/" target='blank'>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                </Link>
              </div>
            </div>
            <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src="/business/eCom2.png" width={150} height={150} />
          </div>
        </div>

       
         <div className="text-center sm:mt-20 mt-10 mb-20">
          <h1 className="sm:text-5xl text-2xl font-extrabold title-font text-gray-900 mb-4">Fitness templates that set you up for success</h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Choose from 100+ free customizable templates built with everything you need.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
      </div>

       <div className="container px-5 mb-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image alt="ecommerce" className="rounded-3xl lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center " src="/business/blog.png" width={150} height={150} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">MINI STORE</h1>
              <p className="text-lg leading-relaxed">Introducing our ecommerce website template, where you can showcase and sell mobile phones and watches effortlessly. With sleek design and intuitive navigation, it offers a seamless shopping experience for your customers. Customize product listings, manage inventory, and process orders efficiently. Elevate your online store with Mini Store and start selling today!</p>
              <div className="flex mt-5">
                <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=138288&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                <Link href="https://themewagon.github.io/MiniStore/" target='blank'>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">CYCLE</h1>
              <p className="text-lg leading-relaxed">Introducing our Cycle Hub ecommerce template, designed for seamless online bike sales. Explore a diverse range of bicycles, from mountain bikes to city cruisers. Elevate your cycling experience with our user-friendly platform. Customize listings, manage inventory, and deliver exceptional service. Launch your online bike shop with Cycle Hub today!</p>
              <div className="flex mt-5">
                <Link href="https://themewagon.com/thank-you-for-downloading/?item_id=131544&dl=eHI1UE5EV1B1V3lIc0JsRHdEQ0l4WnpBUitoNUd6c1BTRG5zRlI5S0s0MXdPckhLV1NCM2dBMUVobDlsYzdSTA==" target='blank'>
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Download</button></Link>
                <Link href="https://themewagon.github.io/Cycle/" target='blank'>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Preview</button>
                </Link>
              </div>
            </div>
            <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src="/business/eCom2.png" width={150} height={150} />
          </div>
        </div>

        {/* FAQ Section  */}
        <div className='my-24'>
          <Faq />
        </div>
    </>
  )
}

export default page