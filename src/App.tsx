import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { useStyles } from './styles'
// Components
import MissionDisplay from './components/MissionDisplay'
// Apollo
import client from './apollo/apolloClient'
import { ApolloProvider } from '@apollo/client'

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <RocketLaunchIcon className={classes.icon} />
          <Typography variant="h6">SpaceX Mission Tracker</Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.container}>
        <MissionDisplay />
      </div>
    </ApolloProvider>
  )
}

export default App
