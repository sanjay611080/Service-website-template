import React from 'react'

const Faq = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-400 to-blue-500 text-gray-100 mt-10 py-10 min-h-screen">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-5 divide-white-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl ">How do I access the free templates on your website?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>To access our collection of free templates, simply create an account on our website. Once you have created an account, you will have full access to download and utilize our templates for your website.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">Are there any charges for using the templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>No, all the templates available on our website are completely free to use. There are no hidden charges or fees associated with downloading and utilizing our templates.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">What kind of templates do you offer?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>We offer a wide variety of templates suitable for different types of websites, including business, portfolio, blog, e-commerce, and more. Our collection is constantly updated to provide you with the latest designs and functionalities.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">How easy is it to use the templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>Using our templates is incredibly easy! Once you have downloaded a template, we provide detailed instructions on how to customize and integrate it into your website. Even users with minimal technical knowledge can quickly create a professional-looking website using our templates.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">Can I customize the templates to fit my brand?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>Absolutely! Our templates are fully customizable, allowing you to tailor them to match your brand identity. You can easily modify colors, fonts, images, and layout elements to create a website that reflects your unique style and preferences.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">Do I need coding knowledge to use your templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>No coding knowledge is required to use our templates. We have designed them to be user-friendly and accessible to individuals with varying levels of technical expertise. You can simply use our intuitive customization tools to make the desired changes to your website.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer sm:text-2xl">What if I encounter any issues while using the templates?</summary>
                            <div className="px-4 pb-4 sm:text-xl">
                                <p>If you encounter any difficulties or have questions while using our templates, our customer support team is here to help! Simply reach out to us through our contact form or email, and we will assist you promptly to ensure a smooth experience with our templates.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
  )
}

export default Faq