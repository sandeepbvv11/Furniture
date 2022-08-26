import './App.css';
import Hero from './components/Hero';
import Products from './components/Products';

import HeroFooter from './components/HeroFooter';


function App() {
  return (
    <div className="App">
      <Hero />
      <HeroFooter  />
      <Products />
      
    </div>
  );
}

export default App;
