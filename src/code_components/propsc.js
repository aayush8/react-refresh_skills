import React from 'react'
import Highlight from 'react-highlight.js'

export default () => (
  <Highlight>
    {`
        
        import React from 'react'

        const PassingValue = ({name}) => {
            return ( //using array function and destructuring
            <h1>The name of the passed data is {name}</h1>
            )
        }

        export default function App() {
            return (
            <div>
                <PassingValue name="Aayush"/>
                <PassingValue name="Sunil"/>
            </div>
            )
        }
                
    `}
  </Highlight>
)
