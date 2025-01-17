import React, { useState,useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Popover, Box } from '@mui/material';
import { IoEyeOutline } from "react-icons/io5";
import sample from '../../assets/images/sample.jpg';
import {context} from '../../App';

const projects = [
  {
    title: 'Stock Analytics Dashboard',
    description: 'A full-stack application for analyzing stock data using real-time market insights and visualizations. Built with Django for the back end and React for the front end.',
    technologies: ['Django', 'React', 'MySQL', 'Chart.js'],
    link: 'https://github.com/yourusername/stock-analytics-dashboard',
    liveDemo: 'https://yourdomain.com/stock-dashboard',
    image:sample,

  },
  {
    title: 'AI-Powered Flashcards',
    description: 'An interactive flashcard application that uses AI tools like ChatGPT and Qwen to generate custom learning content. The front end is built with HTML, CSS, and JavaScript, while the back end uses Flask.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask', 'ChatGPT'],
    link: 'https://github.com/yourusername/ai-flashcards',
    liveDemo: 'https://yourdomain.com/ai-flashcards',
    image:       sample,

  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive personal portfolio website to showcase my skills, projects, and experience. Built using React and styled with Material-UI.',
    technologies: ['React', 'Material-UI', 'JavaScript'],
    link: 'https://github.com/yourusername/portfolio',
    liveDemo: 'https://yourdomain.com',
    image:       sample,

  },
  {
    title: 'E-commerce Web App',
    description: 'An e-commerce web app with user authentication, shopping cart functionality, and order management. Developed using Node.js, Express, and MongoDB.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    link: 'https://github.com/yourusername/ecommerce-web-app',
    liveDemo: 'https://yourdomain.com/ecommerce',
    image:       sample,

  },
  {
    title: 'Weather App',
    description: 'A weather app that provides real-time weather updates using an external weather API. Built using React and styled with CSS.',
    technologies: ['React', 'CSS', 'Weather API'],
    link: 'https://github.com/yourusername/weather-app',
    liveDemo: 'https://yourdomain.com/weather-app',
    image:       sample,

  },
];

const Projects = () => {
  const contextValue = useContext(context);
  const { light,islight,isBgColor,isColor } = contextValue;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleClick = (event, project) => {
    setSelectedProject(project);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{  backgroundColor:isBgColor,color:isColor, margin: { xs: '0% 0% 20% 0%', },
    padding: { xs: '10% 0% 0% 0%', sm: '2% 2% 2% 2%' }, }}>
        <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography variant="h1" sx={{ fontSize: '3.5rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.1 }}>
                My Portfolio
                </Typography>
                <Typography variant="h2" sx={{ fontSize: '3rem', fontWeight: 'bold', color: '#FEB401', mt: -8 }}>
                  Projects
                </Typography>
              </Box>
     

      <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', placeItems: 'center', }}>
        {projects.map((project) => (
          <Card key={project.title} sx={{backgroundColor:isBgColor,color:isColor, maxWidth: 345, boxShadow: `0px 2px 6px ${isColor}`, borderRadius: '8px' }}>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" >
                {project.description}
              </Typography>
               <Button  onClick={(event) => handleClick(event, project)}
                
                                                      variant="outlined"
                                                      sx={{
                                                        mt: 2,
                                                          height: 50,
                                                          width: 250,
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          justifyContent: 'space-between',
                                                          padding: { xs: '0% 0% 0% 10%', sm: '0% 0% 0% 20%' },
                                                        color: isColor,
                                                          borderRadius: 30,
                                                          borderColor: '#FEB401',
                                                          outlineColor: '#FEB401',
                                                          backgroundImage: 'linear-gradient(to right, transparent 50%, #FEB401 50%)',
                                                          backgroundSize: '200% 100%',
                                                          backgroundPosition: 'left bottom',
                                                          transition: 'background-position 1s ease-out',
                                                          '&:hover': {
                                                              backgroundPosition: 'right bottom',
                                                              borderColor:"#FEB401",
                                                              color:isColor,
              
                                                          },
                                                      }}
                                                  >
                                                            View Details
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
                                                          <IoEyeOutline size={20} />
                                                      </Box>
                </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Popover
            
            sx={{width: { xs: '90%', sm: '50%' },height: { xs: '50%', sm: '100%' }}}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
       <Box sx={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor:isBgColor,color:isColor,
            

            }}>
            <CardMedia
                component="img"
                src={selectedProject?.image}
                alt={selectedProject?.title}
                sx={{ 
                width: '100%', 
                height: 'auto', 
                
                }}
                    />
            <Typography sx={{color:isColor, m: 2}} variant="h6">{selectedProject?.title}</Typography>
            <Typography sx={{color:isColor, m: 2}} variant="body2" color="text.secondary" paragraph style={{ marginTop: '10px' }}>
                {selectedProject?.description}
            </Typography>
            <Typography sx={{color:isColor, m: 2}} variant="body2" color="text.secondary" paragraph>
                <strong>Technologies:</strong> {selectedProject?.technologies.join(', ')}
            </Typography>
            <Box sx={{ display: 'flex', gap: '20px', m: 2,flexDirection:{ xs: 'column', sm: 'row' } }}>
                <Button  
                    href={selectedProject?.link}
                    target="_blank"
                    variant="outlined"
                    sx={{
                    mt: 2,
                        height: 50,
                        width: 250,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: { xs: '0% 0% 0% 10%', sm: '0% 0% 0% 11%' },
                    color: isColor,
                        borderRadius: 30,
                        borderColor: '#FEB401',
                        outlineColor: '#FEB401',
                        backgroundImage: 'linear-gradient(to right, transparent 50%, #FEB401 50%)',
                        backgroundSize: '200% 100%',
                        backgroundPosition: 'left bottom',
                        transition: 'background-position 1s ease-out',
                        '&:hover': {
                            backgroundPosition: 'right bottom',
                            borderColor:"#FEB401",
                            color:isColor,

                        },
                    }}
                >
                    GitHub Repo
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
                        <IoEyeOutline size={20} />
                    </Box>
                </Button>
                <Button  
                    href={selectedProject?.liveDemo}
                    target="_blank"
                    variant="outlined"
                    sx={{
                    mt: 2,
                        height: 50,
                        width: 250,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: { xs: '0% 0% 0% 10%', sm: '0% 0% 0% 15%' },
                    color: isColor,
                        borderRadius: 30,
                        borderColor: '#FEB401',
                        outlineColor: '#FEB401',
                        backgroundImage: 'linear-gradient(to right, transparent 50%, #FEB401 50%)',
                        backgroundSize: '200% 100%',
                        backgroundPosition: 'left bottom',
                        transition: 'background-position 1s ease-out',
                        '&:hover': {
                            backgroundPosition: 'right bottom',
                            borderColor:"#FEB401",
                            color:isColor,

                        },
                    }}
                >
                                Live Demo

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
                        <IoEyeOutline size={20} />
                    </Box>
                </Button>
           
            </Box>
        </Box>

        </Popover>
    </Box>
  );
};

export default Projects;
