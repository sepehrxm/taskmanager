import Link from 'next/link'
import { SiGoogletagmanager } from "react-icons/si";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-accent">
      <div className="hero-content text-center">
        <div className="max-w-md">
        <SiGoogletagmanager size={50} color='teal' className='w-full'/>
          <h1 className="text-6xl font-bold">
            sTasks
          </h1>
          <p className="py-6 text-lg text-accent-content">
         A dynamic platform for managing what matters most. Streamline your tasks effortlessly and stay in control of your to-do list. 
          </p>
          <Link href='/tasks' className='btn btn-success btn-lg'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
