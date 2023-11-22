import { useState, useContext } from "react";

import { BoardContext } from "../contexts/board";

const BoardCreatingForm = () => {
    const [boardTitle, setBoardTitle] = useState("");
    const { dispatchBoardAction } = useContext(BoardContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        boardTitle ? dispatchBoardAction({ type: "CREATE_BOARD", payload: boardTitle }): alert("please Enter txt 😴") ;
        setBoardTitle("");
    };

    return (
        <div className="board-container">
            <h2>ToDo</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter text" value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)} />

                <button className="create-btn" type="submit">
                    Create Form
                </button>
            </form>
        </div>
    );

}

export default BoardCreatingForm;