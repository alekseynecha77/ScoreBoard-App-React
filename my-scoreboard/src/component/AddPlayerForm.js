import React, { useState } from "react";


const AddPlayerForm = (props) =>{
    const [value, setValue] = useState("");
 
    const handleSubmit  = (e) => {
        e.preventDefault();
        props.addPlayer(value);
    }

return(

    <form onSubmit={(e) => handleSubmit(e)}>
       <input 
            type='text'
            value={value}
            placeholder="enter a player's name" 
            onChange={(e) => setValue(e.target.value)}
        />

       <input 
            type='submit'
            value="add player"
        />


    </form>




);
}



export default AddPlayerForm;