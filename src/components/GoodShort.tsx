import React from "react";
import {Container,DescContainer,AddButton} from "./GoodShort.styles";
import { Good } from "../state/Good";
import { useDispatch, useSelector } from "react-redux";


type Props = {
    good: Good
};

export default function ({good}: Props) {
    const {image, name, description, id} = good;
    const [isActive, setActive] = React.useState(false);

    const dispatch = useDispatch();

    return <Container $bgl={image} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        {(isActive)? <>
            <h2>{name}</h2>
            <DescContainer>{description}</DescContainer>
            <AddButton onClick={() => dispatch({ type: 'ADD_TO_CART', id})}>Add to cart</AddButton>
        </> : null }
    </Container>;
}