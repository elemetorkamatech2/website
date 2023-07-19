import React from "react";
import { Button } from '../Button/Button';
import { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useDispatch, useSelector } from "react-redux";
import { SetToken } from "../../Redux/action";
import { SetUserId } from "../../Redux/action";
import { useNavigate } from 'react-router';
import axios from 'axios';

export const Login = () => {
  const { keycloak, initialized } = useKeycloak();
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState("אורח");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialized) {
      setAuthenticated(keycloak.authenticated);
      dispatch(SetUserId(keycloak.subject));
      dispatch(SetToken(keycloak.token));
      if (keycloak.authenticated && keycloak.tokenParsed) {
        const { preferred_username } = keycloak.tokenParsed;
        setUserName(preferred_username);
      }
    }
  }, [initialized, keycloak.authenticated]);

  const handleLogout = async () => {
    await keycloak.logout();
    setAuthenticated(false);
    dispatch(SetToken(null));
  };

  const handleLogin = () => {
    keycloak.login();
  };

  const handleRegister = () => {
    keycloak.register();
  };

  const handleClick = () => {
    keycloak.accountManagement({ tab: 'personal-info', realmManaged: false });
  };

  const ondashbord = () => {
    navigate('/Dashboard');
  };

  axios.interceptors.request.use(
    (config) => {
      const token = keycloak.token;
      const userId = keycloak.subject;
      console.log(token);
      console.log(userId)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.USERID = userId;
      }
      return config;
    },
    (error) => {
      console.log('error');
      return Promise.reject(error);
    }
  );
  return <>
    <div>
      <div>שלום {userName}</div>
      {initialized && authenticated ? (
        console.log(keycloak.token),
        <>
          <Button size="small" onClick={handleLogout} label="Logout" />
          <Button size="small" onClick={handleClick} label="Edit Profile" />
          <Button size="small" onClick={ondashbord} label="Dashboard" />
        </>
      ) : (<>
        <Button size="small" onClick={handleLogin} label="Login" />
        <Button size="small" onClick={handleRegister} label="register" />
      </>
      )}
    </div>
  </>
}

