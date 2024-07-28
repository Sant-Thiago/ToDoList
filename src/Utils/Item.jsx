function Item({valor, style, completar, deletar}) {


    return (
        <div className={style}>
            <span 
                onClick={completar}
                onDoubleClick={event => {console.log(event.target.key); console.log(event)}}
            >{valor}</span>
            <button className="del" onClick={deletar}>Deletar</button>
        </div>
    )
}

export default Item;