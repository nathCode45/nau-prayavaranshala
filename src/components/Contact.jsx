import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { LocationOn, Email, Phone } from "@mui/icons-material";

const Contact = () => {
    return(
    <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" gutterBottom>
            Our Contact Information
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocationOn />
              <Typography variant="body1"><strong>Address:</strong> 000 Street, City, Country</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Email />
              <Typography variant="body1"><strong>Email:</strong> email@email.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Phone />
              <Typography variant="body1"><strong>Phone Number:</strong> (123) 456-7890</Typography>
            </Box>
          </Box>
        </Box>

      </Container>
    );
};

export default Contact;