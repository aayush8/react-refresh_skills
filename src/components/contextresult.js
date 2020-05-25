import React, { useContext, createContext } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => (
  <Context.Provider value={{ name: 'aayush', age: 23 }}>
    {children}
  </Context.Provider>
)

const ContextApp = () => {
  const { name, age } = useContext(Context)
  return (
    <div>
      <h1>{`My name is ${name} and I am ${age} years old`}</h1>
    </div>
  )
}

export default () => (
  <ContextProvider>
    <ContextApp />
  </ContextProvider>
)
