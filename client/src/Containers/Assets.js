import {StockCard} from '../Components/StockCard'
import axios from "axios";
import {useEffect,useState} from 'react';
export const Assets = (props) => {


    const [watchlist,setWatchlist] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/watchlist/${5}`)
        .then((response)=>{
            setWatchlist(response.data);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    },[])



    props.changeHeadding("Assets");
    return (
        <div>
            <div className="w-10/12 rounded-md h-72 border-2 border-slate-400 mt-12 mb-6 mx-auto"></div>
            <form className="flex justify-center">
            </form>
            <ul className="flex flex-wrap justify-center">
                {watchlist.map((stock,index)=> <StockCard key={index} name={stock.name}/> )}
            </ul>
        </div>
    );
}