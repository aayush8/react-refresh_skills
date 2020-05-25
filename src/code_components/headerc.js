import React from 'react'
import Highlight from 'react-highlight.js'

export default () => (
  <Highlight>
    {`
      import React from 'react'

      function Header() {
        return (
          <h1>This is a heading coming from a header file</h1>
        )
      }

      export default function App() {
        return ( //note to keep everything inside one main tag like div tag here
          <div>
            <Header/> 
            <Header/> 
            <Header/>
          </div>
        ) //it will render you header component thrice
      }
      `}
  </Highlight>
)
