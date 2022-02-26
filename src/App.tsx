import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from '@components/Slider/Slider';
import image1 from './assets/slide_1.jpeg';
import image2 from './assets/slide_2.jpeg';
import image3 from './assets/slide_3.jpeg';
import image4 from './assets/slide_4.jpeg';
import image5 from './assets/slide_5.jpeg';
import image6 from './assets/slide_6.jpeg';
import useCollection from '@hooks/useCollection';

function App() {
  const { notes, isLoading } = useCollection({ collectionName: 'sliderImages' });
  console.log('notes', notes);
  console.log('isLoading', isLoading);
  return <div className="App">{isLoading ? <div>CARGANDO</div> : <Slider images={notes}></Slider>}</div>;
}

export default App;
