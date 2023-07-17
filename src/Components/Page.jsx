import React from 'react';
import { Header } from './header';
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
        <h2>באתר זה תוכלו לרכוש ולנהל את סביבת הענן של האתר שלכם</h2>
      </section>
    </article>
  );
};