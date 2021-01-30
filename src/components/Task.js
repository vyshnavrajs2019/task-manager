import React from 'react';

import classes from './Task.module.scss';

function Task({ task, owners }) {
	let taskOwner = null;
	if (task.assigned_to) {
		const owner = owners.find(owner => owner.id === task.assigned_to);
		taskOwner = (
			<div className={classes.Task__Owner}>
				<div className={classes.Task__OwnerPicture} style={{ backgroundImage: `url(${owner?.picture || ''})` }}>
				</div>
				<span>{task.assigned_name}</span>
			</div>
		)
	}

	return (
		<div className={classes.Task}>
			<div className={classes.Task__Title}>
				<span>{task.message}</span>
			</div>
			{taskOwner}
			<div className={classes.Task__Date}>
				<span>23rd August, 2021</span>
			</div>
		</div>
	)
}

export default Task;