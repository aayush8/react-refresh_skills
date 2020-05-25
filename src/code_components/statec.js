import React from 'react'
import Highlight from 'react-highlight.js'

export default () => (
  <Highlight>
    {`
         import React, {useState} from 'react'

         export default function App() {
           //using state to check if the user is logged in or not
           const [IsLoggedIn, setIsLoggedIn] = useState(false)

           return (
             <div>
               <button onClick={ () => setIsLoggedIn(!IsLoggedIn) }>
                 {IsLoggedIn? "Log out": "Log in"}
               </button>
               <h1>Aayush is {IsLoggedIn? "logged in": "not logged in"}</h1>
             </div>
           )
         } 
    `}
  </Highlight>
)
