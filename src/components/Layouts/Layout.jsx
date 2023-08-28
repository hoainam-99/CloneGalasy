import Navbar from '@/components/Layouts/Navbar';
import Header from '@/components/Layouts/Header';

const Layout = ({ children }) => {
    return (<div className='w-screen h-screen'>
        <Header />
        <div className='flex overflow-hidden' style={{height: 'calc(100vh - 74px)'}}>
            <Navbar />
            <main className='flex-1'>{children}</main>
        </div>
    </div>)
};

export default Layout;