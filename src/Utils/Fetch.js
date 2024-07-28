export const getTasks = async () => {
    return await fetch("http://127.0.0.1:5000/get_all_tasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return [];
        }
    }).catch(error => {
        console.log("[ERRO] Não foi possível realizar a operação (getTask) \n\nerror:: "+ error);
    });
}

export const deleteTask = async (data) => {
    return await fetch(`http://127.0.0.1:5000/delete_task`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log("[ERRO] Não foi possível realizar a operação (deleteTask) \n\nerror:: "+ error);
    });
}

export const updateTasks = async (data) => {
    return await fetch("http://127.0.0.1:5000/update_task", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log("[ERRO] Não foi possível realizar a operação (updateTask) \n\nerror:: "+ error);
    });
}

export const createTask = async (data) => {
    return await fetch("http://127.0.0.1:5000/create_task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(error => {
        console.log("[ERRO] Não foi possível realizar a operação (createTask) \n\nerror:: "+ error);
    });
}