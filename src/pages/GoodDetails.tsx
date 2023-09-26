import { useParams } from "react-router-dom";

const GoodDetails = ({}) => {
    const {id} = useParams();

    return <div>Details of {id}</div>
}

export default GoodDetails;