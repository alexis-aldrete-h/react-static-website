import './InfoCard.css';

export default function(props){
    return(
        <div className="info-card">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="content">
                <h4>{props.content}</h4>
            </div>
        </div>
    )
}