import React from 'react';
import { Redirect, Route } from 'react-router';

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => {
                const jwt = sessionStorage.getItem("token");
                if (typeof jwt === undefined || jwt === null) 
                    return (<Redirect
                        to={{
                            pathname: "/admin/login",
                            state: { from: props.location }
                        }}
                    />);
                
                    
                // const { authorities } = jwtDecode(jwt);
                // if (role.includes(authorities[3].authority)) {
                //     console.log("CONFIRMED");
                //     return (
                //         <Switch>
                //             <Component />
                //         </Switch>
                //     );
                // }
                 
                // return (
                //     <Redirect to={{
                //         pathname: "/admin/login",
                //         state: { from: props.location }
                //     }}/>
                // );

                return <Component />;
            }}
        />
    )
}

export default ProtectedRoute
