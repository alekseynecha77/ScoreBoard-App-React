import React, { useRef } from "react";


const AddPlayerForm = ({addPlayer}) =>{
    const playerInput = useRef();

    const handleSubmit  = (e) => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    }

return(

    <form onSubmit={(e) => handleSubmit(e)}>
       <input 
            type='text'
            ref={playerInput}
            placeholder="enter a player's name" 
        />

       <input 
            type='submit'
            value="add player"
        />


    </form>




);
}



export default AddPlayerForm;