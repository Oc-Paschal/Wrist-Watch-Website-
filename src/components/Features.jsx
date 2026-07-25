import React from 'react'
import { BsTruck, BsHeadset, BsShieldCheck } from 'react-icons/bs'
import Content from '../data/Content.json'

const iconMap = {
  BsTruck: BsTruck,
  BsHeadset: BsHeadset,
  BsShieldCheck: BsShieldCheck,
}

const Features = () => {
  const { features } = Content

  return (
    <div className="py-12 sm:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <div key={index} className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                <Icon className="text-4xl text-red-500 shrink-0" />
                <div>
                  <h3 className="font-raleway font-bold text-gray-800">{feature.title}</h3>
                  <p className="font-raleway text-gray-500 text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features