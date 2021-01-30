import React from 'react';
import { deleteTask } from '../configurations/api';

import classes from './Task.module.scss';

function Task({ task, owners, openEditTaskModal, loadTasks, setShowLoader }) {
	let taskOwner = <span style={{fontSize: 12, color: 'grey'}}>No task owner</span>;
	if (task.assigned_to) {
		const owner = owners.find(owner => owner.id === task.assigned_to);
		taskOwner = (
			<React.Fragment>
				<div className={classes.Task__OwnerPicture} style={{ backgroundImage: `url(${owner?.picture || ''})` }}>
				</div>
				<span>{task.assigned_name}</span>
			</React.Fragment>
		)
	}

	const deleteTaskAndReload = () => {
		setShowLoader(true);
		deleteTask({taskid: task.id})
			.then(loadTasks)
			.catch(err => { setShowLoader(false); alert('ERROR OCCURED'); console.log(err) })
	}

	return (
		<div className={classes.Task}>
			<div className={classes.Task__Title}>
				<span>{task.message}</span>
			</div>
			<div className={classes.Task__Owner}>
				{taskOwner}
			</div>
			<div className={classes.Task__Date}>
				<span>Due: {task.due_date}</span>
			</div>
			<div className={classes.Task__Date}>
				<span>Created: {task.created_on}</span>
			</div>
			<div className={classes.Task__Footer}>
				<span onClick={() => openEditTaskModal(task)}>EDIT</span>
				<span onClick={deleteTaskAndReload}>DELETE</span>
			</div>
		</div>
	)
}

export default Task;