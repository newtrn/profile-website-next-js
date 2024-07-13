import React from 'react'

import ProfileImage from './components/profileimage'

import { infocaption } from '@/constants/infocaption'

const AboutMe = () => {
  return (
    <div className="bg-[#0f0d19] w-screen h-screen max-w-full">
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="w-[60%] h-full py-10">
              <ProfileImage />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-items-center items-center relative z-10">
            <div data-scroll data-scroll-speed="0.5" className="text-2xl font-semibold mb-5">
              {infocaption.fullName}
            </div>
            <div data-scroll data-scroll-speed="0.4" className="text-base mb-10">
              {infocaption.introSelf}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
