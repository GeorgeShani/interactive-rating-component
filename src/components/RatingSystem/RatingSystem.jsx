import { useState } from "react";
import RatingPrompt from "../RatingPrompt/RatingPrompt";
import Message from "../Message/Message";

export default function RatingSystem() {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState("");

    const handleSubmit = (selectedRating) => {
        setMessage(`You selected ${selectedRating} out of 5`);
        setRating(selectedRating);
    };

    return (
        <>
            {rating === 0 ?
                <RatingPrompt handleSubmit={handleSubmit} /> :
                <Message message={message} />
            }
        </>
    );
}