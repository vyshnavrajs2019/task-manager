import React from 'react';
import Task from './Task';

import classes from './Tasks.module.scss';

function Tasks() {
	return (
		<div className={classes.Tasks}>
			<Task />
			<Task />
			<Task />
			<Task />
		</div>
	)
}

export default Tasks;