import { useImperativeHandle } from "react";

export default function ResultModal({ref, result, targetTime})   {
    const dialog = useRef();

    useImperativeHandle(ref, () => { //the purpose of this hook is to detach this from the timer challenge code. 
        return{
            open() {
                dialog.current.showModal();
            }
        }
    }); 

    return (
        <dialog className = "result-modal" ref = {dialog} >
            <h2>You {result}...</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You had <strong>x</strong> time left when you stopped.</p>
            <form method = "dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}