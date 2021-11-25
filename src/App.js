import './App.css';
import { Collection } from './components/Collection/Collection';
import { Featured } from './components/Featured/Featured';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { NewArrival } from './components/NewArrival/NewArrival';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Offer } from './components/Offer/Offer';
import { Sponsors } from './components/Sponsors/Sponsors';

function App() {

  const NavLinks = [
    { id: 1, title: 'Главная', link: '#home' },
    { id: 2, title: 'Рекомендации', link: '#featured' },
    { id: 3, title: 'Новое', link: '#new' },
    { id: 4, title: 'Подписаться', link: '#subscribed' }
]

  return (
    <>
      <NavBar links = { NavLinks }/>
      <main className="main">
        <Home/>
        <Collection/>
        <Featured/>
        <Offer/>
        <NewArrival/>
        <Newsletter/>
        <Sponsors/>
      </main>
      <footer className="footer">
        <Footer links = { NavLinks }/>
      </footer>
    </>
  );
}

export default App;
