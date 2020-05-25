import React from 'react'
import Highlight from 'react-highlight.js'

export default () => (
  <Highlight>
    {`
        import React, {useContext, createContext} from 'react'

        const Context = createContext()

        const ContextProvider = ({children}) => (
          <Context.Provider value={{name: "aayush", age: 23}}>
            {children}
          </Context.Provider>
        )

        const App = () => {
          const {name, age} = useContext(Context)
          return (
            <div>
              <h1>{\`My name is \${name} and I am \${age} years old\`}</h1>
            </div>
          )
        }

        export default () => (
          <ContextProvider>
            <App />
          </ContextProvider>
        )          
    `}
  </Highlight>
)
