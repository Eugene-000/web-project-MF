import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { PATH_HOME } from '../constants/routes';

export const GuestLayout: React.FC = () => {

  const {token} = useTypedSelector(state => state.authToken);
  // const {setAuthToken} = useActions();

  if (token) {
    return <Navigate to={PATH_HOME}/>
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}
