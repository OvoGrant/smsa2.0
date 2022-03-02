import {StockCard} from '../Components/StockCard'
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';
import {Modal} from '../Components/Modal'
import {useEffect,useState} from 'react';
export const Assets = (props) => {

    const [watchlist,setWatchlist] = useState([]);
    const {isAuthenticated,user} = useAuth0();
    const [visible,setVisible] = useState(false)
    const [modalTopic,setModalTopic] = useState("")

    const showModal = (symbol="", vis=false) => {
        setModalTopic(symbol)
        setVisible(vis)
    }

    

    useEffect(() => {
     if(isAuthenticated){

        const id = user.sub;
        const endpoint = 'http://137.184.224.203:5000/watchlist/'+id;
        fetch(endpoint)
        .then((response)=> response.json())
        .then((result)=> setWatchlist(result))
        .catch((err)=>{
            console.log(err)
        })
    
    }else{

     }
    },[])
    return (
         <div>
             <Modal
                visibility={visible}
                symbol={modalTopic}
                close={showModal}
             />
            <form className="flex justify-center">
            </form>
            {watchlist.length > 0 ?
            <ul className="flex flex-wrap justify-center">
                {watchlist.map((stock,index)=> <StockCard key={index} symbol={stock.symbol} onClick={showModal} /> )}
            </ul> : <h1>loading</h1>}
        </div>
    );
}