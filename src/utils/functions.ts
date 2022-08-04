import { MissionProps } from '../interfaces/interface'

// Filter data according to manufacturer
export const filterData = (
  missions: MissionProps[],
  value: string,
): MissionProps[] => {
  return [...missions].filter((mission) =>
    mission.manufacturers.includes(value),
  )
}

// Sort data alphabetically according to name
export const sortData = (missions: MissionProps[]): MissionProps[] => {
  return [...missions].sort((a, b) => a.name.localeCompare(b.name))
}
