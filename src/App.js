
import { useEffect, useState } from 'react';
import './App.css';
import { fetchTopAlbums, fetchNewAlbums } from './api/api';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Navbar from "./components/navbar/Navbar.jsx"
import Section from './components/Section/Section';
function App() {

const[topAlbumsData, setTopAlbumsData] = useState([])
const [topSongData, setTopSongData] = useState([])

const  generateData  = async() =>  {
  try{
    const data =  await fetchTopAlbums();
    setTopAlbumsData(data);
    console.log(data)
  }catch(err){
console.log(err)
  }
}



const generateNewAlbumData = async () => {
  try {
 

    const data = await fetchNewAlbums();
    setTopSongData(data);

   
  } catch (error) {
   
    console.log(error)
  }
};







 useEffect(() => {
  generateData();
  generateNewAlbumData();
 
 }, [])


  return (
    <div className="App">
     <Navbar/>
     <Hero/>
  {/* {topAlbumsData.map((item) => {
return (
  <Card key={item.id} data={item} type="album"/>
)
  })}   */}
  <div>
  <Section data={topAlbumsData} title="Top Albums" />
  <Section data={topSongData} title="New Albums"/>
  </div>
 
    </div>
  );
}

export default App;



// const generateSongData = async() => {
//   try{
//     const data = await fetchNewAlbums();
//     setTopSongData(data)
//   }catch(err){
// console.log(err)
//   }
//  }
