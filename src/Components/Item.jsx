import React, { useRef, useState } from 'react';
import './Item.css';

function Item({valor, style, completar, deletar, editar}) {

    const [iValor, setIValor] = useState(valor)
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    function editar(index) {
        setIsEditing(true);
        const item = document.getElementById("item")
        
        console.log(index)
    }

    return (
        <div
            id='item' 
            className={style}
        >
            {
                isEditing ? (
                    <input 
                        type="text" 
                        className="inputItem" 
                        value={iValor} 
                        ref={inputRef}
                        onChange={e => setIValor(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && setIsEditing(false)}
                        onBlur={() => setIsEditing(false)}
                        autoFocus
                    />
                ) : (
                    <span onClick={completar} onDoubleClick={editar}>{iValor}</span>
                )        
            }
            <button className="del" onClick={deletar}>Deletar</button>
        </div>
    )
}

export default Item;