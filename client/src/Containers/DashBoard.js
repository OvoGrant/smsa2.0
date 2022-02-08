import {StockCard} from '../Components/StockCard'

export const DashBoard = (props) => {

    const holdings = [{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1}
,{name:'AAPL',subjectivity:1,polarity:1}]
    return (
        <div className="  border-gray-200 bg-white rounded-2xl border-2 mx-auto px-8 w-2/3 my-4">
            <div className=" h-full w-full border-gray-300 text-center m-3 bg-gray-300"></div>
            <form className="flex justify-center">
            <input type="text" className="w-1/2 h-6 text-center border bg-grey-50 border-black" defaultValue = 'Search All Assets'/>
            </form>
            <ul className="flex justify-center">
                {holdings.map((stock,index)=> <StockCard key={index} name={stock.name} subjectivity={stock.subjectivity} polarity={stock.polarity}/> )}
            </ul>
        </div>
    );
}