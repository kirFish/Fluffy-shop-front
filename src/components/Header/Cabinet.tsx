import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../Store";
import { Logout, User } from "../../state/User";
import { useNavigate } from "react-router-dom";

const Cabinet = () => {
    const user = useSelector<StoreType, User>((st) => st.user)

    const navigate = useNavigate()

    const dispatch = useDispatch();
    
    if (user === "Anonymous") return <button onClick={() => navigate("/login")}>Log in</button>

    return (<>
        <img src={user.avatar}></img>
        <span>{user.login}</span>
        <button onClick={() => navigate("/favorites")}>Favs</button>
        <button onClick={() => dispatch(Logout())}>Logout</button>
    </>)
}

export default Cabinet;
