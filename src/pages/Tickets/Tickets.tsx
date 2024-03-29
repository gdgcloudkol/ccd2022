import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDoc, doc } from 'firebase/firestore'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import Title from '../../Components/Title/Title'

const Tickets = () => {
  const [user, loading]: any = useAuthState(auth)
  const [applied, setApplied] = useState(false)
  const [conferencePassTicket, setConferencePassTicket] = useState('')
  const [workshopPassTicket, setworkshopPassTicket] = useState('')

  const navigate = useNavigate()

  const storage = getStorage()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }

    async function DocumentID() {
      if (user) {
        const docRef = doc(db, 'register', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setApplied(true)
          // navigate('/ccd2022/dashboard')
        } else {
          // console.log('No such document!')
          navigate('/ccd2022')
        }
      }
    }

    async function TicketID() {
      if (applied) {
        const docRef = doc(db, 'tickets', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          console.log(docSnap.data().conference)
          const listRef = ref(storage, user.uid + '/')
          listAll(listRef)
            .then((res) => {
              res.items.forEach((itemRef) => {
                getDownloadURL(ref(storage, itemRef.fullPath))
                  .then((url) => {
                    if (itemRef.name.endsWith("conference_pass.png")) {
                      setConferencePassTicket(url)
                    }
                    else if (itemRef.name.endsWith("workshop_pass.png")) {
                      setworkshopPassTicket(url)
                    }
                  })
                  .catch((error) => {
                    console.log('error', error)
                  })
              })
            })
            .catch((error) => {
              console.log('error', error)
            })
        } else {
          console.log('No such document!')
          navigate('/ccd2022')
        }
      }
    }

    if (user) {
      DocumentID()
    }

    if (applied) {
      TicketID()
    }
  }, [user, loading, applied, storage])

  return (
    <>

      <div className="w-full max-w-7xl items-center justify-center flex flex-col lg:flex-row my-0 mx-auto gap-12 pt-20 lg:pt-28 lg:pb-[62px] px-4">
        <div className="w-full">
          <div className="text-6xl text-g-gray-8 mb-8 font-light">Tickets</div>
      <p className="mb-4 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
        Congratulations on making it through hundreds of applications! <br />
        We look forward to see you at the Cloud Community Days.
      </p>
      <div className="flex flex-col lg:flex-row my-0 lg:justify-center items-center ">
        {conferencePassTicket || workshopPassTicket ? (
          <>
            {workshopPassTicket ? (
              <div className="m-4 flex flex-col items-center bg-gray-100 rounded-lg border shadow-md md:flex-row max-w-sm md:max-w-xl hover:bg-gray-200">
                <img
                  className="object-cover w-full max-h-screen border rounded-l-lg md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
                  src={workshopPassTicket}
                  alt="Workshop Pass"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Workshop Pass
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    &#128197; 27 August, 2022 <br />
                    &#128205; Kolkata
                  </p>
                  <a
                    href={workshopPassTicket}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-center text-white no-underline bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Download
                  </a>
                  <br />
                  <span>
                    Share the news with your friends, use hashtags #CCDKol and
                    #CloudCommunityDays, tag us with @GDGCloudKol (
                    <a href="https://twitter.com/gdgcloudkol">Twitter</a>,{' '}
                    <a href="https://facebook.com/gdgcloudkol">Facebook</a>,{' '}
                    <a href="https://instagram.com/gdgcloudkol">Instagram</a> or{' '}
                    <a href="https://www.linkedin.com/company/gdgcloudkol/">
                      LinkedIn
                    </a>
                    ) and stand a chance to win exclusive goodies! 🎉
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
            {conferencePassTicket ? (
              <div className="flex flex-col items-center bg-gray-100 rounded-lg border shadow-md md:flex-row max-w-sm md:max-w-xl hover:bg-gray-200">
                <img
                  className="object-cover w-full max-h-screen border rounded-l-lg md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
                  src={conferencePassTicket}
                  alt="Conference Pass"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Conference Pass
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    &#128197; 28 August, 2022 <br />
                    &#128205; Taal Kutir Convention Center by Taj, Kolkata
                  </p>
                  <a
                    href={conferencePassTicket}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-center text-white no-underline bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Download
                  </a>
                  <br />
                  <span>
                    Share the news with your friends, use hashtags #CCDKol and
                    #CloudCommunityDays, tag us with @GDGCloudKol (
                    <a href="https://twitter.com/gdgcloudkol">Twitter</a>,{' '}
                    <a href="https://facebook.com/gdgcloudkol">Facebook</a>,{' '}
                    <a href="https://instagram.com/gdgcloudkol">Instagram</a> or{' '}
                    <a href="https://www.linkedin.com/company/gdgcloudkol/">
                      LinkedIn
                    </a>
                    ) and stand a chance to win exclusive goodies! 🎉
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <div className="w-full my-0 mx-auto py-48">
            <div className="flex justify-center items-center">
              <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      <div className="text-center">
        <a className="btn btn-primary my-4" href="/ccd2022">
          Go Home
        </a>
      </div>
      <br />
      <br />
      </div>
    </div>
    </>
  )
}

export default Tickets
