import React from 'react';

import { Header } from './Header';
import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>באתר זה תוכלו לרכוש ולנהל את סביבת הענן של האתר שלכם</h2>
      </section>
    </article>
  );
};
