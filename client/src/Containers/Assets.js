import {StockCard} from '../Components/StockCard'

export const Assets = (props) => {
    props.changeHeadding("Assets");
    const holdings = [{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1}
,{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1}
,{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1},{name:'AAPL',subjectivity:1,polarity:1}]
    return (
        <div>
            <div className="w-10/12 rounded-md h-72 border-2 border-slate-400 mt-12 mb-6 mx-auto"></div>
            <form className="flex justify-center">
            </form>
            <ul className="flex flex-wrap justify-center">
                {holdings.map((stock,index)=> <StockCard key={index} name={stock.name} subjectivity={stock.subjectivity} polarity={stock.polarity}/> )}
            </ul>
        </div>
    );
}