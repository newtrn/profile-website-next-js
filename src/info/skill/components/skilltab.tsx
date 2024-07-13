import React from 'react'
import clsx from 'clsx'

import { hardSkill, softSkill } from '@/constants/skilltabs'

interface SkillTabProps {
  currentTab: string
  setCurrentTab: (val: string) => void
}

const SkillTab = ({ currentTab, setCurrentTab }: SkillTabProps) => {
  const handleSetCurrentTabHardSkill = () => {
    setCurrentTab(hardSkill)
  }
  const handleSetCurrentTabSoftSkill = () => {
    setCurrentTab(softSkill)
  }
  return (
    <div className="flex py-1">
      <div
        className={clsx(
          hardSkill === currentTab && '!text-[#00ec98]',
          'px-5 text-[#66667e] relative cursor-pointer ease-in-out duration-200 flex items-center justify-content-center',
          'first:after:absolute first:after:right-0 first:after:top-0 first:after:h-full first:after:w-[2px] first:after:bg-[#66667e]'
        )}
        onClick={handleSetCurrentTabHardSkill}
      >
        <div
          className={clsx(
            hardSkill === currentTab && '!opacity-100',
            'w-2.5 h-2.5 rounded-full bg-[#00ec98] mr-2.5 shadow-[0_0_5px_1px_#00ec98] opacity-0 duration-200 ease-in-out'
          )}
        />
        <div className="text">{hardSkill}</div>
      </div>
      <div
        className={clsx(
          softSkill === currentTab && '!text-[#00ec98]',
          'px-5 text-[#66667e] relative cursor-pointer ease-in-out duration-200  flex items-center justify-content-center',
          'first:after:absolute first:after:right-0 first:after:top-0 first:after:h-full first:after:w-[2px] first:after:bg-[#66667e]'
        )}
        onClick={handleSetCurrentTabSoftSkill}
      >
        <div
          className={clsx(
            softSkill === currentTab && '!opacity-100',
            'w-2.5 h-2.5 rounded-full bg-[#00ec98] mr-2.5 shadow-[0_0_5px_1px_#00ec98] opacity-0 duration-200 ease-in-out'
          )}
        />
        <div className="text">{softSkill}</div>
      </div>
    </div>
  )
}

export default SkillTab
