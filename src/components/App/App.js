// import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function App() {
  const loggedIn = true;

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Footer />
    </>
  );
}
