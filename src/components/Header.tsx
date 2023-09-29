import { Row } from "./Header.styles"
import Cabinet from "./Header/Cabinet";
import SearchBar from "./Header/SearchBar";

type Props = {};

export default function({}: Props): JSX.Element {
    return <Row>
        Logo // <img src="fluffy.png" width="28pt" height="inherit"></img>
        <SearchBar></SearchBar>
        <Cabinet></Cabinet>
    </Row>
}