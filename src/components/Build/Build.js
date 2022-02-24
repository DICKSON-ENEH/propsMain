import React from 'react'
import styled from 'styled-components'

const Build = ({datee ,Cours, Pric, click, swap, move}) => {
  return (
<Compos>
  <Compswrap>
   <Parent>
    <Box>
      <Midwrap swap = {swap}>
    <Smallbox>
   {datee}
    </Smallbox>
    <Course move = {move}>{Cours}</Course>
    <Price move = {move}>{Pric}</Price>
    </Midwrap>
    <Butts>{click}</Butts>
    </Box>
   </Parent>
  </Compswrap>
</Compos>

  )
}

export default Build

const Compos= styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:30px;
`
const Compswrap=styled.div`

`
const Parent= styled.div`
width:630px;
background:black;
height:180px;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px
`
const Box= styled.div`
width:600px;
background:white;
height:150px;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center
`
const Butts = styled.button`
background:purple;
width:150px;
padding:10px;
border:none;
outline:none;
color:white;
border-radius:5px;
margin-left:240px;
`
const Midwrap= styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-direction:${({swap})=>swap}
`
const Smallbox= styled.button`
width:60px;
height:50px;
background:black;
border-radius:5px;
color:white;
font-size:10px;
display:flex;
justify-content:center;
align-items:center;
margin:5px;
cursor:pointer;
border:none;
outline:none;
    :hover{
  background:silver;
  border:black solid 1px;
  color:black;

}
`
const Course= styled.div`
font-size:20px;
margin-left:${({move})=>move}

`
const Price= styled.div`
color:orange;
margin-left:${({move})=>move}
`

