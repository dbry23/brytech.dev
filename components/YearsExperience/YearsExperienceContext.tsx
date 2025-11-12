'use client'

import { createContext } from 'react'
import calculateYearsExperience from './CalculateYearsExperience'

export const YearsExperienceContext = createContext(19)

export function YearsExperienceProvider({children}: {children: React.ReactNode}) {
  return (
    <YearsExperienceContext.Provider value={calculateYearsExperience()}>
      {children}
    </YearsExperienceContext.Provider>
  )
}
