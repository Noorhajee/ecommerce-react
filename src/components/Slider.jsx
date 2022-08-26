import React from 'react'
import styled from 'styled-components'
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../data'


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
 `;
 const Arrow = styled.div`
  width :50px;
	height :7vh;
	background-color : #f7eeee;
	border-radius : 50%;
	display : flex;
	align-items : center;
	justify-content :center;
	position :absolute;
	top : 0;
	bottom : 0;
	left :${props=> props.direction === "left" && "10px"};
	right :${props=> props.direction === "right" && "10px"};
  margin : auto;
	cursor :pointer;
	opacity : 0.5;
	z-index: 2;
 `
 const Wrapper = styled.div`
 height: 100%;
 display: flex;
 transition: all 1.5s ease;
 transform: translateX(${(props) => props.slideIndex * -100}vw);

 `
 const Slide = styled.div`
 width : 100vw;
 height : 100vh;
 display : flex;
 align-items :center;
 background-color: #${(props) => props.bg};
 `
 const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
height: 100%;
marin-left : 50px
`;

 const InfoContainer = styled.div`
   flex : 1;
   margin-top :200px;
	 margin-left :10px;
	 padding: 50px;
 `

 const Title = styled.h1`
  font-size : 50px;
 `
 const Desc = styled.p`
  margin :50px 0px ;
	font-size : 15px;
	font-weight :bold;

 `
 const Button = styled.button`
   padding : 7px;
	 font-size : 20px;
	 background-color : transparent;
	 cursor : pointer;
 ` ;
 const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

	return (

			<Container>
				<Arrow direction="left"  onClick={() => handleClick("left")}>
				<ArrowBackIosIcon />
				</Arrow>
				<Wrapper  slideIndex={slideIndex}>
					{sliderItems.map((item) =>(
				<Slide bg={item.bg} key={item.id}>
					<ImgContainer>
					 <Image src={item.img} />
					</ImgContainer>
        <InfoContainer>
				 <Title >{item.title}</Title>
					<Desc> {item.desc} </Desc>
					<Button>SHOW NOW</Button>
					</InfoContainer>
					</Slide>
					))}
        </Wrapper>
				<Arrow  direction="right" onClick={() => handleClick("right")}>
				<ArrowForwardIosIcon />
				</Arrow>
			</Container>

	);
};
export default Slider;