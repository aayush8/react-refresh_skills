import React from 'react'
import Highlight from 'react-highlight.js'

export default () => (
  <Highlight>
    {`
       import React from 'react'
       import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

       const Home = () =>  (<h1>Aayush is at home right now</h1>)
       const About = () => (<h1>This is all about Aayush</h1>)
       const ContactUs = () => (<h1>You can contact Aayush at any time</h1>)

       export default () => (
         <Router>
           <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/about" exact component={About} />
             <Route path="/contactus" exact component={ContactUs} />
           </Switch>
           <ul>
             <Link to="/"><li>Home</li></Link>
             <Link to="/about"><li>About us</li></Link>
             <Link to="/contactus"><li>Contact us</li></Link>
           </ul>
         </Router>
       )        
    `}
  </Highlight>
)
