import React from 'react'
import {useParams} from 'react-router-dom'
import  { useEffect } from 'react'
import { useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';


function ViewRestaurant() {
    const params=useParams()
    console.log(params.id);
     //to hold value
     const [allRestaurants, setRestaurants] = useState([])// [] - to get json datas in array format

     //Function to call API to get all restaurant items from restaurant.json
     const getRestaurants = async () => {
 
         await fetch('/restaurants.json')
             .then((data) => {
                 data.json()
                 .then((result)=>{
                     setRestaurants(result.restaurants);//to convert array of object to array
            // console.log(result);
                 })
                 
             })
     }
     // console.log(allRestaurants);
     //useEffect is a hook
     useEffect(() => {
         getRestaurants()
     },[])
     console.log(allRestaurants);

     const viewrest=allRestaurants.find(item=>item.id==params.id)
     console.log(viewrest);
  return (
    <>
    {
        viewrest?
        (
            <Row>
                <Col>
                <Image src={viewrest.photograph} fluid/>
                </Col>
                <Col>
                <h3>ID:{viewrest.id}</h3>
                <h2>Name:{viewrest.name}</h2>
                <h4>Neighborhood:{viewrest.neighborhood}</h4>
                <h4>Cuisine_type:{viewrest.cuisine_type}</h4>
                <p>Address:{viewrest.address}</p>
                <Restoperation operate={viewrest.operating_hours}/>
                <Restreview review={viewrest.reviews}/>
                </Col>
            </Row>

        ):'null'
    }
    </>
  )
}

export default ViewRestaurant