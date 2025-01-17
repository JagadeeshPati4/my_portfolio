import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState,createContext } from 'react';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contacts from './components/contact';
import Navbar from './components/navbar';
import { Grid } from '@mui/material';


 export const context =createContext();


function App() {
  const [light, setLight] = useState(false);
  const [isPage, isPageset] = useState('/');
  const islight = (value) => {
    console.log("function called", value);
    setLight(value);
  };
  const isBgColor = light ? '#ffffff' : '#000000';
    const isColor = light ?  '#000000':'#ffffff' ;
  return (
    <context.Provider value={{ light,islight,isBgColor,isColor,isPage,isPageset }}>
    <BrowserRouter>
      <Grid
        container
        sx={{
          height: "100%",
          width: "100vw",
          backgroundColor: light ? "#ffffff" : "#000000",
          color: light ? "#000000" : "#ffffff",
          overflowh: "hidden",
        }}
      >
        

        {/* Main Content Section */}
        <Grid item xs={12} sm={10.7} sx={{ overflow: 'hidden',}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />}/>
            <Route path='/Projects' element={<Projects />}/>

            
            <Route path='/Contacts' element={<Contacts />}/>
          </Routes>
        </Grid>
        {/* Navbar Section */}
        <Grid item xs={12} sm={1.3}>
          <Navbar  />
        </Grid>
      </Grid>
    </BrowserRouter>
    </context.Provider>
  );
}

export default App;
