

export default function ResultModal({ref, result, targetTime})   {
    return (
        <dialog className = "result-modal" ref = {ref} >
            <h2>You {result}...</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You had <strong>x</strong> time left when you stopped.</p>
            <form method = "dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}