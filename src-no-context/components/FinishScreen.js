
export default function FinishScreen({ maxPossiblePoints, points, dispatch }) {
    const percentage = (points / maxPossiblePoints) * 100;

    return (
        <>
            <p className="result">
                You scored <strong> {points} </strong>  out of {maxPossiblePoints} ({Math.ceil(percentage)})%
            </p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "restart" })}
            >
                Restart quiz
            </button>
        </>
    )
}
