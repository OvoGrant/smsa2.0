export const StockCard = (props) => {
    const color = props.polarity === 1 ? 'border-green-600' : 'border-red-600';
    const cardStyle = `border-2 ${color} inline-block m-5 p-2 rounded`;

    return(  
        <div className={cardStyle}> 
        <li>
            <h1 className="text-center">{props.name}</h1>
            <ul>
                <li> Subjectivity: {props.subjectivity}</li>
                <li> Sentiment: {props.polarity}</li>
                <li> Twitter: Bullish</li>
                <li> Reddit: Bearish</li>
            </ul>
        </li>
        </div>
    );
}