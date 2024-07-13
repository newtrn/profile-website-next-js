import React from 'react'

import InfoBox from './components/infobox'
import PlaneAnimate from './components/planes'

import { infocaption } from '@/constants/infocaption'

const ContactMe = () => {
  return (
    <div id="contact-me" className="bg-[#0f0d19] w-screen pt-[100px] xl:pt-0 pb-[300px] xl:pb-0 xl:h-screen overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="content-wrapper flex justify-center h-full flex-col-reverse xl:flex-row">
          <div className="left-content flex-1 z-[1] relative">
            <PlaneAnimate />
          </div>
          <div className="p-5 lg:p-10 right-content flex-1 z-[2] flex flex-col justify-center">
            <div className="text-2xl font-semibold uppercase text-center">{infocaption.contactMeTitle}</div>
            <div className="text-base mt-5 xl:mt-10 px-0 xl:px-20 mb-14 text-center">{infocaption.contactMeCaption}</div>
            <div className="contact-wrapper grid mx-auto w-full max-w-[600px] grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-6">
              <div>
                <InfoBox
                  icon={<span className="icon-mobile" />}
                  title={infocaption.phoneTitle}
                  text={<a href={`tel:${infocaption.phoneNumber}`}>{infocaption.phoneText}</a>}
                />
              </div>
              <div>
                <InfoBox
                  icon={<span className="icon-github" />}
                  title={infocaption.githubTitle}
                  text={
                    <a target="_blank" href={infocaption.githubLink}>
                      {infocaption.githubText}
                    </a>
                  }
                />
              </div>
              <div>
                <InfoBox
                  icon={<span className="icon-at" />}
                  title={infocaption.emailTitle}
                  text={<a href={`mailto:${infocaption.emailText}`}>{infocaption.emailText}</a>}
                />
              </div>
              <div>
                <InfoBox
                  icon={<span className="icon-codepen" />}
                  title={infocaption.codepenTitle}
                  text={
                    <a target="_blank" href={infocaption.codepenLink}>
                      {infocaption.codepneText}
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
