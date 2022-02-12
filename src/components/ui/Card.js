import "./Card.css"

function Card(props) {
    const classes = 'card ' + props.className;


    //children component beetween opening and closing tag will be avaiable props children
    return <div className={classes}>{props.children}</div>;
}


export default Card;


