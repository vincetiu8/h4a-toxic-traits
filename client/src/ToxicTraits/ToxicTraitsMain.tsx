import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ToxicTraitsUser from './ToxicTraitsUser';
import './ToxicTraits.css';
import ToxicUsers from './TestToxicData';

function ToxicTraitsMain() {
  return (
    <Box sx={{ backgroundColor: 'primary' }} className="traitsMainContainer">
      <Grid container spacing={2}>
        {ToxicUsers.map(({ name, image }) => (
          <Grid item xs={4}>
            <ToxicTraitsUser name={name} image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ToxicTraitsMain;
