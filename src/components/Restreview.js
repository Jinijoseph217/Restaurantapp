import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';


function Restreview({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);
  return (
    <>
    {
        <>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        click to see reviews
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
         {
            
            review.map(item=>(
                <div>
                    <h6>{item.name} <span>{item.date}</span></h6>
                    <h5>Rating:{item.rating}</h5>
                    <p>Comments:{item.comments}</p>
                </div>
            ))
         }
        </div>
      </Fade>
      </>
    }
    </>
  )
}

export default Restreview