import store, {collapseMenu} from "@/hooks/store/index";
import Link from "next/link";
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons";

const Header = () => {
    const {collapsed} = store.getState();

    return (<div className="w-screen bg-white flex items-center px-6 h-[64px]">
        <div className='flex items-center'>
            <div onClick={collapseMenu} className='cursor-pointer text-[20px] -translate-y-1'>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div className='ml-[0] md:ml-3 font-bold cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                <Link href="/">
                <img
                    src='/icon/logo.svg'
                    className="object-scale-down h-[40px]"
                />
                </Link>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>)
};

export default Header;