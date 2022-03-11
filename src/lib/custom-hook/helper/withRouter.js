import { Navigate, Outlet, Router, useLocation, useNavigate} from 'react-router-dom'

export const withRouter = (Component) => { //works only for react16-17 //hooks
    const Wrapper = (props) => {
        const location = useLocation()
        const navigate = useNavigate();
        return (
            <Router>
            <Component
                navigate = {navigate}
                {...props}
                location={location}
                {...props}
            />
            </Router>
        );
    };

    return Wrapper;
};
