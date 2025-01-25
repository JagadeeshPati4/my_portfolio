import React, { useContext } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Box, Typography, Button,useMediaQuery, Container, Link as MuiLink, useTheme } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import jagadeesh from '../../assets/images/jagadeesh1.jpg'; 
import {context} from '../../App';


const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log("mobile", isMobile);
    const mainBox = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: "100vh",
        width: 'auto',
        padding: 0,
        overflow: "hidden",
    };
    const contextValue = useContext(context);
    const { light,islight,isBgColor,isColor } = contextValue;
    
    const mainBox1 = {
        background: {
      sm: `linear-gradient(80deg, #FEB401 25%, ${isBgColor} 25% 80%)`, 
      md: `linear-gradient(80deg, #FEB401 22%, ${isBgColor} 22% 80%)`, 
      lg: `linear-gradient(80deg, #FEB401 18%, ${isBgColor} 18% 80%)`, 
      xs: `linear-gradient(${isBgColor},${isBgColor})`,
    },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        height: "100%",
        margin: { xs: '0% 0% 10% 0%', sm: '0' },
        padding: { xs: '10% 0% 0% 0%', sm: '0' },
        overflowY: 'auto', 

    };

    const mainBox2 = {
        width: { xs: '250px', sm: '90%' },
        height: { xs: '250px', sm: '80%' },
        backgroundColor: '#040404',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: { xs: '50%', sm: '10px' },
        boxShadow: '0px 4px 16px 0px #040404',
        overflow: 'hidden',
    };

    const containerStyle = {
        color: '#ffffff',
        width: { xs: '100%', sm: '50%' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '10% 0% 10% 0%', sm: '5% 0%' },
    };

    return (
        <Box sx={mainBox}>
            <Box sx={mainBox1}>
                <Box  sx={{ width: {sm:"50%",xs:'100%'}, height: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <Box sx={mainBox2}>
                    <Box
                        component="img"
                        src={jagadeesh}
                        alt="jagadeesh"
                        style={{ height: '100%', width: '100%', objectFit: 'fill' }}

                    />
                    </Box>
                    
                </Box>

                <Container sx={containerStyle}>
                    <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ color: '#FEB401', margin: 0 , width: '80%', textAlign: 'center'}}>
                        - I'M JAGADEESH PATI.
                    </Typography>
                    <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ color: isColor, margin: 0, width: '80%', textAlign: 'center' }}>
                        &nbsp;&nbsp;
                        <Typewriter
                            words={['PYTHON DEVELOPER', 'FRONT-END DEVELOPER', 'BACK-END DEVELOPER']}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </Typography>
                    <Typography variant="body1" sx={{ color:isColor, fontSize: "large", margin: '20px 0', width: '80%', textAlign: 'center' }}>
                        I'm Jagadeesh, Python Developer & Front‑End Developer focused on crafting clean &
                        user‑friendly experiences. I am passionate about building excellent software that
                        improves the lives of those around me.
                    </Typography>
                    <MuiLink component={Link} to='/About' sx={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            sx={{
                                height: 50,
                                width: 250,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                color: isColor,
                                padding: { xs: '0% 0% 0% 10%', sm: '0% 0% 0% 10%' },

                                borderRadius: 30,
                                borderColor: '#FEB401',
                                backgroundImage: 'linear-gradient(to right, transparent 50%, #FEB401 50%)',
                                backgroundSize: '200% 100%',
                                backgroundPosition: 'left bottom',
                                transition: 'background-position 1s ease-out',
                                '&:hover': {
                                    backgroundPosition: 'right bottom',
                                    borderColor:"#FEB401",
                                },
                            }}
                        >
                            MORE ABOUT ME
                            <Box
                                sx={{
                                    backgroundColor: '#FEB401',
                                    width: 50,
                                    height: 50,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%',
                                }}
                            >
                                <FaArrowRight size={20} />
                            </Box>
                        </Button>
                    </MuiLink>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
