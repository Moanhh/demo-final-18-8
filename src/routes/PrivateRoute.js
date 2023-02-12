

import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = ({component: Component, ...rest}) => {
    let auth = {'token':false}
    return(
        auth.token ? <Outlet /> : <Navigate to="/"/>
    )
}

export default PrivateRoutes