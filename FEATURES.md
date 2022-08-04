# Additional Features + Improvements

Given more time to work on this project, I would extend the GraphQL query to retrieve more than just the missions. 
Past Launches would be the next query I'd likely make, and I'd add more functionality to both filtering and sorting (likely by date, successful launches, etc.)

I'd also extend further on testing.  I'd give each component their own set of unit tests, and use fireEvent to test out the event handlers, and making sure the returned data and elements exist on each component and are displaying the correct value when changed.  

As functionality extends, I'd really pay attention to how I'm implementing the logic in the event handler, among the switch cases. I'd utilize the useMemo() hook as needed in order to cache certain function values that are costly to return (for example, a switch case that uses a combination of both sorting and filtering).  Also, in order to prevent useless component re-renders (namely, the "Mission" child component), I would consider the use of pure components, or the useCallback() / React.memo() in order to ensure a component re-renders only when a set of dependencies are updated.  