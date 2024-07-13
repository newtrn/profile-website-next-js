import React from 'react'

import { infocaption } from '@/constants/infocaption'

const ProfileImage = () => {
  return (
    <div className="w-full h-full">
      <div className="relative p-4 img-profile-wrapper">
        <img
          data-scroll
          data-scroll-speed="1.3"
          className="relative w-full h-full z-[2]"
          src="https://firebasestorage.googleapis.com/v0/b/profile-website-1.appspot.com/o/profile-img-9-16.png?alt=media&token=415e04eb-715d-4a75-8aad-458210dbeae8"
        />
        <div data-scroll data-scroll-speed="0.8" className="profile-img-caption text-xl lg:text-4xl font-black italic uppercase text-glow">
          {infocaption.aboutmeCaption}
        </div>
      </div>
    </div>
  )
}

export default ProfileImage
