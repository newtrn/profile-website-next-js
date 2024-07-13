import React, { ReactNode } from 'react'

interface InfoBoxProps {
  title: string
  text: string | ReactNode
  icon: ReactNode
}

const InfoBox = ({ title, text, icon }: InfoBoxProps) => {
  return (
    <div className="flex items-center">
      <div
        className="icon-wrapper text-lg w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundImage: 'linear-gradient(to right, #853ed8, #fc1b85)' }}
      >
        {icon}
      </div>
      <div className="info-wrapper ml-5">
        <div className="text-base">{title}</div>
        <div className="text-base font-semibold select-text">{text}</div>
      </div>
    </div>
  )
}

export default InfoBox
