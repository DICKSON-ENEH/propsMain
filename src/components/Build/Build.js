import React from 'react'
import styled from 'styled-components'

const Build = ({picture, text, description, direction, input}) => {
  return (

<Compos>
<Composwraper direction ={direction}>
<Composleft  src= {picture}/>

<Composright>
<Texthead>
{text}
</Texthead>
<Textbody>
{description}
</Textbody>
<Butts>
{input}
</Butts>
</Composright>


</Composwraper>
</Compos>
  )
}

export default Build

const Compos = styled.div`

`
const Composwraper= styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: ${({direction})=>direction}

`

const Composleft = styled.img`
width:400px;
height:400px;
border-radius:50%;
objcet-fit:cover;
margin:20px
`

const Composright= styled.div`
width:500px;
margin:20px
`
const Texthead = styled.div`
  font-weight:bold;
  font-size:2rem;
  margin-bottom:15px
`

const Textbody = styled.div`

`
const Butts = styled.button`
width:150px;
padding:6px;
background:orangered;
color:white;
font-size:20px;
outline:none;
border:none;
border-radius:2px;
margin-top:15px
`
