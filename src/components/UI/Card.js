import styled from 'styled-components'

const Card = styled.main`
	background: red;
	margin: 0;
	padding: 0;
	width: 100vw;
	height: 100vh;
	&:body {
		margin: 0;
		padding: 0;
	}
    &:html {
		margin: 0;
		padding: 0;
	}
    display:flex;
    align-items:center;
    flex-direction: column;
    justify-content:space-around;
`

export default Card
