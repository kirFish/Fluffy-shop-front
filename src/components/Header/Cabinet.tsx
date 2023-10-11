import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../Store";
import { Logout, User } from "../../state/User";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.span`
    justify-self: end;
    color: white;
`;

const Cabinet = () => {
    const user = useSelector<StoreType, User>((st) => st.user)

    const navigate = useNavigate()

    const dispatch = useDispatch();
    
    if (user === "Anonymous") return <Container><button onClick={() => navigate("/login")}>Log in</button></Container>

    return (<Container>
        <img src={user.avatar}></img>
        <span>{user.login}</span>
        <button onClick={() => navigate("/favorites")}>Favs</button>
        <button onClick={() => dispatch(Logout())}>Logout</button>
    </Container>)
}

export default Cabinet;
