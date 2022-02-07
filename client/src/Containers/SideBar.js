import {HiChartBar, HiChartPie, HiOutlineUserCircle} from 'react-icons/hi'
export const SideBar = () => {
    return(
        <nav className="h-screen flex-col fontFamily['Work Sans'] bg-white font-bold flex w-48 border-x-2">
            <h1 className="text-xl text-left p-3 text-green-700">PUFFIN</h1>

            <ul className="flex text-xl font-semibold flex-col mt-16 text-center justify-between gap-10">
                <li className="flex justify-center gap-3"> <HiOutlineUserCircle className="hover:text-green-700"/>Account</li>
                <li className="flex justify-center gap-3">  <HiChartPie className="hover:text-green-700"/> Portfolio</li>
                <li className="flex justify-center gap-3">  <HiChartBar className="hover:text-green-700"/> All Assets</li>           
                </ul>
        </nav>
    );
}