import React from 'react';
import { useParams } from 'react-router-dom';

const Hobbies: React.FC = () => {
  const params = useParams<{ category: string }>();

  return <h1>{params.category}</h1>;
};

export default Hobbies;
