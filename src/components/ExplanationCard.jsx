import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ExplanationCard({data}) {
    const{title, image, description}= data
  return (
    <Card key={title} style={{ width: '25rem' }} className='flex-fill mb-3 ms-2  col-lg-4'>
        <Card.Img variant="top" src={image} className='mt-2' />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='text-justify'>
            {description}
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ExplanationCard