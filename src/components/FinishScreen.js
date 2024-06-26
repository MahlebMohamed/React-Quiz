import { useQuiz } from "../contexts/QuizContext";


export default function FinishScreen() {
    const { maxPossiblePoints, points, dispatch } = useQuiz();
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
