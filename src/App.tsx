import React from 'react';
import './App.css';
import Slider from '@components/Slider/Slider';
import useCollection from '@hooks/useCollection';
import IImage from '@interfaces/Slider/Image.interface';
function App() {
  const { data, isLoading } = useCollection<IImage>({ collectionName: 'sliderImages' });
  console.log('data', data);
  console.log('isLoading', isLoading);
  return <div className="App">{isLoading ? <div>CARGANDO</div> : <Slider images={data} autoPlay={false}></Slider>}</div>;
}

export default App;
