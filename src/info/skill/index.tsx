import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import Masonry from 'react-masonry-css'

import SkillTab from './components/skilltab'
import Card from '@/components/card'

import { infocaption } from '@/constants/infocaption'
import { hardSkill, softSkill } from '@/constants/skilltabs'
import { hardSkills, softSkills } from '@/constants/skills'

import { useWindowSize } from 'usehooks-ts'

const Skills = () => {
  const [tab, setTab] = useState<string>(hardSkill)
  const [colNum, setColNum] = useState<number>(2)

  const { width: screenWidth } = useWindowSize()

  useEffect(() => {
    if (screenWidth <= 768) {
      setColNum(1)
    } else {
      setColNum(2)
    }
  }, [screenWidth])

  return (
    <div className="bg-[#1c1c28] w-screen xl:h-screen overflow-y-hidden">
      <div className="container mx-auto h-full">
        <div className="content-wrapper w-full h-full flex flex-col xl:flex-row items-center py-[60px] xl:py-0">
          <div className="left-content-wrapper xl:flex-1 sm:px-[60px]">
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl font-semibold uppercase mb-2">{infocaption.skillsTitle}</div>
              <SkillTab currentTab={tab} setCurrentTab={setTab} />
              <div className="text-base mt-5 xl:mt-14">{infocaption.skillsIntro}</div>
            </div>
          </div>
          <div className="right-content-wrapper xl:flex-1 relative w-full xl:w-auto">
            <div
              className={clsx(
                tab === hardSkill && '!opacity-100 relative',
                'hard-skill-content w-full opacity-0 ease-in-out duration-200 grid xl:grid-cols-4 xl:gap-y-10 absolute xl:relative mt-[50px] xl:mt-0 gap-y-[50px] grid-cols-[repeat(3,_minmax(0,_1fr))]'
              )}
            >
              {hardSkills.map((skill) => (
                <div className="skill-icon-wrapper text-6xl flex flex-col justify-center items-center">
                  <div className="mb-1">{skill.icon}</div>
                  <div className="text-base font-semibold">{skill.name}</div>
                </div>
              ))}
            </div>
            <div
              className={clsx(
                tab === softSkill ? '!opacity-100' : 'absolute',
                'soft-skill-content w-full opacity-0 ease-in-out duration-200 xl:absolute xl:top-1/2 xl:-translate-y-1/2 translate-y-0 top-[50px] p-[30px] xl:p-0'
              )}
            >
              <Masonry breakpointCols={colNum} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {softSkills.map((skill) => (
                  <Card>
                    <div className="icon text-5xl mb-4">{skill.icon}</div>
                    <div className="text-base font-bold">{skill.name}</div>
                    <div className="text-case">{skill.des}</div>
                  </Card>
                ))}
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
