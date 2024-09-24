import { useState } from "react";
import RatingPrompt from "../RatingPrompt/RatingPrompt";
import Message from "../Message/Message";

export default function RatingSystem() {
    const [rating, setRating] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <>
            {
                showMessage === false ?
                <RatingPrompt
                    rating={rating}
                    setRating={setRating}
                    setShowMessage={setShowMessage}
                /> :
                <Message rating={rating} />
            }
        </>
    );
}