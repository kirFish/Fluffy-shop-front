import { useDispatch, useSelector } from "react-redux";
import { Search, ResetSearch } from "../../state/SearchBar";
import { StoreType } from "../../Store";
import { Container } from "./SearchBar.styles";

const SearchBar = () => {
    const dispatch = useDispatch();
    const val = useSelector<StoreType, string>((st) => st.search)
    
    return (<Container>
        <input type="text" onChange={(ev) => dispatch(Search(ev.target.value))} value={val}></input>
        <button onClick={() => dispatch(ResetSearch())}>X</button>
    </Container>)
}

export default SearchBar;
