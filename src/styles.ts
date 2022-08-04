import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: '0px',
  },

  card: {
    width: '350px',
    height: '400px',
    '&:hover': {
      boxShadow: '0px 5px 10px ',
    },
  },

  cardContent: {
    backgroundColor: '#F5F5F5',
    height: '35%',
  },

  container: {
    backgroundColor: '#FAFAFA',
    paddingBottom: '2rem',
  },

  description: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '110px',
    backgroundColor: '#d2e5f6',
  },

  formFields: {
    display: 'flex',
    gap: '50px',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem',
  },

  socialMedia: {
    display: 'flex',
    alignItems: 'center',
    padding: '1px',
  },

  link: {
    fontSize: 'small',
  },

  icon: {
    marginRight: '1rem',
  },

  manufacturers: {
    height: '150px',
  },

  missionDisplay: {
    paddingTop: '2rem',
    marginTop: '0',
  },

  modalButton: {
    color: 'white',
    borderColor: '#white',
    '&:hover': {
      backgroundColor: 'black',
      borderColor: 'white',
    },
  },

  modalDescription: {
    padding: '10px 0 10px 0',
  },

  noData: {
    textAlign: 'center',
    backgroundColor: 'white',
  },
}))

export { useStyles }
