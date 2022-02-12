import {useEffect, useState} from 'react'
import {StockBar} from '../Components/StockBar'
const AllStocks = (props) => {

    let [allAssets , setAssets] = useState([])
    let [visible, setVisible] = useState([])
    useEffect(()=>{
        props.changeHeadding("All Stocks");
        fetch("http://localhost:5000/stocks")
        .then( response => response.json())
        .then( data => setAssets(data));
    },[])

    


    return(
        <div className="flex gap-4 border-2 border-gray-200 p-4">
            
            <div className=" items-center flex-col w-7/12" >
            <form className="flex justify-start" >
                <input  className="md:w-96 caret-green-500 border-2 border-gray-200 p-4 mb-4" type="text" defaultValue="Search"/>
            </form>
            <ul className="flex justify-between">
                <li className="ml-2">Name</li>
                <div className="flex w-1/4 pr-14  justify-between">
                <li className="ml-6 mr-6">Sentiment</li>
                <li className="">Price</li>
                </div>
            </ul>
            <div className=" flex-col items-center justify-center bg-white">
            {visible.map((asset)=><StockBar 
            symbol={asset.symbol}
            fullname={asset.full_name} 
            city={asset.city}
            country={asset.country}

            />)}
            </div>
            </div>
            <div className="lg:border-2 lg:bg-white lg:w-5/12 hidden lg:block lg:border-gray-100">
                Hello
            </div>
        </div>
    )
}

export default AllStocks