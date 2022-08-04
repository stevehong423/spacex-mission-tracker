import { useState, useEffect, useMemo } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Grid,
  Typography,
  Container,
} from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_MISSIONS } from '../queries/getMissions'
import { useStyles } from '../styles'
// Components
import Mission from './Mission'
// Interface
import { MissionProps } from '../interfaces/interface'
// Util Functions
import { filterData, sortData } from '../utils/functions'

const MissionDisplay: React.FC = () => {
  const [filterMethod, setFilterMethod] = useState<string>('')
  const [sortMethod, setSortMethod] = useState<string>('')
  const [missions, setMissions] = useState<MissionProps[]>([])
  const [updatedData, setUpdatedData] = useState<boolean>(false)

  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_MISSIONS)

  useEffect(() => {
    if (loading === false && data && !updatedData) {
      setMissions(data.missions)
      setUpdatedData(false)
    }
  }, [data, loading, missions, updatedData])

  const sortedData = useMemo(() => {
    return sortData(missions)
  }, [missions])

  if (loading) return <p className={classes.noData}>Loading...</p>
  if (error) return <p className={classes.noData}>Error</p>

  // Given more time, I'd add to these methods!
  const sortMethods: string[] = ['Alphabet', 'Original']
  const filterMethods: string[] = ['SSL', 'Boeing', 'Original']

  const handleChange = (e: SelectChangeEvent<string>) => {
    switch (e.target.value) {
      // Sort Methods:
      case 'Original':
        setSortMethod(e.target.value)
        setFilterMethod(e.target.value)
        setUpdatedData(false)
        break
      case 'Alphabet':
        setUpdatedData(true)
        setSortMethod(e.target.value)
        setMissions(sortedData)
        break
      // Filter Methods: (By Manufacturer. Also can sort the filtered data)
      case 'SSL':
        const sslData =
          sortMethod === 'Alphabet'
            ? sortData(filterData(data.missions, e.target.value))
            : filterData(data.missions, e.target.value)

        setUpdatedData(true)
        setFilterMethod(e.target.value)
        setMissions(sslData)
        break
      case 'Boeing':
        const boeingData =
          sortMethod === 'Alphabet'
            ? sortData(filterData(data.missions, e.target.value))
            : filterData(data.missions, e.target.value)

        setUpdatedData(true)
        setFilterMethod(e.target.value)
        setMissions(boeingData)
        break
      default:
        return
    }
  }

  return (
    <div className={classes.missionDisplay}>
      <Container maxWidth="lg">
        <div className={classes.header}>
          <Typography variant="h3" align="center">
            Mission Display
          </Typography>

          <div className={classes.formFields}>
            <FormControl fullWidth>
              <InputLabel data-testid="sortedField">Sort By...</InputLabel>
              <Select
                label="sort"
                value={'' || sortMethod}
                onChange={handleChange}
              >
                {sortMethods.map((sortOption, idx) => (
                  <MenuItem key={`sort_${idx}_method`} value={sortOption}>
                    {sortOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel data-testid="filteredField">Filter By...</InputLabel>
              <Select
                label="filter"
                value={'' || filterMethod}
                onChange={handleChange}
              >
                {filterMethods.map((filterOption, idx) => (
                  <MenuItem key={`filter_${idx}_method`} value={filterOption}>
                    {filterOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </Container>

      <Grid container spacing={4} justifyContent="center">
        {!loading &&
          !error &&
          missions.map((mission: MissionProps) => (
            <Grid item key={`mission_${mission.id}`}>
              <Mission
                id={mission.id}
                name={mission.name}
                description={mission.description}
                manufacturers={mission.manufacturers}
                twitter={mission.twitter}
                website={mission.website}
                wikipedia={mission.wikipedia}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default MissionDisplay
