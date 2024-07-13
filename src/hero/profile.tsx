import Button from '@/components/button'
import { infocaption } from '@/constants/infocaption'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const ProfileHero = () => {
  const profileRef = useRef(null)

  const { scroll } = useLocomotiveScroll()

  // useEffect(() => {
  //   let ctx = gsap.context(() => {

  //     const tl = gsap.timeline({
  //       defaults: {
  //         ease: 'none',
  //       },

  //       scrollTrigger: {
  //         trigger: '.liquid',

  //         start: 'center center',
  //         end: '+=140%',

  //         scrub: true,
  //         pin: true,

  //         markers: true,
  //         refreshPriority: 2,
  //       },
  //     })

  //     tl.to('.liquid-morp', {
  //       scale: 1,
  //     }).to('.liquid-morp', {
  //       scale: 0.1,
  //     })

  //     ScrollTrigger.refresh()

  //     console.log('Hero ScrollTriggers created.')
  //   }, profileRef)

  //   return () => ctx.revert()
  // }, [])

  return (
    <div ref={profileRef} className="!bg-cover !bg-no-repeat !bg-center h-screen w-screen overflow-hidden max-w-full">
      <img
        data-scroll
        data-scroll-speed="-2"
        className="absolute z-0 h-screen w-screen max-w-full object-cover object-[80%_center] md:object-right"
        src="https://firebasestorage.googleapis.com/v0/b/profile-website-1.appspot.com/o/profile-image-crop.png?alt=media&token=4217a5bd-c969-49a2-96ad-fc49d2aa1ff0"
      />
      <div
        data-scroll
        data-scroll-speed="-2"
        className="!bg-cover !bg-no-repeat !bg-center h-screen w-screen max-w-full absolute z-0"
        style={{
          background: `linear-gradient(90deg, rgba(48, 24, 85, 1) 0%, rgba(13, 11, 23, 0.22454919467787116) 70%)`,
        }}
      />
      <div className="container mx-auto h-full relative z-10">
        <div className="flex items-center h-full">
          <div className="left-content-wrapper">
            <div className="text text-4xl font-bold text-space-more text-glow mb-3">
              <div data-scroll data-scroll-speed="0.5">
                {infocaption.introCaptionFirstLine}
              </div>
              <div data-scroll data-scroll-speed="0.7">
                {infocaption.introCaptionSecondLine}
              </div>
            </div>
            <div data-scroll data-scroll-speed="0.4" className="text opacity-50 uppercase text-xs tracking-widest mb-9">
              {infocaption.introSubCaption}
            </div>
            <div data-scroll data-scroll-speed="0.8">
              <Button text={infocaption.introBtnText} onClick={() => scroll.scrollTo('#contact-me')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHero
