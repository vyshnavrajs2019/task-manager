import React from 'react';

import classes from './Task.module.scss';

function Task() {
	return (
		<div className={classes.Task}>
			<div className={classes.Task__Title}>
				<span>Title goes here!!</span>
			</div>
			<div className={classes.Task__Owner}>
				<div className={classes.Task__OwnerPicture} style={{backgroundImage: `url(https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg)`}}>
					
				</div>
				<span>Owner name</span>
			</div>
			<div className={classes.Task__Date}>
				<span>23rd August, 2021</span>
			</div>
		</div>
	)
}

export default Task;