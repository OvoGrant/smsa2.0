import {HiChartBar, HiChartPie, HiOutlineUserCircle, HiStop} from 'react-icons/hi'
import {Link} from 'react-router-dom'

export const SideBar = () => {
    return(
        <nav className="fixed w-52 h-full flex-col top-0 z-20 bg-white  border-2 border-gray-100">

                <h1 className="text-xl text-left ml-6 mt-4 font-semibold text-green-700">Puffin</h1>

                <ul className="flex-col ml-4  mt-24 h-96">

                <li className="mb-6"><Link to='/Account' className=""><a href="#" className="font-semibold hover:rounded hover:bg-green-500 p-2 visited:bg-green-500 transiton duration-500 ease-in-out hover:text-white mb-2 text-2xl">Account</a></Link></li>
                
                <li className="mb-6"><Link to='/Assets'><span className="font-semibold hover:bg-green-500 hover:rounded transiton duration-500 p-2 ease-in-out hover:text-white mb-2 text-2xl">Assets</span></Link></li>
                
                <li className="mb-6"><Link to='/Trade'><span className="font-semibold hover:bg-green-500 hover:rounded transiton duration-500 p-2 ease-in-out hover:text-white mb-2 text-2xl">Trade</span></Link></li>
            
                <li><Link to='/AllStocks'><span className="font-semibold hover:bg-green-500 transiton duration-500 hover:rounded p-2 ease-in-out hover:text-white mb-2 text-2xl">All Stocks</span></Link></li> 
                </ul>          
        </nav>
    );
}