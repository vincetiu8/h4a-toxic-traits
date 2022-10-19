import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserCard from './UserCard';
import { getData } from '../util/api';

function ToxicTraitsMain() {
  const [users, setUsers] = useState<any>([]);

  const fetchData = () => {
    getData('profile/all').then((res) => {
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
        {users.map((user: { id: string; name: string; image: string }) => (
          <Grid item xs={4}>
            <UserCard id={user.id} name={user.name} image={user.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ToxicTraitsMain;
