'use client'

import { AppProps } from 'next/app'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useEffect, useRef } from 'react'

import '../assets/icons/fonts/style.css'
import '../public/tailwindcss/output.css'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useLocoScroll from '@/hooks/useLocoScroll'

const App = ({ Component, pageProps }: AppProps) => {
  const containerRef = useRef(null)

  useLocoScroll(true)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </div>
    </LocomotiveScrollProvider>
  )
}

export default App
