import React from "react";

function FormInput({valor, setValor, adicionaItem}) {    
    return (
        <>
            <form id="formId" onSubmit={adicionaItem}>
                <input 
                    type="text" 
                    placeholder="Adicione uma tarefa"
                    value={valor} 
                    onChange={(e) => { setValor(e.target.value) }}
                    id="input-entrada"/>
                <button 
                    type="submit" 
                    className="add">Add
                </button>
            </form>
        </>
    )
}

export default FormInput;