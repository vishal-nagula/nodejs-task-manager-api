const readDataFromFile = require('../helper/fileOps.helper');


function getTasks(req,res){
    let tasks = readDataFromFile.readDataFromFile();
    return res.status(200).json({ status: "success", data: tasks });
}

function getTasksbyId(req,res){
    try{
        const { id } = req.params;
        if(!id){
            return res.status(400).json({ status: "failure", message: "Please provide id" });
        }

        let tasks = readDataFromFile.readDataFromFile();
        let task = tasks.find(obj =>  obj.id === parseInt(id))
        if(!task){
            return res.status(404).json({ status: "failure", message: "Task Not Found" });
        }
        return res.status(200).json({ status: "success", data: task });
    }
    catch(error){
        throw error;
    }  
}

function createTask(req,res){
    try{
        const { title,description,completed } = req.body;
        if(!title || !description||!completed){
            return res.status(400).json({ status: "success", message :"missing parameters" });
        }
        const tasks = readDataFromFile.readDataFromFile();
        const task = {
            id : tasks.length+1,
            title,
            description,
            completed
        }
        tasks.push(task);
        console.log(tasks);
        readDataFromFile.writeTofile(tasks);
        return res.status(200).json({ status: "success", data: tasks });
    
    }
    catch(error){
        throw error;
    }
}
function updatetask(req,res){

    try{
        const {id }=req.params;
        if(!title && !description && !completed){
            return res.status(400).json({ status: "success", message :"missing parameters" });
        }
        const { title,description,completed } = req.body;
        const tasks = readDataFromFile.readDataFromFile();
        let task = tasks.find(obj =>  obj.id === parseInt(id))


        task.title = title || task.title;
        task.description = description || task.description;
        // task.priority = priority || task.priority;
        task.completed = completed || task.completed;
        task.updateAt = new Date().toISOString();

        readDataFromFile.writeTofile(tasks);
        return res.status(201).json({ status: "success", message: "Task Updated Successfully", data: task });
    }

    catch(error){
        throw error;
         
    }
}
function deleteTask(req,res){
    try{
        const {id}=req.params;
        if(!id){
            return res.status(400).json({ status: "Failure", message: "Required Id parameter"});
        }
        const tasks = readDataFromFile.readDataFromFile();
        const filteredTask = tasks.filter(task=>task.id!=id);
        readDataFromFile.writeTofile(filteredTask);
        return res.status(201).json({ status: "success", message: "Task deleted Successfully", data: filteredTask });
    }
    catch(error){
        throw error;
    }

}


module.exports = {getTasks,getTasksbyId,createTask,updatetask,deleteTask}