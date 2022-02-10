import {FaPlusCircle} from 'react-icons/fa'
export const StockBar = (props) => {
    return (

            <div className=" flex items-center justify-between  fontFamily['Work-Sans'] border-2 p-2 font-semibold border-gray-200 mb-2 rounded">
                <ul>
                <li className="bg-cyan-500 rounded-md w-fit text-white px-2">{props.symbol}</li>
                <li>{props.fullname}</li>
                </ul>
                <div className="flex gap-6 ml-8">
                <p>Twitter</p>
                <p>Reddit</p>
                <p>News</p>
                <p className="">$45.67</p>
                <FaPlusCircle/>
                </div>
            </div>
        
    );
}