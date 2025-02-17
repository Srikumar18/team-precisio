// src/components/Bills.js
import React, { useState } from 'react';
import { Box, Grid, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const billImages = [
  "AlloySteel.jpg",
  "Bearing.jpg",
  "CartMinis.jpg",
  "ClutchCable.jpg",
  "Electricals.jpg",
  "FireCylinder.jpg",
  "HoseClip.jpg",
  "JerseyAway.jpg",
  "JerseyCost.jpg",
  "LaserCutting.jpg",
  "Misc.jpg",
  "Misc1.jpg",
  "Misc2.jpg",
  "Misc3.jpg",
  "Misc4.jpg",
  "Misc5.jpg",
  "Misc6.jpg",
  "Misc7.jpg",
  "MSFlat.jpg",
  "Oil.jpg",
  "Pipes.jpg",
  "Tyres.jpg",
  "Welding.jpg",
  "Wheels.jpg"
];


const Bills = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (filename) => {
    setSelectedImage(`/images/Bills/${filename}`);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{ padding: '1rem', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Bills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {billImages.map((filename, index) => {
          // Remove extension for display
          const displayName = filename.replace('.jpg', '');
          return (
            <Grid item key={index}>
              <Box 
                onClick={() => handleImageClick(filename)}
                sx={{ 
                  cursor: 'pointer', 
                  width: 150, 
                  height: 150, 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  border: '1px solid #ccc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={`/images/Bills/${filename}`} 
                  alt={displayName}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </Box>
              <Typography variant="subtitle1">{displayName}</Typography>
            </Grid>
          );
        })}
      </Grid>

      <Dialog open={Boolean(selectedImage)} onClose={handleClose} maxWidth="lg">
        <DialogContent sx={{ position: 'relative', p: 0 }}>
          <IconButton 
            onClick={handleClose}
            sx={{ 
              position: 'absolute', 
              top: 8, 
              right: 8, 
              color: 'white', 
              zIndex: 1 
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Bill" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxWidth: '90vw', 
                maxHeight: '90vh', 
                display: 'block', 
                margin: 'auto' 
              }} 
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Bills;
