import MessageImage from "./../../assets/message-image.png";
import "./Message.css";

export default function Message(props) {
    return (
        <div className="message-container">
            <div className="image-container">
                <img src={MessageImage} alt="" />
            </div>
            <div className="message">
                <p>{`You selected ${props.rating} out of 5`}</p>
            </div>
            <div className="thanks">
                <h1>Thank you!</h1>
            </div>
            <div className="appreciation">
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </div>
    );
}