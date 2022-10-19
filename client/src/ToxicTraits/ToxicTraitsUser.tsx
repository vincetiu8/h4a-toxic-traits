import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';
import { UrlWithStringQuery } from 'url';
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
    <div>
      <h1 style={{ textAlign: 'center' }}>
        What are {user.firstName}&apos;s toxic traits???
      </h1>
      <img
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '30%',
          filter: 'contrast(350%)',
          marginBottom: '50px',
        }}
        src={user.imageURL}
        alt=""
      />
      {user.toxicTraits?.map((trait: string) => (
        <div style={{ textAlign: 'center' }}>{trait}</div>
      ))}
    </div>
  );
}
