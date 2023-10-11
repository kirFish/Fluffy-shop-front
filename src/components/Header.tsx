import { Row, Img, Fill } from "./Header.styles"
import Cabinet from "./Header/Cabinet";
import SearchBar from "./Header/SearchBar";

type Props = {
    height: string
};

export default function({height}: Props): JSX.Element {
    return <Row height={height}>
        <Img src="fluffy.png" />
        {/* <Fill /> */}
        <SearchBar />
        {/* <Fill /> */}
        <Cabinet />
    </Row>
}