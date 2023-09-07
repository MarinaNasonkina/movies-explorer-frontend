import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';

export default function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Promo />
        <AboutProject />
      </main>
      <Footer />
    </>
  );
}
