import React from 'react'
import styled from "styled-components"
import Compos from "../Build/Build"





const Home = (  ) => {
 
  const course = 'javascript'
  const price = "$400"
  const botts = "Add more"
  return (
   <Body>
<Compos datee = "November 12 2020" Cours = {course} Pric= {price} click = {botts}/>
<Compos datee = "October 14 1999"Cours= "Algorithm" Pric="$334" click="Add cart" swap ="row-reverse" move = "35px"/>
<Compos datee ="June 12 2022" Cours = "Reactjs" Pric = "$600" click="Carts" />
   </Body>
  )
}

export default Home

const Body = styled.div`

`




