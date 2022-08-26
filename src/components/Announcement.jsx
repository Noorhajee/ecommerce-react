import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
 height: 50px;
 background-color : #822e1f;
 color : white;
 display : flex;
 justify-content : center;
 font-size : 14px;
 font-weight : 500;
 font-size : 14px;
 font-weight :500;

`
const Super =styled.div`
   margin-top : 8px;
	 font-weight : bold;
	 font-size : 30px;
`
export default function Announcement() {
	return (
		<div>
		 <Container>
			 <Super>Super Deal</Super>

		 </Container>
		</div>
	)
}
