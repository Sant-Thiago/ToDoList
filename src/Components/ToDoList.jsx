import React, { useEffect, useState } from "react";
import './ToDoList.css';
import FormInput from "./FormInput";
import { createTask, deleteDoneTasks, deleteTask, getAllTasks,  getDoneTasks, getTasks, updateTasks } from "../Utils/Fetch";
import Item from "./Item";
import NoList from "./NoList";
import Cursor from "./Cursor";

function ToDoList() {
    
    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");
    const [type, setType] = useState(["Todos", "Não Concluidas", "Concluidas"]);

    const mudarType = () => {
        const types = [type[1], type[2], type[0]];
        setType(types);
    }

    const criarTask = async (event) => {
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
            obterAllTasks();
        } 
    }

    const completar = async (idx) => {   
        const index = lista.findIndex(item => item.id == idx);
        const item = lista[index];
        item.done = !item.done == 1
        const response = await updateTasks(item);
        // alert(response.message)
        obterAllTasks();
    }

    const deletar = async (idx) => {
        const item = lista.find(item => item.id == idx);
        const response = await deleteTask(item);
        // alert(response.message)
        obterAllTasks();
    }

    const deletarAll = async () => {
        const response = await deleteDoneTasks()
        obterAllTasks();
    }

    const obterAllTasks = async () => {
        const tasks = await getAllTasks();
        setLista(tasks);
    }
    
    const obterDoneTasks = async () => {
        const tasks = await getDoneTasks();
        setLista(tasks);
    }
    
    const obterTasks = async () => {
        const tasks = await getTasks();
        console.log(tasks); 
        setLista(tasks);
    }

    const trocarView = (tipo) => {
        switch (tipo) {
            case "Todos":
                obterAllTasks();
                break;
            case "Não Concluidas":
                obterTasks();
                break;
            case "Concluidas":
                obterDoneTasks();
                break;
            default:
                console.log("[INFO] Não foi possível executar essa operação em (trocarView)" + tipo);
                break;
        }
        mudarType();
    }

    useEffect(() => {
        mudarType();
        obterAllTasks();
    }, []);

    

    return (
        <>
            <h1>Lista de Tarefas</h1>
            <FormInput 
                valor={novoItem} 
                setValor={setNovoItem} 
                adicionaItem={criarTask}
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
                <button onClick={() => trocarView( type[0] )}>{ type[0] }</button>
                <button onClick={() => deletarAll()}>Deletar Concluidos</button>
            </div>
            <Cursor />
        </>
    )
}

export default ToDoList;