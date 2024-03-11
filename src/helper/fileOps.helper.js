const fs = require('fs');

const path = require('path');
const tasksFilePath = path.join(__dirname, '..', 'utility', 'taskDetail.json');

function readDataFromFile(){

    try{
    const taskDetails = fs.readFileSync(tasksFilePath);
    // console.log(taskDetails)
    return JSON.parse(taskDetails);
    }
    catch(error){
        console.error('Error reading tasks from file:', error);
        return [];
    }
}
function writeTofile(tasks){
    try{
    const taskData=JSON.stringify(tasks,null,2);
    fs.writeFileSync(tasksFilePath,taskData,'utf8')
}
catch(error){
    throw error;
}

    
}



module.exports = {readDataFromFile,writeTofile}