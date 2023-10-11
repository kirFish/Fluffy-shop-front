import styled from "styled-components";

export const Row = styled.div<{height: string}>`
display: flexbox;
position: absolute;
width: 100%;
${props => `height: ${props.height}`};
/* background-color: #7120ce; */
background-image: url(bgt.bmp);
background-repeat: repeat;
padding-bottom: 0.5;
`;

export const Img = styled.img`
height: inherit;
width: auto;
vertical-align: bottom;
`;

export const Fill = styled.span`
display: inline-block;
width: 40%;
`;