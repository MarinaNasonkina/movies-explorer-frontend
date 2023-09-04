import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Footer />
    </>
  );
}
