//LAYOUT COMPONENT

//IMPORTING
import Head from 'next/head';
import Header from './header';
import Menu from './menu';
import Footer from './footer';

//LAYOUT
export default function Layout({ children }) {
  //RETURN
  return (
    <main data-scroll-container>
      <Head>
        <title>Hey Traveller | Sua Agência de Viagens</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
      <Menu />
    </main>
  );
}
