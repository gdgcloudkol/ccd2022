const Sponsors = () => {
  return (
    <div className="max-w-7xl my-12 mx-auto">
      <div className="text-3xl flex justify-center font-normal my-12 text-g-gray-8">
        Partners
      </div>

      <p className="mb-4 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
        We're thankful to all our sponsors who are making CCD 2022 Kolkata amazing.{' '}
        <br />
        To become a sponsor, please email as at{' '}
        <a href="mailto:partners@gdgcloud.kolkata.dev">
          partners@gdgcloud.kolkata.dev
        </a>
      </p>
      <br />
      <div className="max-w-sm mx-auto">
        <a
          href="https://developers.google.com/"
          className="no-underline"
          target="_blank"
          rel="noreferrer"
        >
          <div className="m-8 bg-white overflow-hidden rounded-lg shadow-lg">
            <img
              className="object-cover object-center w-fit px-4 py-16 mx-auto"
              src="/ccd2022/sponsors/google-developers.svg"
              alt="avatar"
            />

            <div className="flex items-center px-6 py-2 bg-red-500 text-center justify-center">
              <h1 className="mx-3 text-lg font-semibold text-white">
                Title Sponsor
              </h1>
            </div>
          </div>
        </a>
      </div>
      <div className="max-w-sm mx-auto">
        <a
          href="https://wandb.ai"
          className="no-underline"
          target="_blank"
          rel="noreferrer"
        >
          <div className="m-8 bg-white overflow-hidden rounded-lg shadow-lg">
            <img
              className="object-cover object-center w-fit px-4 py-16 mx-auto"
              src="/ccd2022/sponsors/wandb.svg"
              alt="avatar"
            />

            <div className="flex items-center px-6 py-2 bg-yellow-400 text-center justify-center">
              <h1 className="mx-3 text-lg font-semibold text-black">Gold Sponsor</h1>
            </div>
          </div>
        </a>
      </div>
      <div className="max-w-sm mx-auto">
        <a
          href="https://dynopii.com/"
          className="no-underline"
          target="_blank"
          rel="noreferrer"
        >
          <div className="m-8 bg-white overflow-hidden rounded-lg shadow-lg">
            <img
              className="object-cover object-center w-fit px-4 py-16 mx-auto"
              src="/ccd2022/sponsors/Dynopii.svg"
              alt="avatar"
            />

            <div className="flex items-center px-6 py-2 bg-gray-400 text-center justify-center">
              <h1 className="mx-3 text-lg font-semibold text-black">
                Silver Sponsor
              </h1>
            </div>
          </div>
        </a>
      </div>
      <div className="flex justify-center md:justify-start text-2xl lg:text-xl font-light text-g-blue-3 mt-16">
        Also backed by
      </div>

      <section>
        <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <a
              href="https://sessionize.com"
              className="no-underline"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6">
                <img
                  className="object-cover object-center w-fit mb-8 rounded-xl"
                  src="/ccd2022/sponsors/sessionize.svg"
                  alt="blog"
                />
                <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                  CFP Platform Sponsor
                </h2>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sponsors
