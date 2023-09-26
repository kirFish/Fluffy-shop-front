import styled from "styled-components";

export const Container = styled.div<{$bgl: string}>`
display: inline-block;
background-image: ${props => `url(${ props.$bgl ?? "" })` };
`;

export const Img = styled.img`
height: 100%;
width: 100%;
`;

export const DescContainer = styled.div``;

export const AddButton = styled.button``;