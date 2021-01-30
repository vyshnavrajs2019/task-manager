import React, { useState, useEffect } from 'react';

import Modal from '../components/Modal';
import TaskForm from '../components/TaskForm';
import Tasks from '../components/Tasks';
import classes from './App.module.scss';
import { priorities } from '../configurations/priorities';
import { getTasks } from '../configurations/api';


function App() {
	const [showModal, setShowModal] = useState(false);
	const [search, setSearch] = useState('');
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTasks()
			.then(response => response.json())
			.then(data => setTasks(data.tasks))
			.catch(err => { alert('ERROR OCCURED'); console.log(err) })
	}, []);

	const taskList = priorities.map((priority, index) => <Tasks key={index} search={search} priority={priority} tasks={tasks} />);

	return (
		<div className={classes.App}>
			<div className={classes.AppCenter}>
				<h1>Task Manager</h1>
				<div className={classes.App__Search}>
					<input className={classes.App__SearchInput} type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
				</div>
				<div className={classes.App__MenuHandler}>
					<button onClick={() => setShowModal(true)} type="button" className={classes.App__MenuButton}>Create Task</button>
				</div>
				<div className={classes.App__TasksContainer}>
					{taskList}
				</div>
			</div>
			<Modal showModal={showModal} setShowModal={setShowModal} component={TaskForm} title='Create Task' componentData={{}} />
		</div>
	);
}

export default App;