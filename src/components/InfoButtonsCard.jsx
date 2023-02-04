import './InfoButtonsCard.css';

export default function InfoButtonsCard(props){
    return(
    <div className="info-button-card">
        <div className='upper-container'>
            <div className='main-content-container'>
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
                <div className="content">
                    <h4>{props.content}</h4>
                </div>
            </div>
        </div>
        <div className='lower-container'>
            <div className='button-container'>
                <button id='button1' className='button'>{props.button1}</button>
            </div>
            <div className='button-container'>
                <button id='button2' className='button'>{props.button2}</button>
            </div>
        </div>
    </div>
    );
}