import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getData } from '../util/api';

export default function ToxicTraitsUser() {
  const { id } = useParams();
  const [user, setUser] = useState<any>({
    firstName: '',
    lastName: '',
    imageURL: '',
    traits: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getData(`profile/one/${id}`);
      console.log(resp.data);
      setUser(resp.data);
    };
    fetchData();
  }, [id]);

  return (
    <Card sx={{ maxWidth: 345, margin: '4em auto' }} className="toxicCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={user.imageURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: 'center' }}
          >
            {`${user.firstName} ${user.lastName}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
