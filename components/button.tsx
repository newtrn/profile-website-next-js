import clsx from 'clsx'
import { ReactNode } from 'react'

interface ButtonProps {
  text: string | ReactNode
  onClick?: () => void
  className?: string
}

const Button = ({ text, onClick, className }: ButtonProps) => (
  <button
    onClick={onClick}
    className={clsx(className, 'relative py-3 px-12 w-fit rounded overflow-hidden duration-300 ease shadow-button group hover:-translate-y-1')}
  >
    <div
      className="absolute top-0 left-0 h-full w-[150%] rounded ease duration-300 z-10 group-hover:-translate-x-4"
      style={{ backgroundImage: 'linear-gradient(to right, #853ed8, #fc1b85)' }}
    />
    <div className="relative z-20 text-sm font-bold text-white">{text}</div>
  </button>
)

export default Button
