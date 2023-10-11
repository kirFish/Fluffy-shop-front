import styled from "styled-components";

export const Container = styled.div<{height: string}>`
position: absolute;
margin-top: 2rem;
${props => `height: ${props.height}`}
width: 100vw;
`