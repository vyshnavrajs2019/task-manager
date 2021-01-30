import React, { useState, useEffect } from 'react';

import { getUsers, updateTask } from '../configurations/api';
import Task from './Task';
import classes from './Tasks.module.scss';

function Tasks({ tasks, priority, search, openEditTaskModal, loadTasks, setShowLoader, dragTask, setDragTask }) {
	const [owners, setOwners] = useState([]);
	
	useEffect(() => {
		getUsers()
			.then(response => response.json())
			.then(responseData => setOwners(responseData.users))
			.catch(err => { alert('ERROR OCCURED'); console.log(err); })
	}, []);

	const handleDragDrop = () => {
		setShowLoader(true);
		updateTask({ ...dragTask, taskid: dragTask.id, priority: priority.value })
			.then(loadTasks)
			.catch(err => { setShowLoader(false); alert('ERROR OCCURED'); console.log(err) });
	}

	const taskList = tasks
						.filter(task => +task.priority === priority.value && task.message.toLowerCase().includes(search.toLowerCase()))
						.map(task => <Task key={task.id} task={task} owners={owners} openEditTaskModal={openEditTaskModal} loadTasks={loadTasks} setShowLoader={setShowLoader} dragTask={dragTask} setDragTask={setDragTask} />)
	return (
		<div className={classes.Tasks} onDrop={handleDragDrop} onDragOver={e => e.preventDefault()}>
			<h3>{priority.name}</h3>
			{taskList}
		</div>
	)
}

export default Tasks;