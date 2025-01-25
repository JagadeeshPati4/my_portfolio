import React, { useState,useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Popover, Box } from '@mui/material';
import { IoEyeOutline } from "react-icons/io5";
import {context} from '../../App';

const projects = [
  {
    title: 'InstaShare',
    description: 'A social media sharing application that allows users to view, and interact with images and others. Features include user authentication, Login and a responsive design. Built using React for the front end and Fetch API for seamless communication with the backend.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Fetch API'],
    link: 'https://github.com/JagadeeshPati4/instra-share',
    liveDemo: 'https://jagadeeshinsta.ccbp.tech/',
    image: 'https://res.cloudinary.com/jagadeesh123/image/upload/v1737845569/instaShare_kuk9me.png',
  },
  {
    title: 'Winkipedia Search',
    description: 'A responsive Wikipedia search application where users can look up topics in real time using the Wikipedia API. Built with React for an intuitive and fast user experience.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Fetch API'],
    link: 'https://github.com/JagadeeshPati4/winkipedia-search',
    liveDemo: 'https://wikipediasearch1.netlify.app/',
    image: 'https://res.cloudinary.com/jagadeesh123/image/upload/v1737845474/winkipedia-search_ggmdty.png',
  },
  {
    title: 'React Dashboard UI',
    description: 'A sleek and modern admin dashboard template designed to visualize data and manage tasks effectively. Features customizable widgets. Built with React and styled for a clean user interface.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Fetch API'],
    link: 'https://github.com/JagadeeshPati4/react-dashboard-ui',
    liveDemo: 'https://react-ui-dashboard2.netlify.app/',
    image: 'https://res.cloudinary.com/jagadeesh123/image/upload/v1737845592/react-dashboard-ui_shbujv.png',
  },
  {
    title: 'Custom Browser Implementation',
    description: 'A lightweight custom browser project that allows users to switch between multiple tabs within an iFrame-like interface. Built using HTML, CSS, and JavaScript for a streamlined browsing experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'I-Frame'],
    link: 'https://github.com/JagadeeshPati4/broswer-switching-tabs',
    liveDemo: 'https://custom-broswer-implementation.netlify.app/',
    image: 'https://res.cloudinary.com/jagadeesh123/image/upload/v1737845819/custom-broswer-implementation_p8oh8d.png',
  },
  {
    title: 'Stack Overflow Clone',
    description: 'A full-stack replica of Stack Overflow where users can ask questions, provide answers, and upvote/downvote posts. Built using React for the front end and Node.js, Express, and MongoDB for the back end.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'Node.js'],
    link: 'https://github.com/JagadeeshPati4/stack_over_flow',
    liveDemo: 'https://stackoverflow-c.netlify.app/',
    image: 'https://res.cloudinary.com/jagadeesh123/image/upload/v1737845509/stack-overflow-clone_xd3v3e.png',
  },
  {
    title: 'Destination Search',
    description: 'A search-based travel web that allows users to find and explore travel destinations effortlessly. Features a responsive design built with React and styled with CSS.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/JagadeeshPati4/Destinaction',
    liveDemo: 'https://distinatationsearch1.netlify.app/',
    image: 'https://res.cloudinary.com/jagadeesh123/image/upload/v1737845557/distinaction-search_fspvay.png',
  },
  {
    title: 'Random Numbers Generator',
    description: 'A simple yet interactive app that generates random numbers within a user-defined range. Built using pure HTML, CSS, and JavaScript, it offers a lightweight and responsive interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/JagadeeshPati4/random-number-generators',
    liveDemo: 'https://randonnumber3.netlify.app/',
    image: 'https://res.cloudinary.com/jagadeesh123/image/upload/v1737845579/Random_Numbers_Generator_njrnsl.png',
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
