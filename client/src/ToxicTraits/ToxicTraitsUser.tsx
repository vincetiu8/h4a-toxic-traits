import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ToxicTraitsUser(props: {
  name: string;
  image: string;
}) {
  const { name, image } = props;
  const route = `/toxic/${name}`;
  return (
    <Card sx={{ maxWidth: 345, margin: '4em auto' }} className="toxicCard">
      <CardActionArea>
        <Link to={route}>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: 'center' }}
            >
              {name}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
