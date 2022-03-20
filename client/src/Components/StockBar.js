import {FaPlusCircle} from 'react-icons/fa'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
export const StockBar = (props) => {

    const {isAuthenticated, user} = useAuth0();
    
    const handleClick = () => {
        if(isAuthenticated) { 
            const id = user.sub
            console.log(id)
            axios.post('https://desolate-woodland-29384.herokuapp.com/watchlist',{
                user_id: id,
                symbol:props.symbol
            })
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error)
            });

        }else{
            console.log("failure");
        }
    }

    return (

            <div className=" flex items-center justify-between  fontFamily['Work-Sans'] border-2 p-2 font-semibold border-gray-200 mb-2 rounded">
                <ul>
                <li className="bg-cyan-500 rounded-md w-fit text-white px-2">{props.symbol}</li>
                <li>{props.fullname}</li>
                </ul>
                <div className="flex gap-6 ml-8">
                <button onClick={handleClick}><FaPlusCircle/></button>
                </div>
            </div>
        
    );
}
