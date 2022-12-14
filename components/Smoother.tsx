import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React from 'react'
import { createContext, useState, useEffect } from 'react'
import ScrollSmoother from '../ScrollSmoother'

export const SmootherContext = React.createContext({})

export const Smoother = ({ children }: any) => {
  const [smoother, setSmoother] = useState<any>()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    })

    setSmoother(smoother)
    smoother && ScrollTrigger.refresh()
  }, [])

  useEffect(() => {
    smoother && smoother.effects('[data-speed]', '[data-lag]', {})
  }, [smoother])

  return <SmootherContext.Provider value={smoother}>{children}</SmootherContext.Provider>
}
