import { useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';

export default function ResultModal({
  ref,
  result,
  targetTime,
  timeRemaining,
  reset,
}) {
  const dialog = useRef();
  const formattedTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1- timeRemaining / (targetTime * 1000)) * 100); 

  useImperativeHandle(ref, () => {
    //the purpose of this hook is to detach this from the timer challenge code.
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  //on close makes it close with esc key // create portal moves code around in the html dom
  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose = {reset}> 
      <h2>You {result}...</h2>
      {result == "won" && <h2>Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You had <strong>{formattedTime}</strong> seconds left when you stopped.
      </p>
      <form method="dialog" onSubmit={reset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
