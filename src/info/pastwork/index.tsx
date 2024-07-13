import React from 'react'
import Slider from 'react-slick'

import Card from '@/components/card'
import Button from '@/components/button'
import PlaceholderImage from '@/components/placeholderimg'

import { infocaption } from '@/constants/infocaption'
import { projects } from '@/constants/projects'

const PastWork = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    prevArrow: <span className="icon-angle-left" />,
    nextArrow: <span className="icon-angle-right" />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className="bg-[#20202c] w-screen h-screen overflow-hidden pastwork">
      <div className="container mx-auto h-full">
        <div className="p-5 md:p-20 h-full content-wrapper flex flex-col justify-center">
          <div className="text-2xl font-semibold uppercase text-center mb-14">{infocaption.experienceTitle}</div>
          <div>
            <Slider {...settings}>
              {projects.map((project: any) => (
                <div className="project-card-wrapper p-5 sm:p-10" key={project.name}>
                  <Card className="project-card group bg-transparent shadow-none p-0 pt-[75%] relative rounded-xl">
                    <div className="project-img-wrapper group-hover:-translate-x-5 group-hover:-translate-y-5 absolute pt-[75%] w-full top-0 left-0 rounded-xl shadow-card-slider ease-in-out duration-200 z-[2]">
                      {project.thumbnail ? (
                        <img src={project.thumbnail} className="absolute w-full h-full top-0 left-0 rounded-xl object-cover" />
                      ) : (
                        <PlaceholderImage className="img-placeholder absolute w-full h-full top-0 left-0 rounded-xl" />
                      )}
                    </div>
                    <div
                      className="project-info group-hover:translate-x-5 group-hover:translate-y-5 flex flex-col justify-end items-end absolute top-0 left-0 w-full h-full ease-in-out duration-200 p-2 rounded-xl z-[1] shadow-card-slider"
                      style={{ backgroundImage: 'linear-gradient(180deg, rgba(153, 16, 81, 1) 0%, rgba(84, 38, 138, 1) 100%)' }}
                    >
                      <div className="font-semibold text-base text-center">{project.name}</div>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full flex justify-center">
            <Button
              className="my-0 mx-auto mt-14"
              text={
                <div className="flex justify-items-center items-center">
                  {infocaption.aboutMeBtnText}
                  <span className="icon-arrow-right ml-3" />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PastWork
