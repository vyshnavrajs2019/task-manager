import React, { useState, useEffect } from 'react';

import { priorities } from '../configurations/priorities';
import { createTask, getUsers, updateTask } from '../configurations/api';
import classes from './TaskForm.module.scss';

export const EDIT = 'EDIT';

const OWNER_NOT_DEFINED = '0';
const PRIORITY_NOT_DEFINED = '0';
const DUE_DATE_TIME_NOT_DEFINED = '';

function TaskForm({ actionType, instanceData={}, setShowModal }) {
	let btnLabel = 'Create';
	if (actionType === EDIT) {
		btnLabel = 'Update';
	}
	const [taskData, setTaskData] = useState({
		title: instanceData?.message || '',
		owner: instanceData?.assigned_to || OWNER_NOT_DEFINED,
		priority: instanceData?.priority || PRIORITY_NOT_DEFINED,
		dueDate: instanceData?.due_date?.split(' ')[0] || DUE_DATE_TIME_NOT_DEFINED,
		dueTime: instanceData?.due_date?.split(' ')[1].split(':').slice(0, 2).join(':') || DUE_DATE_TIME_NOT_DEFINED
	});
	
	const [users, setUsers] = useState([]);
	useEffect(() => {
		getUsers()
			.then(response => response.json())
			.then(responseData => { setUsers(responseData.users) })
			.catch(err => { alert('ERROR OCCURED'); console.log(err) })
	}, []);
	
	const handleInputChange = (e) => {
		const v = e.target.value;
		const n = e.target.getAttribute('name');
		setTaskData({ ...taskData, [n]: v });
	}
	const handleSelectChange = (e) => {
		const v = +e.target.value;
		const n = e.target.getAttribute('name');
		setTaskData({ ...taskData, [n]: v });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { message: taskData.title }
		if (taskData.priority !== PRIORITY_NOT_DEFINED)
			data.priority = taskData.priority;
		if (taskData.owner !== OWNER_NOT_DEFINED)
			data.assigned_to = taskData.owner;
		if (
			taskData.dueDate !== DUE_DATE_TIME_NOT_DEFINED && 
			taskData.dueTime !== DUE_DATE_TIME_NOT_DEFINED
			)
			data.due_date = `${taskData.dueDate} ${taskData.dueTime}:00`;		
		if (actionType === EDIT) {
			data.taskid = instanceData.taskid;
		}
		const handler = actionType === EDIT ? updateTask : createTask;
		handler(data);
		setShowModal(false);
	}

	const priorityOptions = priorities.map(p => <option key={p.value} value={p.value}>{p.name}</option>);
	actionType !== EDIT && priorityOptions.unshift(<option defaultValue key='0' disabled value='0'>Priority</option>);

	const userOptions = users.map(user => <option key={user.id} value={user.id}>{user.name}</option>);
	actionType !== EDIT && userOptions.unshift(<option defaultValue key='0' disabled value='0'>Owner</option>);

	return (
		<form className={classes.TaskForm} onSubmit={handleSubmit}>
			<div className={classes.TaskForm__Group}>
				<input type="text" value={taskData.title} className={classes.TaskForm__Input} placeholder='Task' name="title" onChange={handleInputChange} />
			</div>
			<div className={classes.TaskForm__Group}>
				<select name="priority" className={classes.TaskForm__Input} onChange={handleSelectChange} value={taskData.priority}>
					{priorityOptions}
				</select>
			</div>
			<div className={classes.TaskForm__Group}>
				<select name="owner" className={classes.TaskForm__Input} onChange={handleSelectChange} value={taskData.owner}>
					{userOptions}
				</select>
			</div>
			<div className={classes.TaskForm__Group}>
				<input type="date" name="dueDate" value={taskData.dueDate} onChange={handleInputChange} className={classes.TaskForm__DateTimeInput} />
				<input type="time" name="dueTime" value={taskData.dueTime} onChange={handleInputChange} className={classes.TaskForm__DateTimeInput} />
			</div>
			<div className={classes.TaskForm__Group}>
				<button type="submit" className={classes.TaskForm__SubmitButton}>{btnLabel} Task</button>
			</div>
		</form>
	)
}

export default TaskForm;