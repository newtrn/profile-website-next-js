import React from 'react'
import clsx from 'clsx'

interface PlaceholderImageProps {
  className?: string
}

const PlaceholderImage = ({ className }: PlaceholderImageProps) => {
  return (
    <div className={clsx(className, 'flex justify-center items-center w-full h-full bg-[#20202c] text-[50px]')}>
      <span className="icon-image bg-image-placeholder bg-clip-text text-fill-color-trans" />
    </div>
  )
}

export default PlaceholderImage
