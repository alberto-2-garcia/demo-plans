import React from 'react'
import { useParams } from 'react-router-dom';

export default function Plan() {
  const params = useParams();
  const { plan } = params;
  return (
    
    <div>
      <h1>Plan</h1>
      <h2>{plan}</h2>
    </div>
  )
}
