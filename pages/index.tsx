import ProfileHero from '@/src/hero/profile'
import AboutMe from '@/src/info/abouteme'
import ContactMe from '@/src/info/contact'
// import PastWork from '@/src/info/pastwork'
import Skills from '@/src/info/skill'

const HomePage = () => {
  return (
    <div data-scroll-section>
      <ProfileHero />
      <AboutMe />
      <Skills />
      {/* <PastWork /> */}
      <ContactMe />
    </div>
  )
}

export default HomePage
