import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import { PATH_LOGIN } from '../constants/routes';
import { HttpClient } from '../api';

export const DefaultLayout: React.FC = () => {

  const {token} = useTypedSelector(state => state.authToken);
  const {setAuthToken, setUser} = useActions();

  if (!token) {
    return <Navigate to={PATH_LOGIN}/>
  }

  // useEffect(() => {
  //   HttpClient.get('/user')
  //     .then(({data}) => {
  //       console.log(data)
  //       setUser(data)
  //     })
  // })

  return (
    <div>
      <Outlet />
    </div>
  )
}
