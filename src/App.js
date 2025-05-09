import './styles/App.scss';
// Components
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';

function App() {
  return (
    <div>
      <Navigation />
      <Hero></Hero>
      <About></About>
    </div>
  );
}

export default App;
