import React, { useState, useEffect } from 'react';

import Modal from '../components/Modal';
import TaskForm from '../components/TaskForm';
import Tasks from '../components/Tasks';
import classes from './App.module.scss';
import { priorities } from '../configurations/priorities';
import { getTasks } from '../configurations/api';
import { ADD, EDIT } from '../components/TaskForm';
import Loader from '../components/Loader';

function App() {
	const [modal, setModal] = useState({});
	const [showModal, setShowModal] = useState(false);
	const [search, setSearch] = useState('');
	const [tasks, setTasks] = useState([]);
	const [showLoader, setShowLoader] = useState(false);

	const loadTasks = () => {
		setShowLoader(true);
		getTasks()
			.then(response => response.json())
			.then(data => { setShowLoader(false); setTasks(data.tasks); })
			.catch(err => { setShowLoader(false); alert('ERROR OCCURED'); console.log(err) })
	}

	useEffect(loadTasks, []);

	const openCreateTaskModal = () => {
		setModal({ component: TaskForm, componentData: { actionType: ADD, loadTasks, setShowLoader }, title: 'Create Task' });
		setShowModal(true);
	}

	const openEditTaskModal = (instanceData) => {
		setModal({ component: TaskForm, componentData: { actionType: EDIT, instanceData, loadTasks, setShowLoader }, title: 'Update Task' });
		setShowModal(true);
	}

	const taskList = priorities.map((priority, index) => <Tasks key={index} search={search} priority={priority} tasks={tasks} openEditTaskModal={openEditTaskModal} loadTasks={loadTasks} setShowLoader={setShowLoader} />);

	return (
		<div className={classes.App}>
			<div className={classes.AppCenter}>
				<h1>Task Manager</h1>
				<div className={classes.App__Search}>
					<input className={classes.App__SearchInput} type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
				</div>
				<div className={classes.App__MenuHandler}>
					<button onClick={openCreateTaskModal} type="button" className={classes.App__MenuButton}>Create Task</button>
				</div>
				<div className={classes.App__TasksContainer}>
					{taskList}
				</div>
			</div>
			<Modal showModal={showModal} setShowModal={setShowModal} modal={modal} setModal={setModal} />
			<Loader showLoader={showLoader} />
		</div>
	);
}

export default App;