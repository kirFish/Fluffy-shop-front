import { useDispatch, useSelector } from "react-redux";
import { Search, ResetSearch } from "../../state/SearchBar";
import { StoreType } from "../../Store";

const SearchBar = () => {
    const dispatch = useDispatch();
    const val = useSelector<StoreType, string>((st) => st.search)
    
    return (<>
        <input type="text" onChange={(ev) => dispatch(Search(ev.target.value))} value={val}></input>
        <button onClick={() => dispatch(ResetSearch())}>X</button>
    </>)
}

export default SearchBar;
