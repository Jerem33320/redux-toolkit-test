import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <>
            <Header />
            <main className="App">
                {/* Outlet: Représente tous les childrens */}
                <Outlet />
            </main>
        </>
    )
}

export default Layout