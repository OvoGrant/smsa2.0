import {HiChartBar, HiChartPie, HiOutlineUserCircle} from 'react-icons/hi'
export const SideBar = () => {
    return(
        <nav className="h-screen flex-col fontFamily['Work Sans'] bg-white font-bold flex w-48 border-x-2">
            <h1 className="text-xl text-center mt-4">StockMarket</h1>

            <ul className="flex text-2xl flex-col mt-16 text-center justify-between gap-10">
                <li className="flex justify-center gap-3" > <HiOutlineUserCircle/> Account</li>
                <li className="flex justify-center gap-3">  <HiChartPie/> Portfolio</li>
                <li className="flex justify-center gap-3">  <HiChartBar/> All Assets</li>           
                </ul>
        </nav>
    );
}