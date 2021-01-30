import React from 'react';
import Tasks from '../components/Tasks';

import classes from './App.module.scss';

function App() {
	return (
		<div className={classes.App}>
			<div className={classes.AppCenter}>
				<h1>Task Manager</h1>
				<div className={classes.App__Search}>
					<input className={classes.App__SearchInput} type="text" value="" placeholder="Search..." />
				</div>
				<div className={classes.App__MenuHandler}>
					<button type="button" className={classes.App__MenuButton}>Create Task</button>
				</div>
				<div className={classes.App__TasksContainer}>
					<Tasks />
					<Tasks />
					<Tasks />
				</div>
			</div>
		</div>
	);
}

export default App;