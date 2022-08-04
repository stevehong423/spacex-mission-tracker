import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { GET_MISSIONS } from './queries/getMissions'
import MissionDisplay from './components/MissionDisplay'
import App from './App'

const mocks = [
  {
    request: {
      query: GET_MISSIONS,
    },
    result: {
      data: {
        missions: [
          {
            id: '1',
            name: 'Test Name',
            description: 'Test Description',
            wikipedia: 'Wikipedia',
            website: 'Website',
            twitter: 'Twitter',
            manufacturers: ['Test Manufacturer'],
          },
        ],
      },
    },
  },
]

describe('', () => {
  it('renders App component', () => {
    render(<App />)
    const linkElement = screen.getByText(/SpaceX Mission Tracker/i)
    expect(linkElement).toBeInTheDocument()
  })
})

// Test MissionDisplay to query mock Data and check return values
describe('Test MissionDisplay', () => {
  it('test query', async () => {
    const { findByText, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MissionDisplay />
      </MockedProvider>,
    )

    expect(getByText('Loading...')).toBeInTheDocument()

    const header = await findByText('Test Name')

    expect(header).toBeInTheDocument()
    expect(screen.queryByTestId('sortedField')).toBeTruthy()
    expect(screen.queryByTestId('filteredField')).toBeTruthy()
  })
})
