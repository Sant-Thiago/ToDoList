import React, { useEffect, useState } from "react";
import './ToDoList.css';
import FormInput from "./FormInput";
import { getTasks, updateTasks, createTask, deleteTask } from "../Utils/Fetch";
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

    const adicionaItem = async (event) => {
        event.preventDefault();
        if (novoItem) {
            const item = {
                title: novoItem, 
                done: false
            };
            setNovoItem("");
            document.getElementById('input-entrada').focus();
            const response = await createTask(item);
            alert(response.message);
            obterTasks();
        } 
    }

    const completar = async (idx) => {   
        const index = lista.findIndex(item => item.id == idx);
        const item = lista[index];
        item.done = !item.done == 1
        const response = await updateTasks(item);
        // alert(response.message)
        obterTasks();
    }

    const deletar = async (idx) => {
        const item = lista.find(item => item.id == idx);
        const response = await deleteTask(item);
        // alert(response.message)
        obterTasks();
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