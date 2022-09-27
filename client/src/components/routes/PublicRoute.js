import { Route, Link } from 'react-router-dom';
  
  function PublicRoute({ children, isAuthenticated, ...rest }) {
    return (
      <Route {...rest} render={({ location }) => (!isAuthenticated ? (children) : (<Link to={{pathname: '/', state: { from: location }}}/> ))} />
    );
  }
  
  export default PublicRoute;