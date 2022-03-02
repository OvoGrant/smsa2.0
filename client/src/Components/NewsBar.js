const NewsBar = (props) => {
    const info = props.data;
    return (
        <a href={info.link} target="_blank">
             <h6 className="text-left">{info.clean_url.split('.')[0]}</h6>
            <li className="text-left w-10/12 flex justify-between ml-20">
            <h2 className="w-96">{info.title}</h2>
            <img className="rounded-lg inline  h-auto w-28" src={info.media}></img>
        </li>
        <hr/>
        </a>   
    )
}

export default NewsBar;
