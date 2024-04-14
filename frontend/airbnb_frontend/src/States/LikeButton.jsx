import { useState } from "react";

const LikeButton = () => {
    let [isLiked, setIsLiked] = useState(false);

    function toggleLike() {
        setIsLiked(!isLiked);
    }

    return (
        <div>
            <p>Like Button</p>
            <span onClick={toggleLike}>{isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</span>
        </div>
    );
};

export default LikeButton;
