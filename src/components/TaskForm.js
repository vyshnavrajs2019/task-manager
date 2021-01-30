import React from 'react';

import classes from './TaskForm.module.scss';

function TaskForm({ actionType }) {
	let btnLabel = 'Create';
	if (actionType === 'EDIT') {
		btnLabel = 'Update';
	}
	return (
		<form className={classes.TaskForm}>
			<div className={classes.TaskForm__Group}>
				<input type="text" value="" className={classes.TaskForm__Input} placeholder='Task' />
			</div>
			<div className={classes.TaskForm__Group}>
				<select className={classes.TaskForm__Input}>
					<option selected disabled>Owner</option>
					<option value="HIGH">High</option>
					<option value="MEDIUM">Medium</option>
					<option value="LOW">Low</option>
				</select>
			</div>
			<div className={classes.TaskForm__Group}>
				<select className={classes.TaskForm__Input}>
					<option selected disabled>Priority</option>
					<option value="HIGH">High</option>
					<option value="MEDIUM">Medium</option>
					<option value="LOW">Low</option>
				</select>
			</div>
			<div className={classes.TaskForm__Group}>
				<button type="submit" className={classes.TaskForm__SubmitButton}>{btnLabel} Task</button>
			</div>
		</form>
	)
}

export default TaskForm;