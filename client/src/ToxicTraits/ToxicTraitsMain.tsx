import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ToxicTraitsUser from './ToxicTraitsUser';

const ToxicUsers = [
  {
    name: 'Michael Arush',
    image:
      'https://www.seas.upenn.edu/~cis120/22fa/images/headshots/arushm.jpg',
  },
  {
    name: 'Arush Zu',
    image:
      'https://www.seas.upenn.edu/~cis120/22fa/images/headshots/arushm.jpg',
  },
  {
    name: 'Vincent Arush Tnecniv',
    image:
      'https://www.seas.upenn.edu/~cis120/22fa/images/headshots/arushm.jpg',
  },
  {
    name: 'Arush Hsura',
    image:
      'https://www.seas.upenn.edu/~cis120/22fa/images/headshots/arushm.jpg',
  },
  {
    name: 'Michael Arush',
    image:
      'https://www.seas.upenn.edu/~cis120/22fa/images/headshots/arushm.jpg',
  },
];

function ToxicTraitsMain() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary',
        display: 'flex',
        justify: 'center',
        minHeight: '100vh',
      }}
      className="traitsMainContainer"
    >
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
