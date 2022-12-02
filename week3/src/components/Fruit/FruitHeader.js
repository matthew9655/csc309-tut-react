import './FruitHeader.css';

function FruitHeader(props) {
    const numFruits = Math.round(props.cals / props.fruitCals * 100 / 100) ;
    const Emoji = props => (
        <span
          className="emoji"
          role="img"
          aria-label={props.label ? props.label : ""}
          aria-hidden={props.label ? "false" : "true"}
        >
          {props.symbol}
        </span>
    )
    return (
        <div className="header-container">
            <span className="header">We will have to eat {numFruits} {<Emoji label={props.label} symbol={props.symbol}/>} to reach our estimated 
            calorie goal.</span>
        </div>
        
    );
}

export default FruitHeader;