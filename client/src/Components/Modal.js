export const Modal = (props) => {

    const handleClick = () => {
        props.close("",false)
        console.log(props.visibility)
    }
    return(
        <div className= "w-screen justify-center flex h-screen top-0 backdrop-filter backdrop-blur-sm left-0 z-30 fixed">
        <div className="w-4/6 bg-white  border-4 h-4/6 self-center rounded-2xl border-gray-200 ">
            <h1>{props.symbol}</h1>
            <button  className="text-black" onClick={handleClick}>Close</button>
        </div> 
        </div>
)}
