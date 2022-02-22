import React from 'react'
import styled from "styled-components"
import Compos from '../Build/Build'
import pic from '../images/parents.webp'
import pic1 from '../images/teach.png'




const Home = () => {
  return (
  
    <Homeside>
    <Compos picture ={pic} text = " Educators " description = "Donec euismod et lectus at dignissim. Morbi rhoncus, est quis porttitor gravida, ex dui ullamcorper tortor, sit amet porttitor ligula arcu eget nunc. Cras condimentum tristique lorem sed interdum. Praesent varius rutrum orci, quis ornare odio sagittis at. Nullam convallis bibendum metus, consequat rhoncus turpis viverra id. Nunc vitae " input ="
    Learn More"/>
    <Compos picture  = {pic1} text = "Teachers" description = "porta augue. Morbi vulputate ligula id dui vulputate, et rhoncus orci semper. Nulla facilisi. Fusce vestibulum dapibus ligula et vestibulum. Ut eu neque non massa tincidunt rutrum. Donec non tincidunt ipsum. Phasellus tincidunt sem iaculis, tincidunt eros sed, accumsan eros. Mauris vitae consectetur sapien, in scelerisque felis. Proin iaculis, sem consectetur aliquet sagittis, nisl eros tempor magna, in consectetur arcu diam ut nisi." direction ="row-reverse" input ="Learn More"/>

    </Homeside>
  )
}

export default Home

const Homeside = styled.div`
height:100vh;

`



