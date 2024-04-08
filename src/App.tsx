import { useEffect, useState } from 'react'
import homeImpLogo from '/home-imp-logo.png'
import windows1 from '/windows1.png'
import windows2 from '/windows2.png'
import windows3 from '/windows3.png'
import windows4 from '/windows4.png'
import windows5 from '/windows5.png'
import windows6 from '/windows6.png'
import windows7 from '/windows7.png'
import c1 from '/c1.png'
import c2 from '/c2.png'
import c3 from '/c3.png'
import minusCircle from '/minus-circle.png'
import plusCircle from '/plus-circle.png'
import checkList from '/checklist.png'
import phoneBook from '/phone-book.png'
import u1 from '/u1.png'
import u2 from '/u2.png'
import u3 from '/u3.png'
import './App.css'
import { StepIndicator } from './components/StepIndicator'
import { TestimonialCard } from './components/TestimonialCard'
import { WindowSelectionForm } from './components/WindowSelectionForm'
import { LocalContractors } from './components/LocalContractors'



function App() {
  const [windows, setWindows] = useState<{ src: string, title: string, selected: boolean }[]>([])
  const [windowsInvolved, setWindowsInvolved] = useState<{ text: string, selected: boolean }[]>([])
  const [steps, setSteps] = useState<{ icon: string, text: string }[]>([])
  const [testimonials, setTestimonials] = useState<{ user: string, pic: string, text: string }[]>([])

  useEffect(() => {
    let windowTypes = [
      {
        src: windows1,
        title: 'Double Hung'
      },
      {
        src: windows2,
        title: 'Single Hung'
      },
      {
        src: windows3,
        title: 'Casement',
        selected: false
      },
      {
        src: windows4,
        title: 'Bay/Bow',
        selected: false
      },
      {
        src: windows5,
        title: 'Awning',
        selected: false
      },
      {
        src: windows6,
        title: 'Sliding',
        selected: false
      },
      {
        src: windows7,
        title: 'Other',
        selected: true
      }
    ];

    setWindows(windowTypes)

    let windowsInvolvedData = [
      {
        text: "10+",
        selected: false
      },
      {
        text: "6-9",
        selected: false
      },
      {
        text: "3-5",
        selected: false
      },
      {
        text: "1-3",
        selected: false
      },
    ]

    setWindowsInvolved(windowsInvolvedData)

    let stepsInit = [
      {
        icon: checkList,
        text: "Fill some details about your windows project"
      },
      {
        icon: phoneBook,
        text: "Enter your contact info so we can find local contractors near you"
      },
      {
        icon: phoneBook,
        text: "You will get free estimates on your windows project from contractors in your area. Absolutely free & no obligation."
      }
    ]

    setSteps(stepsInit)


    let testimonialsInit = [
      {
        user: 'Helen Rowe',
        pic: u1,
        text: "This was an easy process and Home Improvements provided a great service connecting me to a professional"
      },
      {

        user: 'Dan Gibson',
        pic: u2,
        text: "I have used Home Improvements twice and both times have been good experiences."
      },
      {

        user: 'Ronald Lumpkins',
        pic: u3,
        text: "It was a good experience. Contractor was punctual and very professional. I would hire again."
      },
    ]

    setTestimonials(testimonialsInit)

  }, [])

  const [active, setActive] = useState(false)

  const onClickActive = () => {
    setActive(!active)
  }

  const [isOneFilled, setIsOneFilled] = useState(false)
  const [isTwoFilled, setIsTwoFilled] = useState(false)
  const [isThreeFilled, setIsThreeFilled] = useState(false)
  const [isFourFilled, setIsFourFilled] = useState(false)
  const [isFiveFilled, setIsFiveFilled] = useState(false)


  const onSelectWindowType = (title: string) => {
    console.log(title)
    const updatedWindows = windows.map(windowType => {
      if (windowType.title === title) {
        return { ...windowType, selected: true };
      }

      return { ...windowType, selected: false };
    });

    setWindows(updatedWindows);

    setIsOneFilled(true);
  }

  const onSelectWindowsInvolved = (selectedText: string) => {
    const updatedWindowsInvolved = windowsInvolved.map(option => {
      return {
        ...option,
        selected: option.text === selectedText,
      };
    });


    setWindowsInvolved(updatedWindowsInvolved);


    setIsThreeFilled(true);
  }


  const [replaceWindow, setReplaceWindow] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [zipCode, setZipCode] = useState('');


  const onSelectReplaceOrRepair = (option: string) => {
    setReplaceWindow(option);
    setIsTwoFilled(true)
  }

  const onSelectTimeFrame = (option: string) => {
    setTimeFrame(option);
    setIsFourFilled(true)
  }

  const onSelectZipCode = (option: string) => {
    setZipCode(option);

    if (option.trim().length > 0) {
      setIsFiveFilled(true)
    }
  }


  return (
    <div className='bg-white w-screen p-3 md:p-8 text-black'>
      <div className='w-full flex items-center justify-center'>
        <div className='h-[61px] w-full max-w-[1015px]'>
          <a href='#'>
            <img src={homeImpLogo} className="w-[180px]" alt="Vite logo" />
          </a>
        </div>
      </div>

      <div className='bg-gray-50 w-full flex items-center justify-center'>
        <div className='w-full max-w-[1100px]  rounded-lg flex flex-col md:flex-row p-5 md:p-10 '>
          <div className='md:w-5/12 w-full'>
            <LocalContractors />
          </div>
          <div className='md:w-7/12 w-full'>
            <WindowSelectionForm data={windows} windowsInvolved={windowsInvolved}
              onSelectWindowType={(x) => onSelectWindowType(x)}
              onSelectWindowsInvolved={(x) => onSelectWindowsInvolved(x)}
              onSelectRepairOrReplace={(x) => onSelectReplaceOrRepair(x)}
              onSelectTimeFrame={(x) => onSelectTimeFrame(x)}
              onSelectZipCode={(x) => onSelectZipCode(x)}
              timeFrame={timeFrame}
              zipCode={zipCode}
              replaceWindow={replaceWindow}
              conditionData={[isOneFilled, isTwoFilled, isThreeFilled, isFourFilled, isFiveFilled]} />

            <div className='flex space-x-2  items-center justify-evenly'>
              <div>
                <img className="w-full" src={c1} alt="Local Contractors" />
              </div>
              <div>
                <img className="w-full" src={c2} alt="Local Contractors" />
              </div>
              <div>
                <img className="w-full" src={c3} alt="Local Contractors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-50 w-full flex items-center justify-center'>
        <div className='max-w-[1100px]  w-full p-5 md:p-10 transition-opacity duration-500 ease-in-out'>
          {active && <div className=''>
            <div className='flex flex-col items-center p-5 md:p-10 bg-white space-y-4 py-8'>
              <div className='flex space-x-2 items-center bg-transparent outline outline-none focus:outline-none cursor-pointer' onClick={() => onClickActive()}>
                <img className="w-4" src={minusCircle} alt="Local Contractors" />
                <div>Show less information</div>
              </div>
              <div className='text-black font-bold'>Only 3 steps to Get New Windows and Save big:</div>

              <div className='flex flex-col md:flex-row md:space-x-3 space-y-4 md:space-y-0'>
                {steps.map((x, i) => (
                  <div className='w-full md:w-[250px] '>
                    <StepIndicator num={i} icon={x.icon} text={x.text} />
                  </div>
                ))}
              </div>

              <hr />
              <div className='font-bold'>
                What our Customers Say About Us
              </div>

              <div className='flex space-x-3 flex-col md:flex-row'>
                {testimonials.map((x, i) => (
                  <div>
                    <TestimonialCard pic={x.pic} user={x.user} text={x.text} />
                  </div>
                ))}
              </div>
            </div>
          </div>}

          {!active && <div className=''>
            <div className='flex flex-col items-center p-5 md:p-10 bg-white space-y-4 py-8'>
              <div className='flex space-x-2 items-center bg-transparent outline outline-none focus:outline-none cursor-pointer' onClick={() => onClickActive()}>
                <img className="w-4" src={plusCircle} alt="Local Contractors" />
                <div>For more information</div>
              </div>
            </div>
          </div>}


        </div>
      </div>

      <div className='w-full flex items-center justify-center'>
        <div className='max-w-[1015px] w-full text-center space-y-2 text-xs italic py-8'>
          <div>
            Home Services Campaign Disclaimer: <span className='font-thin'>home-improvements.pro is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and home-improvements.pro does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on home-improvements.pro.</span>
          </div>
          <div>
            Copyright © 2024 home-improvements.pro All Rights Reserved.

          </div>
          <div>
            Terms of Service | Privacy Policy | Do Not Sell | CCPA privacy | Contact Us
          </div>
        </div>
      </div>
    </div>
  )
}


export default App

