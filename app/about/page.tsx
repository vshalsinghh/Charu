import React from 'react'
import { AboutHero } from '../components/about/aboutbanner'
import { OurStory } from '../components/about/ourstory'
import { Objective } from '../components/about/objective'
import { WhyChooseUs } from '../components/about/whychoseus'

export default function AboutPage(){
  return (
    <div>
      <AboutHero />
      <OurStory />
      <Objective />
      <WhyChooseUs />
    </div>
  )
}

