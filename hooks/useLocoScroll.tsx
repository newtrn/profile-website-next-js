import { useLayoutEffect } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const useLocoScroll = (start: boolean) => {
  gsap.registerPlugin(ScrollTrigger)

  const { scroll: locoScroll } = useLocomotiveScroll()

  useLayoutEffect(() => {
    if (!start) return

    setTimeout(() => {
      const scrollEl = document.querySelector('[data-scroll-container]')

      locoScroll?.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          if (locoScroll) {
            return arguments.length ? locoScroll?.scrollTo(value, { duration: 0, disableLerp: true }) : locoScroll?.scroll.instance.scroll.y
          }
          return null
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        //@ts-ignore
        pinType: document.querySelector('[data-scroll-container]')?.style.transform ? 'transform' : 'fixed',
      })

      const lsUpdate = () => {
        if (locoScroll) {
          locoScroll.update()
        }
      }

      // ScrollTrigger.defaults({ scroller: scrollEl });

      ScrollTrigger.defaults({
        scroller: scrollEl,
        markers: true,
      })

      ScrollTrigger.addEventListener('refresh', lsUpdate)
      //ScrollTrigger.refresh();
      console.log('ScrollTrigger initiated.')
      console.log('Loco-scroll initiated.')
    }, 1)

    return () => {
      locoScroll?.destroy()
      ScrollTrigger.removeEventListener('refresh', locoScroll?.update())
    }
  }, [start, locoScroll])
}

export default useLocoScroll
