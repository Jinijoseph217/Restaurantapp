import React, { useEffect } from 'react'
import { useState } from "react"
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RestaurantlistAction} from "../Actions/restaurantlistAction";
import { useDispatch, useSelector } from "react-redux";



function Restaurantlist() {
    //to hold value
    const [allRestaurants,setRestaurants] = useState([])// [] - to get json datas in array format

    //Function to call API to get all restaurant items from restaurant.json
    // const getRestaurants = async () => {

    //     await fetch('/restaurants.json')
    //         .then((data) => {
    //             data.json()
    //             .then((result)=>{
    //                 setRestaurants(result.restaurants);//to convert array of object to array
    //        // console.log(result);
    //             })
                
    //         })
    // }
    // console.log(allRestaurants);
    //useEffect is a hook

    const dispatch=useDispatch();
    const result=useSelector(state=>state.restaurantReducer)
    console.log(result);
    const {restaurantList} = result
    useEffect(() => {
        // getRestaurants()
        dispatch(RestaurantlistAction());
        
    },[])

    return (
         
        <Row>{
            restaurantList.map(item=>(
                // <h1>{item.name}</h1>
                <Col sm={12} md={6} lg={4} xl={3}>
                <Restaurantcards restaurant={item}/>
                </Col>
            ))
        }
        </Row>
      
    )
}

export default Restaurantlist
