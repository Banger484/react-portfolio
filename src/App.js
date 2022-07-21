import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'
function App() {

  const me = {
    firstName: 'Bret',
    lastName: 'Banger',
    title: 'Web Developer',
    area: 'Front End Developer',
    proficient: 'React JS / JavaScript'
  }

  return (
    <div className='app-container'>
    <Header />
    <Home me={me} />
    <Footer />
    </div>
  );
}

export default App;
