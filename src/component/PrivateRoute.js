import { Route, Navigate } from 'react-router-dom';


export { PrivateRoute };

function PrivateRoute({ component: Component, path,...rest }) {
    const auth = localStorage.getItem("token")
    alert(auth)
    return (
        <Route {...rest} render={props => {
            if (!auth) {
                // not logged in so redirect to login page with the return url
              return <Navigate to="/login" />;
            }

            // authorized so return component
            return   <Route path={path} element={<Component />} />
        }} />
    );
}