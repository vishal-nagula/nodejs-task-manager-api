const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskmanager.controller');


router.get('/tasks',taskController.getTasks);
router.get('/tasks/:id',taskController.getTasksbyId);
router.post('/tasks',taskController.createTask);
router.delete('/tasks/:id',taskController.deleteTask);



module.exports = router;