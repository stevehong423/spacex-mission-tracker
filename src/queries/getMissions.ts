import { gql } from '@apollo/client'

const GET_MISSIONS = gql`
  {
    missions {
      id
      name
      description
      manufacturers
      twitter
      website
      wikipedia
    }
  }
`

export { GET_MISSIONS }
