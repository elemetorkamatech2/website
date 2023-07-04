import React from 'react';
import { Header } from './Header';
import {  useNavigate } from "react-router"

import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();
  let navigate = useNavigate()

  return (
    <article>
      <Header
        user={user}
        onLogin={() =>navigate("/Login")}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() =>navigate("/Singnin")}
      />

      <section className="storybook-page">
        <h3> 
On this website you can purchase and manage your website's cloud environment</h3>
      </section>
    </article>
  );
};