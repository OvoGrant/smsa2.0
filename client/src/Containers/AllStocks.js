import {useEffect, useState} from 'react'
import {StockBar} from '../Components/StockBar'
import axios from 'axios'
import NewsBar from '../Components/NewsBar'
const AllStocks = (props) => {

    
    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q:'stock market', lang: 'en', page: '1', page_size: '25'},
        headers: {
          'x-rapidapi-key': '385b024a03msh25fa0d913b47b7ap1fc445jsn64b358f9cb47',
          'x-rapidapi-host': 'free-news.p.rapidapi.com'
        }
      };


    let [allAssets , setAssets] = useState([])
    let [visible, setVisible] = useState(allAssets)
    const [news,setNews] = useState([])
    useEffect(()=>{
        props.changeHeadding("All Stocks");
        fetch("https://desolate-woodland-29384.herokuapp.com/stocks")
        .then( response => response.json())
        .then( data => setAssets(data));
        
        axios.request(options)
        .then((response)=>{
            setNews(response.data.articles)
        })
    },[])

    
    const handleChange = (e) => {
        e.preventDefault();
        const ass = allAssets.filter((asset) => asset.full_name.includes(e.target.value) || e.target.value === "Search")
        console.log(ass)
        setVisible(ass);
    }

    return(
        <div className="flex gap-4 border-2 border-gray-200 p-4">
            
            <div className=" items-center flex-col w-7/12" >
            <form className="flex justify-start" >

                <input  onChange={handleChange} className="w-96 caret-green-500 border-2 border-gray-200 p-4 mb-4" type="text" defaultValue="Search"/>

            </form>
            <ul className="flex justify-between">
                <li className="ml-2">Name</li>
                <div className="flex w-1/4 pr-14  justify-between">
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
            <div className=" lg:bg-white lg:w-5/12 hidden lg:block ">
                <ul>
                    {news.map((item)=><NewsBar data={item}/>)}
                </ul>
            </div>
        </div>
    )
}

export default AllStocks
