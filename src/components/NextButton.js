export default function NextButton({ dispatch, answer, numQuestions, index }) {
    if (answer === null) return null;

    function handleClick() {
        if (numQuestions === index)
            return dispatch({ type: 'finished' })

        dispatch({ type: "nextQuestion" })
    }

    return (
        <button
            className="btn btn-ui"
            onClick={handleClick}
        >
            {numQuestions > index ? 'Next' : 'Finish'}
        </button>
    );
}
