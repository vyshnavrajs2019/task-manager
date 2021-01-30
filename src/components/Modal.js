import React from 'react'

import classes from './Modal.module.scss';

function Modal({ title, component, componentData, showModal, setShowModal }) {
	const Component = component;
	if (!showModal)
		return null;
	return (
		<React.Fragment>
			<div className={classes.Modal}>
				<div className={classes.Modal__Header}>
					<div className={classes.Modal__Title}>
						<b>{title}</b>
					</div>
					<button onClick={() => setShowModal(false)} type="button" className={classes.Modal__Close}>x</button>
				</div>
				<div className={classes.Modal__Body}>
					<Component { ...componentData } setShowModal={setShowModal} />
				</div>
			</div>
			<div className={classes.ModalOverlay} onClick={() => setShowModal(false)}></div>
		</React.Fragment>
	)
}

export default Modal;