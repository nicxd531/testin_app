import { Typography } from '@mui/material';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ExplanationCard({data}) {
  // main explanation card component
    const{title, image, description}= data
  return (
    <Card key={title} style={{ width: '25rem' }} className='flex-fill mb-3 ms-2  col-lg-4'>
        <Card.Img variant="top" src={image} className='mt-2' />
        <Card.Body>
        <Card.Title><Typography sx={{fontSize:{xs:"1.5rem",lg:"2rem"},fontWeight:"bold",textTransform:"capitalize"}}>{title}</Typography></Card.Title>
        <Card.Text className='text-justify'>
            <Typography sx={{fontSize:{xs:"0.9rem",lg:"1rem"}}}>{description}</Typography>
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ExplanationCard