import React from 'react'
import SectionTitle from './SectionTitle';



import { 
  FaMobileAlt, 
  FaTruck, 
  FaWifi, 
  FaBluetooth, 
  FaVolumeMute, 
  FaLock, 
  FaBox, 
  FaTools, 
  FaRegCheckCircle 
} from 'react-icons/fa';

const features = [
  {
    name: "Smartphone Integration",
    description: "Seamlessly control, secure, and monitor your garage using the myQ app, offering convenience from anywhere, anytime.",
    icon: FaMobileAlt
  },
  {
    name: "Key by Amazon Compatibility",
    description: "Connect to Key by Amazon through the myQ app for secure and hassle-free in-garage delivery of groceries and Amazon packages.",
    icon: FaTruck
  },
  {
    name: "Cutting-Edge Garage Technology",
    description: "Enhanced Wi-Fi connectivity and expanded memory support new myQ features and solutions, ensuring next-generation performance.",
    icon: FaWifi
  },
  {
    name: "Integrated Bluetooth Technology",
    description: "Streamline setup and connection to the myQ app, other myQ devices, and smart home solutions, reducing installation time.",
    icon: FaBluetooth
  },
  {
    name: "Whisper-Quiet Operation",
    description: "Enjoy peaceful living spaces near the garage with the ultra-quiet DC motor and smooth soft start/stop operation.",
    icon: FaVolumeMute
  },
  {
    name: "Trusted Security",
    description: "Benefit from Security+ 2.0 technology, providing unmatched encryption with over 100 billion codes for enhanced security.",
    icon: FaLock
  },
  {
    name: "Additional Features",
    description: "Includes two 1-button remotes, motion-detecting wall control, wireless keypad, and safety sensors for added convenience and safety.",
    icon: FaBox
  },
  {
    name: "Additional Assurances",
    description: "Backed by a lifetime motor and belt warranty, along with a 5-year parts warranty and 1-year accessories warranty for peace of mind.",
    icon: FaTools
  },
  {
    name: "BILT Intelligent Instructions",
    description: "Simplify installation with 3D instructions, ensuring a quick and hassle-free setup process.",
    icon: FaRegCheckCircle
  }
];


const Features = () => {

  return (
    <div className='py-16 pt-20' id='features'>
      <SectionTitle
        title='Key Features'
      />
      <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
        {features.map((feature, index) => (
          <div key={index} className='flex flex-col items-center border hover:border-brand-main px-4 py-6 gap-6 hover:shadow-lg  hover:scale-105 transition-all duration-300'>
            <feature.icon className='text-[40px] text-brand-main' />
            <h4 className='text-center text-text-dark font-semibold text-2xl'>{feature.name}</h4>
            <p className='text-center text-text-light'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
