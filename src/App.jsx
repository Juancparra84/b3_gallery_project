
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Animal1 } from './components/Animal1';
import { Animal2 } from './components/Animal2';
import { Animal3 } from './components/Animal3';
import { Food1 } from './components/Food1';
import { Food2 } from './components/Food2';
import { Food3 } from './components/Food3';
import { Landscape } from './components/Landscape';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
      <div>
        <h1 className='text-center my-3'>Gallery Project</h1>
      </div>
      <div className='container d-flex justifiy-content-center'>
      <Routes>
          <Route path='/animal1' element = {<Animal1 className = 'main-img-container' />} />
          <Route path='/animal2' element = {<Animal2 className = 'main-img-container' />} />
          <Route path='/animal3' element = {<Animal3 className = 'main-img-container' />} />
          <Route path='/food1' element = {<Food1 className = 'main-img-container' />} />
          <Route path='/food2' element = {<Food2 className = 'main-img-container' />} />
          <Route path='/food3' element = {<Food3 className = 'main-img-container' />} />
          <Route path='/landscape' element = {<Landscape className = 'main-img-container' />} />
        </Routes>
      </div>
      <div className='container'>
        <Navigation />
      </div>
      </BrowserRouter>


    </>
  );
};

export default App;
