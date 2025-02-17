import React, { useState, useRef, useContext } from 'react';
import { FaAddressCard } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaInstagram, FaFacebookSquare, FaWhatsappSquare, FaGithubSquare } from "react-icons/fa";
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import { context } from '../../App';

const Contacts = () => {
  const contextValue = useContext(context);
  const { isColor } = contextValue;
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

  const buttonSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button during submission

    const service_id = 'service_2hpahx7';
    const template_id = 'template_grlf56d';
    const public_key = 'cYLH63b9Ok_ho5i2-';
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'jagadeesh',
      subject: subject,
      message: message,
    };

    emailjs.send(service_id, template_id, templateParams, public_key)
      .then((response) => {
        setSnackbar({ open: true, message: 'Email sent successfully!', severity: 'success' });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        setSnackbar({ open: true, message: 'Error sending email. Please try again!', severity: 'error' });
      })
      .finally(() => {
        setIsSubmitting(false); // Enable button after completion
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      width: '100vw',
      minHeight: '100vh',
      margin: { xs: '0% 0% 20% 0%', sm: '0' },
      padding: { xs: '10% 0% 0% 0%', sm: '0' },
    }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ textAlign: 'center', m: '2% 0%' }}>
          <Typography variant="h4" sx={{ fontSize: '5rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.1 }}>CONTACTS</Typography>
          <Typography variant="h5" sx={{ fontSize: '3rem', fontWeight: 'bold', color: '#FEB401', mt: -10 }}>Get In Touch</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          mt: '5%',
          fontFamily: "'Courier New', Courier, monospace"
        }}>
          {/* Left Side Contact Info */}
          <Box sx={{ width: { xs: '80%', sm: '40%' }, flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ fontFamily: "inherit", textAlign: 'start' }}>I’m keep on exploring opportunities where I can contribute and grow.</Typography>
            <Typography variant="body1" sx={{ fontFamily: "inherit", textAlign: 'start' }}>Feel free to reach out if you want to collaborate or have any opportunities in mind!</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
              <FaAddressCard fill='#FEB401' size={50} />
              <Box sx={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="h6">ADDRESS :</Typography>
                <Typography variant="body2">Hyderabad, Telangana</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
              <MdOutlineMailOutline fill='#FEB401' size={55} />
              <Box sx={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="h6">MAIL ME :</Typography>
                <Typography variant="body2"><a href="mailto:jagadeeshpati4@gmail.com?subject=Mail from Our Site" target="_blank" rel="noopener noreferrer">jagadeeshpati4@gmail.com</a></Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
              <FaPhoneSquareAlt fill='#FEB401' size={50} />
              <Box sx={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="h6">CALL ME :</Typography>
                <Typography variant="body2"><a href="tel:+91 6281728420" target="_blank" rel="noopener noreferrer">+91 6281728420</a></Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', marginTop: '20px' , justifyContent: { xs: 'center', sm: 'flex-start' }, alignItems: 'center', }}>
              <a href='https://www.instagram.com/chintu_the_roy/' target='_blank' rel="noopener noreferrer">
                <Box sx={{ backgroundColor: '#FEB401', width: '50px', height: '50px', margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                  <FaInstagram fill='inherit' size={30} />
                </Box>
              </a>
              <a href='https://www.facebook.com/jagadeesh.pati.5' target='_blank' rel="noopener noreferrer">
                <Box sx={{ backgroundColor: '#FEB401', width: '50px', height: '50px', margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                  <FaFacebookSquare fill='inherit' size={30} />
                </Box>
              </a>
              <a href={`https://wa.me/${+916281728420}?text=${'hi..'}`} target='_blank' rel="noopener noreferrer">
                <Box sx={{ backgroundColor: '#FEB401', width: '50px', height: '50px', margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                  <FaWhatsappSquare fill='inherit' size={30} />
                </Box>
              </a>
              <a href='https://github.com/user266320' target='_blank' rel="noopener noreferrer">
                <Box sx={{ backgroundColor: '#FEB401', width: '50px', height: '50px', margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                  <FaGithubSquare fill='inherit' size={30} sx={{color:isColor}} />
                </Box>
              </a>
</Box>
          </Box>

          {/* Right Side Contact Form */}
          <form ref={form} style={{ width: {xs:"80%",ms:'40%'}, margin: '1%' }} className='form-container' onSubmit={buttonSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                required
                label="Your Name"
                variant="filled"
                sx={{ marginBottom: '20px', backgroundColor: '#ffffff', }}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <TextField
                required
                label="Your Email"
                variant="filled"
                sx={{ marginBottom: '20px', backgroundColor: '#ffffff' }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                label="Your Subject"
                variant="filled"
                sx={{ marginBottom: '20px', backgroundColor: '#ffffff' }}
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <TextField
                required
                label="Your Message"
                multiline
                rows={4}
                variant="filled"
                sx={{ marginBottom: '20px', backgroundColor: '#ffffff' }}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#FEB401', color: isColor }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Me Message'}
                <MdOutlineAttachEmail size={20} style={{ marginLeft: '8px' }} />
              </Button>
            </Box>
          </form>
        </Box>
      </Box>

      {/* Snackbar for success or failure messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contacts;
