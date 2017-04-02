import React, { PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { fb } from '../db';

async function getUser() {
  const user = await fb.auth().onAuthStateChanged(user => user);
  console.log(user);
}
getUser();

const PrivateComponent = ({ component, props }) => {
  return React.createElement(component, props)
}

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => {
    return true ?
      (React.createElement(component, props)) :
      (<Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>)
  }}/>
);

export default PrivateRoute;

{/**
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => {
    return (
    fb.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        console.log(React.createElement(component, props));
        return React.createElement(component, props)
      } else {
        return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    }
  })
)
}}/>
);
**/}
