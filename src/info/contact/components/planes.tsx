// @ts-nocheck
import React from 'react'

import Plane from '@/assets/images/paper_plane.svg'
import Image from 'next/image'

const PlaneAnimate = () => {
  return (
    <div className="plane-wrapper">
      <div data-scroll data-scroll-speed="1.2" className="plane plane-1">
        <Image src={Plane} fill />
      </div>
      <div data-scroll data-scroll-speed="0.7" className="plane plane-2">
        <Image src={Plane} fill />
      </div>
    </div>
  )
}

export default PlaneAnimate
