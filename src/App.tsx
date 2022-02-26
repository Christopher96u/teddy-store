import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from '@components/Slider/Slider';
import useCollection from '@hooks/useCollection';

function App() {
  const { notes, isLoading } = useCollection({ collectionName: 'sliderImages' });
  console.log('notes', notes);
  console.log('isLoading', isLoading);
  return <div className="App">{isLoading ? <div>CARGANDO</div> : <Slider images={notes} autoPlay={false}></Slider>}</div>;
}

export default App;
