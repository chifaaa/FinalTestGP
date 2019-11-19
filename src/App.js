import React from 'react';
import './App.css';
import Comment from './comments.js'
import UsersList  from './userslist'
import Posts from './posts.js'
import {BrowserRouter, Route,Switch} from 'react-router-dom'






const App = () =>  {
  

  

  
    return (
      <BrowserRouter>
      <div className="user-app">

        
        <main className="user-app-main">
            
        <Route exact path='/' component={UsersList }/>            
        
        <Switch>
      
      <Route exact path="/posts/:id" component={Posts} /> 
      <Route   path='/comment/:id' component={Comment}/>
        
      </Switch>      
        </main>
      </div>
      </BrowserRouter>

      
    );
  
}


export default App;
