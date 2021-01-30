import React, { useState, useEffect } from 'react';

import Modal from '../components/Modal';
import TaskForm from '../components/TaskForm';
import Tasks from '../components/Tasks';
import classes from './App.module.scss';
import { priorities } from '../configurations/priorities';


function App() {
	const [search, setSearch] = useState('');


	const tasks = priorities.map((priority, index) => <Tasks key={index} priority={priority} />);

	return (
		<div className={classes.App}>
			<div className={classes.AppCenter}>
				<h1>Task Manager</h1>
				<div className={classes.App__Search}>
					<input className={classes.App__SearchInput} type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
				</div>
				<div className={classes.App__MenuHandler}>
					<button type="button" className={classes.App__MenuButton}>Create Task</button>
				</div>
				<div className={classes.App__TasksContainer}>
					{tasks}
				</div>
			</div>
			<Modal component={TaskForm} title='Create Task' componentData={{}} />
		</div>
	);
}

export default App;