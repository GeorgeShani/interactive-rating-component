import { useState } from "react";
import "./RatingPrompt.css";

export default function RatingPrompt(props) {   
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRating = (ratingValue) => {
        setSelectedRating(ratingValue);
    };

    const handleSubmit = () => {
        if (selectedRating !== null) {
            props.handleSubmit(selectedRating);
        } else {
            alert("Please select a rating before submitting.");
        }
    };

    return (
        <div className="rating-container">
            <div className="rating-star">
                <i class="fa-solid fa-star"></i>
            </div>
            <div className="title">
                <h1>How did we do?</h1>
            </div>
            <div className="description">
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="rating-buttons">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                        key={rating}
                        className={`rating-btn ${selectedRating === rating ? "selected" : ""}`}
                        onClick={() => handleRating(rating)}
                    >
                        {rating}
                    </button>
                ))}
            </div>
            <div className="submit-button-cont">
                <button onClick={handleSubmit} className="submit-btn">Submit</button>
            </div>
        </div>
    );
}