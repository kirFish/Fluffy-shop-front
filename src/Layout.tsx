import Header from "./components/Header"
import {Container} from "./Layout.styles"

export const Layout = ({children}: React.PropsWithChildren) => (
    <>
        <Header />
        <Container>
            {children}
        </Container>
    </>
)