import React, { useState, useEffect } from 'react';

import { getUsers } from '../configurations/api';
import Task from './Task';
import classes from './Tasks.module.scss';

function Tasks({ tasks, priority }) {
	const [owners, setOwners] = useState([]);
	
	useEffect(() => {
		getUsers()
			.then(response => response.json())
			.then(responseData => setOwners(responseData.users))
			.catch(err => { alert('ERROR OCCURED'); console.log(err); })
	}, []);

	const taskList = tasks
						.filter(task => +task.priority === priority.value)
						.map(task => <Task key={task.taskid} task={task} owners={owners} />)
	return (
		<div className={classes.Tasks}>
			<h3>{priority.name}</h3>
			{taskList}
		</div>
	)
}

export default Tasks;