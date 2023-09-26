import Header from "./components/Header"

export const Layout = ({children}: React.PropsWithChildren) => (
    <>
        <Header />
        {children}
    </>
)