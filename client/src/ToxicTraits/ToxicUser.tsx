import React from 'react';
import { useParams } from 'react-router-dom';

function ToxicUser() {
  const params = useParams();
  return <div>Hello {params.id}</div>;
}

export default ToxicUser;
