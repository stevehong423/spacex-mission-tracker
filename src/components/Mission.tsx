import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Modal,
  Typography,
} from '@mui/material'

// Icons
import TwitterIcon from '@mui/icons-material/Twitter'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ComputerIcon from '@mui/icons-material/Computer'

import { useStyles } from '../styles'
import { MissionProps } from '../interfaces/interface'

const Mission: React.FC<MissionProps> = ({
  name,
  description,
  manufacturers,
  twitter,
  website,
  wikipedia,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)

  const openModal = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography fontWeight="bold" variant="h6">
            {name}
          </Typography>
          {twitter && (
            <div className={classes.socialMedia}>
              <TwitterIcon className={classes.icon} />
              <Link href={twitter} className={classes.link}>
                {name} - Twitter
              </Link>
            </div>
          )}
          {wikipedia && (
            <div className={classes.socialMedia}>
              <MenuBookIcon className={classes.icon} />
              <Link href={wikipedia} className={classes.link}>
                {name} - Wikipedia
              </Link>
            </div>
          )}
          {website && (
            <div className={classes.socialMedia}>
              <ComputerIcon className={classes.icon} />
              <Link href={website} className={classes.link}>
                {name} - Website
              </Link>
            </div>
          )}
        </CardContent>
        <CardContent className={classes.manufacturers}>
          <Typography fontWeight="bold" fontSize={15}>
            Manufacturers:
          </Typography>
          <ul>
            {manufacturers.map((manufacturer, idx) => (
              <li key={`manufacturer_${idx}`}>{manufacturer}</li>
            ))}
          </ul>
        </CardContent>
        <div className={classes.description}>
          <Button variant="contained" onClick={openModal}>
            Click For Description
          </Button>
          <Modal
            open={open}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClose={handleClose}
          >
            <Box
              sx={{
                width: 700,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: '1px solid darkgrey',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6">{name} Mission Description:</Typography>
              <Typography
                className={classes.modalDescription}
                fontSize={13}
                width="80%"
              >
                {description}
              </Typography>
              <Button
                className={classes.modalButton}
                variant="outlined"
                onClick={handleClose}
              >
                Close Modal
              </Button>
            </Box>
          </Modal>
        </div>
      </Card>
    </div>
  )
}

export default Mission
