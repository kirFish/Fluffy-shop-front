import Header from "./components/Header"
import {Container} from "./Layout.styles"

const HEADER_HEIGHT = "2rem";

export const Layout = ({children}: React.PropsWithChildren) => (
    <>
        <Header height={HEADER_HEIGHT}/>
        <Container height={`calc(100uv - ${HEADER_HEIGHT})`}>
            {children}
        </Container>
    </>
)