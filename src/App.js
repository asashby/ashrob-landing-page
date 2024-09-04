import logo from './logo.svg';
import './App.css';
import Header from './components/header/index.tsx';
import HomePage from './components/homepage/index.tsx';
import Footer from './components/footer/index.tsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer 
        companyName='Ashrob Building Company'
        copyrightYear='2024'/>
    </div>
  );
}

export default App;
