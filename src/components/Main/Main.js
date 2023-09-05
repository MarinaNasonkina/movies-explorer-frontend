import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';

export default function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Promo />
      </main>
      <Footer />
    </>
  );
}
