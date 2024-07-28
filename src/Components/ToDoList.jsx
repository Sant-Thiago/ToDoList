import React, { useState } from "react";
import './ToDoList.css';
import FormInput from "./FormInput";
import Item from "./Item";
import NoList from "./NoList";

function ToDoList() {
    
    const [lista, setLista] = useState([]);
    const [listaDel, setListaDel] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form) {
        form.preventDefault();
        if (novoItem) {
            setLista([...lista, { text: novoItem, isCompleted: false }]);
            setNovoItem("");
            document.getElementById('input-entrada').focus();
        } 
    }

    function completar(index) {   
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }

    function deletar(index) {
        const listaAux = [...lista];
        listaAux.splice(index, 1);
        setListaDel([...listaDel, ...listaAux]);
        setLista(listaAux);
    }

    function deleteAll() {
        setListaDel([...listaDel, ...lista]);
        setLista([]);
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <FormInput 
                valor={novoItem} 
                setValor={setNovoItem} 
                adicionaItem={adicionaItem}
            />
            <div className="listaTarefas" id="listaTarefasId">
                {
                    lista.length < 1 ? <NoList /> : lista.map((item, index) => ( 
                        <Item 
                            key={index}                            
                            valor={item.text} 
                            style={item.isCompleted ? "item completo" : "item"}
                            completar={() => completar(index)}  
                            deletar={() => deletar(index)}  
                            editar={() => editar(index)}  
                        />     
                    ))
                }
            </div>
            <div className="options">
                <button className="show-itens" onClick={() => showItens()}>Tarefas deletadas</button>
                <button className="delete-all" onClick={() => deleteAll()}>Deletar todos</button>
            </div>
        </div>
    )
}

export default ToDoList;