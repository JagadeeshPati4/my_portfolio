import React, { useEffect,useContext } from 'react';
import { Box, Typography, Button, Grid, List, ListItem, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { FaDownload } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { TbSchool } from "react-icons/tb";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { context } from '../../App';
import resume from '../../assets/images/JAGADEESH_PATI.pdf';

const About = () => {
    const contextValue = useContext(context);
    const { light,islight,isBgColor,isColor,isPage,isPageset } = contextValue;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log("mobile", isMobile);
  const onDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'JAGADEESH_PATI.PDF';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: 'HTML', percentage: 80 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'JQuary', percentage: 60 },
    { name: 'Python', percentage: 85 },
    { name: 'MySQL', percentage: 85 },
    { name: 'React.js', percentage: 70 },
    { name: 'Node.js', percentage: 60 },
    { name: 'Material UI', percentage: 50 }
  ];

  const experience = [
    {
      year: 'November 2024 - Present',
      title: 'Junior Frontend Developer',
      company: 'Nestor Analytics Pvt Ltd',
      location: 'Hyderabad, India',
      responsibilities: [
        'Coordinated AI model integration (GPT Series, Gemini-AI, Llama, Qwen) with Python, achieving an 80% efficiency improvement in generating large-scale, high-quality datasets.',
        'Automated data validation pipelines, ensuring 100% data integrity and eliminating manual validation efforts.',
        'Updated and optimized a scalable Python-based server using Flask to manage deck operations, user data, and reports, ensuring enhanced operational efficiency and streamlined data management.',
      ],
    },
    {
      year: 'May 2024 - November 2024',
      title: 'Frontend Developer Intern',
      company: 'Nestor Analytics Pvt Ltd',
      location: 'Hyderabad, India',
      responsibilities: [
        'Designed and implemented dynamic flashcards using HTML, CSS, JavaScript, and jQuery, enhancing user engagement and retention.',
        'Utilized AI tools like ChatGPT and Qwen for automated content generation, creating tailored, interactive educational content and expanding flashcard topics.',
      ],
    },
  ];
  

  const education = [
    {
      year: '2023',
      degree: 'Bachelor of Engineering',
      institution: 'Bhimavaram Institute of Engineering and Technology',
      field: 'Electrical and Electronic Engineering',
      cgpa: '7.0'
    },
    {
      year: '2020',
      degree: 'Diploma',
      institution: 'S.M.B. Seetha Polytechnic College',
      field: 'Electrical and Electronic Engineering',
      cgpa: '7.4'
    },
    {
      year: '2017',
      degree: 'Secondary School',
      institution: 'Sri Chaitanya Techno School',
      cgpa: '9.7'
    }
  ];

  useEffect(() => {
    // Inject keyframes dynamically
    const styleSheet = document.styleSheets[0];
    skills.forEach((skill) => {
      const keyframes = `
        @keyframes increaseGradient-${skill.percentage} {
          0% {
            background: conic-gradient(#FEB401 0%, #232322 0%);
          }
          25% {
            background: conic-gradient(#FEB401 ${skill.percentage/6}%, #232322 ${skill.percentage/4}%);
          }
          50% {
            background: conic-gradient(#FEB401 ${skill.percentage/4}%, #232322 ${skill.percentage/2}%);
          }
          75% {
            background: conic-gradient(#FEB401 ${skill.percentage/2}%, #232322 ${skill.percentage/1}%);
          }
          100% {
            background: conic-gradient(#FEB401 ${skill.percentage}%, #232322 ${skill.percentage}%);
          }
        }
      `;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    });
  }, [skills]);
  // backgroundColor: light ? "#ffffff" : "#000000",
  // color: light ? "#000000" : "#ffffff",
  return (
    <Box sx={{ color: isColor, backgroundColor: isBgColor, overflowX: 'hidden',margin: { xs: '0% 0% 10% 0%', sm: '0' },
    padding: { xs: '10% 0% 0% 0%', sm: '0' }, // Hide horizontal scroll bar
      overflowY: 'auto', }}>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.1 }}>
          Read Me
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FEB401', mt: -8 }}>
          About
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Personal Info</Typography>
        <Grid container spacing={2} sx={{ textAlign: 'center' }}>
          {!isMobile ?
          <>
          <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: 'center',alignContent: 'center'}}>
            <List>
              <ListItem>First Name: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Jagadeesh</Typography></ListItem>
              <ListItem>Age: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>21 Years</Typography></ListItem>
              <ListItem>Phone: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>6281728420</Typography></ListItem>
              <ListItem>Email: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>jagadeeshpati4@gmail.com</Typography></ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: 'center',alignContent: 'center'}}>
            <List>
              <ListItem>Last Name: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Pati</Typography></ListItem>
              <ListItem>Address: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Hyderabad</Typography></ListItem>
              <ListItem>Nationality: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Indian</Typography></ListItem>
              <ListItem>Languages: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Telugu, English</Typography></ListItem>
            </List>
          </Grid> 
          </>:<> <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: 'center',alignContent: 'center'}}>
            <List>
              <ListItem>First Name: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Jagadeesh</Typography></ListItem>
              <ListItem>Last Name: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Pati</Typography></ListItem>
              <ListItem>Age: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>21 Years</Typography></ListItem>
              <ListItem>Phone: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>6281728420</Typography></ListItem>
              <ListItem>Email: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>jagadeeshpati4@gmail.com</Typography></ListItem>
              <ListItem>Address: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Hyderabad</Typography></ListItem>
              <ListItem>Nationality: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Indian</Typography></ListItem>
              <ListItem>Languages: <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Telugu, English</Typography></ListItem>
            </List>
          </Grid> </>}
        </Grid>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center',alignContent: 'center'}}>
          <Grid item>
            <Button href={resume} target="_blank"
                                        variant="outlined"
                                        sx={{
                                            height: 50,
                                            width: 250,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            color: isColor,
                                            padding: { xs: '0% 0% 0% 10%', sm: '0% 0% 0% 20%' },
            
                                            borderRadius: 30,
                                            borderColor: '#FEB401',
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
                                         View Resume
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
            
          </Grid>
          <Grid item>
          <Button onClick={onDownload}
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
                                                color:isColor,

                                            },
                                        }}
                                    >
                                         Download Resume
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
                                            <FaDownload size={20} />
                                        </Box>
            </Button>
          
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item key={index} xs={6} sm={4} md={3}>
              <Paper
                sx={{
                  borderRadius: '50%',
                  width: '120px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  background: `conic-gradient(#FEB401 0%, ${isColor} 0%)`,
                  animation: `increaseGradient-${skill.percentage} 2s ease-out forwards infinite`,

                }}
              >
                <Box
                  sx={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    backgroundColor: isBgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h6" sx={{ color: isColor }}>{skill.percentage}%</Typography>
                </Box>
              </Paper>
              <Typography variant="body1" align="center" sx={{ mt: 1 }}>{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mb: '5' }} >
      <Typography variant="h4" gutterBottom>Experience</Typography>
      <Timeline position="alternate">
        {experience.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ m: 'auto 0' }}>
              <Typography variant="body2" sx={{ color: '#FEB401', fontWeight: 'bold' }}>
                {exp.year}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#FEB401' }} >
              <WorkOutlineIcon size={20} />
                </TimelineDot>
              {index < experience.length  && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="body2" sx={{ color: '#aaa' }}>
                {exp.company} - {exp.location}
              </Typography>
              <ul>
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>
                    <Typography variant="body2">{task}</Typography>
                  </li>
                ))}
              </ul>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      </Box>
      <Box >
        <Typography variant="h4" gutterBottom>Education</Typography>
        <Timeline position="alternate">
      {education.map((edu, index) => (
        <TimelineItem key={index} sx={{ p: '1' }}>
          <TimelineOppositeContent sx={{ m: 'auto 0' }}>
            <Typography variant="body2" sx={{ color: '#FEB401', fontWeight: 'bold' }}>
              {edu.year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#FEB401' }}>
              <TbSchool size={20} />
            </TimelineDot>
            {index < education.length  && <TimelineConnector  />}
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6">{edu.degree}</Typography>
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              {edu.institution}
            </Typography>
           {edu.field && <Typography variant="body2">Branch: <Typography variant="span" sx={{color:'#aaa'}}>{edu.field}</Typography></Typography>}
            <Typography variant="body2">CGPA: <Typography variant="span" sx={{color:'#aaa'}}>{edu.cgpa}</Typography></Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
      </Box>
    </Box>
  );
};

export default About;