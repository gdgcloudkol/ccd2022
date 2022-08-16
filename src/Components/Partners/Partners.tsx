
import nseclogo from '../../Images/gdsc-nsec-logo.png'
import ciemlogo from '../../Images/gdsc-ciem-logo.png'
import gcelogo from '../../Images/gdsc-gce-logo.png'
import gecbsplogo from '../../Images/gdsc-gecbsp-logo.png'
import sitlogo from '../../Images/gdsc-sit-logo.png'


const Partners = () => {
  return (
    <div className="max-w-7xl my-16 mx-auto">
      <div className="flex justify-center md:justify-start text-2xl lg:text-xl font-light text-g-blue-3">
        Community Partners
      </div>
      <div className=" w-fit my-4 space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-5 mx-handler">
        <a
          className="w-fit rounded cursor- pointer"
          href="https://dscnsec.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={nseclogo} alt="logo" className="w-[220px]" />
        </a>
        <a
          className="w-fit rounded cursor- pointer"
          href="https://dscciem.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ciemlogo} alt="logo" className="w-[220px]" />
        </a>
        <a
          className="w-fit rounded cursor- pointer"
          href="https://gdscsit2021.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={sitlogo} alt="logo" className="w-[220px]" />
        </a>
        <a
          className="w-fit rounded cursor- pointer"
          href="https://twitter.com/DSC_GCE"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gcelogo} alt="logo" className="w-[220px]" />
        </a>
        <a
          className="w-fit rounded cursor- pointer"
          href="https://gdsc.community.dev/events/details/developer-student-clubs-government-engineering-college-bilaspur-presents-intro-to-kaggle-gdsc-gecsp/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gecbsplogo} alt="logo" className="w-[220px]" />
        </a>
      </div>
    </div>
  )
}

export default Partners
