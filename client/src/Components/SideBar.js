import {HiChartBar, HiChartPie, HiOutlineUserCircle} from 'react-icons/hi'
import {Link} from 'react-router-dom'

export const SideBar = () => {
    return(
        <nav className="h-screen flex-col fontFamily['Work Sans'] bg-white font-bold flex w-48 border-x-2">
                <h1 className="text-xl text-left p-3 text-green-700">PUFFIN</h1>

                <Link to='/Account'><HiOutlineUserCircle className="hover:text-green-700"/>Account</Link>
                
                <Link to='/Assets'><HiChartPie className="hover:text-green-700"/>Assets</Link>
                
                <Link to='/Trade'>Trade</Link>
            
                <Link to='/AllStocks'><HiChartBar className="hover:text-green-700"/>All Stocks</Link>           
        </nav>
    );
}