const About = () => {
  return (
    <div className="">
      <div className="flex items-center bg-g-blue-3">
        <div className=" md:w-full max-w-7xl  my-0 mx-auto py-12 px-4">
          <div className="flex flex-row flex-col-reverse items-center">
            <div className="lg:w-3/4">
              <h3 className="text-gray-800 text-3xl mb-4 text-white font-light">
                Hello, CCD’22
              </h3>
              <p className="text-white text-base mb-4">
                We’re bringing you an opportunity to learn about Cloud Technology and
                Google Cloud Certifications from the industry experts at the Cloud
                Community Day India 2022. Our experts will tell you how Google Cloud
                Platform and Google Cloud Certifications can help you in accelerating
                your career by boosting your knowledge. During this 2 days event,
                you’ll also stand a chance to win exciting prizes and heavy discounts
                coupons on Google Cloud Certifications.
              </p>
              <a
                className=" bg-transparent border-2 text-white  h-fit w-fit text-base py-2 px-4 rounded text-center no-underline"
                href="https://sessionize.com/cloud-community-days"
                target={'_blank'}
                rel="noreferrer"
              >
                Learn More
              </a>
            </div>
            <div className="lg:1/4">
              <iframe
                title="Cloud Community Day 2022 Teaser"
                width="420"
                height="315"
                src="https://www.youtube.com/embed/Jhof8FwvNaY?autoplay=1&mute=1"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
