import axios from 'axios';
import {useRef, useEffect ,useState} from 'react';
export const StockCard = (props) => {
    
    const [position,setPosition] = useState("BUY")
    const [metaData,setMetaData] = useState({})
    const handleClick = () =>{
        props.onClick(props.symbol,true)
    }

    useEffect( async ()=>{
        try{
        const response = await fetch(`https://desolate-woodland-29384.herokuapp.com/nlp/${props.symbol}`)
        const respons2 = await fetch(`https://desolate-woodland-29384.herokuapp.com/stocks/${props.symbol}`)
        const data = await response.json()
        const stock_info = await respons2.json()
        setMetaData(stock_info[0])
        setPosition(data[0].position)
        }catch(err){
            console.log(err)
        }
    },[])
    const cardStyle = `border-2 w-48 h-48 my-4 mx-2 rounded-xl cursor-pointer flex p-2 hover:border-4  hover:border-gray-400/25`;
    const titleStyle =`text-center text-sm w-16 font-semibold text-white bg-red-600 border-2 rounded-lg`;
    return(  
        <div className={cardStyle} onClick={handleClick}> 
        <li>
            <h1 className='text-center text-sm w-16 font-semibold text-white bg-red-600 border-2 rounded-lg'>{metaData.symbol}</h1>
            <h1 className="text-sm font-semibold text-left my-1 ">{metaData.full_name}</h1>
            <h2 className="text-left font-semibold mb-2">Public Opinion</h2>
            <p className={position == "BUY" ? 
                "text-left bg-green-600 text-white border-2 font-semibold border-green-600 text-center w-12 rounded-md" 
                : "text-left bg-red-600 text-white border-2 font-semibold  border-red-600  text-center w-12 rounded-md"}
                >{position}</p>
        </li>
        </div>
    );
}
