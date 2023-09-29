import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StoreType } from "../Store";
import { User } from "../state/User";

const Favs = ({}) => {
    const user = useSelector<StoreType, User>((st) => st.user)

    if (user === "Anonymous") return <p>You need to log in to view this</p>

    return <div>Details of {JSON.stringify(user.preferences)}</div>
}

export default Favs;