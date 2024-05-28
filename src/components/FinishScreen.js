
export default function FinishScreen({ maxPossiblePoints, points }) {
    const percentage = (points / maxPossiblePoints) * 100;

    return (
        <p className="result">
            You scored <strong> {points} </strong>  out of {maxPossiblePoints} ({Math.ceil(percentage)})%
        </p>
    )
}
