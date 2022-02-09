import {StockCard} from '../Components/StockCard'

export const DashBoard = (props) => {

    const holdings = [{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1}
,{name:'AAPL',subjectivity:1,polarity:1}]
    return (
        <div className="  border-gray-200 bg-white rounded-2xl border-2 mx-auto px-8 w-2/3 my-4">
            <div className="w-10/12 rounded-md h-72 border-2 border-slate-400 mt-12 mb-6 mx-auto"></div>
            <form className="flex justify-center">
            <input type="text" className="w-1/2 h-6 text-center border bg-grey-50 border-black" defaultValue = 'Search All Assets'/>
            </form>
            <ul className="flex justify-center">
                {holdings.map((stock,index)=> <StockCard key={index} name={stock.name} subjectivity={stock.subjectivity} polarity={stock.polarity}/> )}
            </ul>
        </div>
    );
}