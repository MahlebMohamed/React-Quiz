import React from "react";

export default function Progress({ index, numQuestions, maxPossiblePoints, points }) {
    return (
        <header className="progress">
            <progress max={numQuestions} value={index} />

            <p>
                Question <strong>{index + 1} </strong> / {numQuestions}
            </p>
            <p>
                <strong>{points}</strong> / {maxPossiblePoints}
            </p>
        </header>
    );
}
