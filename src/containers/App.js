import React from 'react';
import Tasks from '../components/Tasks';

import classes from './App.module.scss';

const HIGH_PRIORITY = 'HIGH';
const MEDIUM_PRIORITY = 'MEDIUM';
const LOW_PRIORITY = 'LOW';

const priorities= [HIGH_PRIORITY, MEDIUM_PRIORITY, LOW_PRIORITY];

function App() {
	const tasks = priorities.map((priority, index) => <Tasks key={index} priority={priority} />);

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
					{tasks}
				</div>
			</div>
		</div>
	);
}

export default App;