import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import ToxicTraitsUser from './ToxicTraitsUser';
import { getData } from '../util/api';

function ToxicTraitsMain() {
  const [users, setUsers] = useState<any>([]);

  const fetchData = () => {
    getData('profile/all').then((res) => {
      console.log(res.data);
      setUsers(
        res.data.map(
          (user: {
            _id: string;
            firstName: string;
            lastName: string;
            imageURL: string;
          }) => ({
            /* eslint no-underscore-dangle: 0 */
            id: user._id,
            name: `${user.firstName} ${user.lastName}`,
            image: user.imageURL,
          }),
        ),
      );
    });
  };

  useEffect(() => {
    fetchData();
  });

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
        {users.map((user: { name: string; image: string }) => (
          <Grid item xs={4}>
            <ToxicTraitsUser name={user.name} image={user.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ToxicTraitsMain;
