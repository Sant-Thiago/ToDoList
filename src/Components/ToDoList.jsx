import React, { useEffect, useState } from "react";
import './ToDoList.css';
import FormInput from "./FormInput";
import { getTasks, updateTasks } from "../Utils/Fetch";
import Item from "./Item";
import NoList from "./NoList";

function ToDoList() {
    
    const [lista, setLista] = useState([]);
    const [listaDel, setListaDel] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    const obterTasks = async () => {
        const tasks = await getTasks();
        setLista(tasks);
    }

    function adicionaItem(form) {
        form.preventDefault();
        if (novoItem) {
            setLista([...lista, { text: novoItem, isCompleted: false }]);
            setNovoItem("");
            document.getElementById('input-entrada').focus();
        } 
    }

    const completar = async (idx) => {   
        const listaAux = [...lista];
        const index = listaAux.findIndex(item => item.id == idx);
        const item = listaAux[index];
        item.done = !item.done == 1
        const response = await updateTasks(item);
        alert(response.message)
        obterTasks();
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

    useEffect(() => {
        obterTasks();
    }, []);

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
                    lista.length < 1 ? <NoList /> : lista.map(item => ( 
                        <Item 
                            key={item.id}                            
                            valor={item.title} 
                            style={item.done == 1 ? "item completo" : "item"}
                            completar={() => completar(item.id)}  
                            deletar={() => deletar(item.id)}  
                            editar={() => editar(item.id)}  
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