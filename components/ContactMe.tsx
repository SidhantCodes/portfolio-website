import { contactme } from '@/constants'
import Heading from './Heading'
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';

const ContactMe = () => {
  return (
    <div id='contact' className='flex-col items-center justify-center mx-20 my-40'>
      <Heading head={`Let's Connect`}/>
      <p className='text-white font-medium text-center text-lg lg:text-2xl px-2 lg:px-10 py-20'>{contactme}</p>
      <span className="flex justify-center items-center gap-x-2">
        <IoMdMail size={20} /> <Link href={`mailto:mishrasidhant01@gmail.com`} className='text-lg mb-1 transition duration-300 ease-in-out hover:text-purple-500'>mishrasidhant01@gmail.com</Link>
      </span>
    </div>
  )
}

export default ContactMe