import Image from 'next/image'

const Imagegallery = () => {
  return (
    <div>
      <section className="text-gray-600">
        
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Website Components that set you up for success</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Get a headstart on your journey with 900+ free, customizable website components, strategically
              researched and tailored for every industry — or start from a scratch to build your website.
            </p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <div className="relative overflow-hidden">
                  <Image
                    alt="gallery"
                    className="w-full object-cover h-full object-center block transition-transform rounded-lg duration-300 transform scale-100 hover:scale-110"
                    src="/homepage/3d_object.png"
                    width={500} 
                    height={500} 
                    layout="responsive" 
                  />
                </div>
              </div>

              <div className="md:p-2 p-1 w-1/2 relative overflow-hidden">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110"
                  src="/homepage/animated-login-page.png"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>

              <div className="md:p-2 p-1 w-full relative overflow-hidden">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110"
                  src="/homepage/image_slider.png"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full relative overflow-hidden">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110"
                  src="/homepage/phtography.png"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>

              <div className="md:p-2 p-1 w-1/2 relative overflow-hidden">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110"
                  src="/homepage/surveyForm.png"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>

              <div className="md:p-2 p-1 w-1/2 relative overflow-hidden">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-transform duration-300 rounded-lg transform scale-100 hover:scale-110"
                  src="/homepage/lightbox.png"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imagegallery;
