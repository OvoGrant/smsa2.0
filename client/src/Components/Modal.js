import {useState,useEffect} from 'react'
import NewsBar from './NewsBar'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react';
export const Modal = (props) => {
    const handleClick = () => {
        props.close("",false)
        console.log(props.visibility)
    }
    const {isAuthenticated,user} = useAuth0();

    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q:props.symbol, lang: 'en', page: '1', page_size: '25'},
        headers: {
          'x-rapidapi-key': '385b024a03msh25fa0d913b47b7ap1fc445jsn64b358f9cb47',
          'x-rapidapi-host': 'free-news.p.rapidapi.com'
        }
      };

    const handleRemove = () => {
        if(isAuthenticated) { 
            const id = user.sub
            axios.delete('http://137.184.224.203:5000/watchlist/',{
                data:{user_id: id,
                symbol:props.symbol}
            })
            .catch((error)=>{
                console.log(error)
            })
        }else{
            console.log("failure");
        }
    }


    const [news,setNews] = useState([])
    useEffect(async ()=>{
    try{
        const response = await axios.request(options)
        console.log(response)
        console.log(response.data)
        setNews(response.data.articles.slice(0,6))
    }catch(err){
        console.log(err)
    }

    })

    if(!props.visibility) return null;

    return(
        <div className= "w-screen justify-center flex h-screen top-0 backdrop-filter backdrop-blur-sm left-0 z-30 fixed">
        <div className="w-4/6 bg-white  border-4 h-5/6 self-center rounded-2xl border-gray-200 ">
            <h1 className="font-semibold text-lg">{props.symbol}</h1>
            <div className=" mx-8  w-full gap-6 flex justify-center">
                <div className="border- w-full flex justify-center h-5/6">
                    <ul className="w-11/12 my-10 m-auto h-11/12">
                        {news.map((item)=>
                            <NewsBar data={item}/>
                        )}
                    </ul>
                </div>
            </div>
            <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Close</button>
            <button  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" onClick={handleRemove}>Remove From Watchlist</button>
            
        </div> 
        </div>
)}
