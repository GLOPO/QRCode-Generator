import React from 'react'
import code from '../public/image-qr-code.png'
import Image from 'next/image'

const page = () => {
  return (
    <main className='container bg-[#d6e2f0] h-screen w-full max-w-[3000px] flex items-center justify-center'>
      <section className='bg-[#ffffff] flex items-center justify-center text-center p-2 flex-col w-[80%] md:w-1/3 lg:w-1/4 mx-auto rounded-2xl'>
        <div className='rounded-2xl'>
          <Image alt='' src={code} className='w-fit rounded-2xl'/>
        </div>

        <div>
          <h4 className="text-[#1f3251] font-bold text-xl my-2">Improve your front-end skills by building projects</h4>

          <p className='text-[#68778d] text-sm'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </section>
    </main>
  )
}

export default page