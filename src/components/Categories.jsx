import React from 'react'
import styled from 'styled-components'
import { categoreis} from '../data'
import CategoriesItem from './CategoriesItem'
const Container =styled.div`
display: flex;
padding: 10px;
justify-content: center;



`

function Categories() {
	return (
		<div>
			<Container>
      {categoreis.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </Container>
		</div>
	)
}

export default Categories