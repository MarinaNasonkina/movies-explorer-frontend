import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Profile({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Footer />
    </>
  );
}
