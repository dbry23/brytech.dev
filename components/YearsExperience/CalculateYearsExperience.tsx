export default function calculateYearsExperience(): number {
  const firstDayAsProgrammer: Date = new Date('June 6, 2006')
  const currentDay: Date = new Date(new Date().toISOString().slice(0, 10))
  const msOfExperience: number = currentDay.valueOf() - firstDayAsProgrammer.valueOf()

  const MILLISECONDS_PER_YEAR: number = 1000 * 60 * 60 * 24 * 365
  const yearsOfExperience: number = Math.floor(msOfExperience/MILLISECONDS_PER_YEAR)

  return yearsOfExperience
}
