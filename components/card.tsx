import React, { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children?: ReactNode | string
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return <div className={clsx(className, 'p-5 rounded shadow-card bg-[#1c1c28]')}>{children}</div>
}

export default Card
