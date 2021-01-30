import React from 'react'

import classes from './Modal.module.scss';

function Modal({ modal, showModal, setShowModal }) {
	const Component = modal.component;
	if (!showModal)
		return null;
	return (
		<React.Fragment>
			<div className={classes.Modal}>
				<div className={classes.Modal__Header}>
					<div className={classes.Modal__Title}>
						<b>{modal.title}</b>
					</div>
					<button onClick={() => setShowModal(false)} type="button" className={classes.Modal__Close}>x</button>
				</div>
				<div className={classes.Modal__Body}>
					<Component { ...modal.componentData } setShowModal={setShowModal} />
				</div>
			</div>
			<div className={classes.ModalOverlay} onClick={() => setShowModal(false)}></div>
		</React.Fragment>
	)
}

export default Modal;