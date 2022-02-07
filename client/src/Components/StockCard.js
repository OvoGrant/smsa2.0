
export const StockCard = (props) => {
    const color = props.polarity === 1 ? 'border-green-600' : 'border-red-600';
    const cardStyle = `border-2 w-48 h-48 my-4 mx-2 rounded-xl flex p-2 hover:border-4  hover:border-gray-400/25`;

    return(  
        <div className={cardStyle}> 
        <li>
            <h1 className=" text-center text-sm w-16 font-semibold text-white bg-green-600 border-2 rounded-lg">{props.name}</h1>
            <h1 className="font-medium my-1">Apple Inc</h1>
            <ul className="flex-col gap-2 font-semibold mt-3">
                <li> Subjectivity: {props.subjectivity}</li>
                <li> Sentiment: {props.polarity}</li>
                <li> Twitter: Bullish</li>
                <li> Reddit: Bearish</li>
            </ul>
        </li>
        </div>
    );
}