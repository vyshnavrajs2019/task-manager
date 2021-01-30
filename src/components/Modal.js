import React from 'react'

import classes from './Modal.module.scss';

function Modal({ title, component, componentData }) {
	const Component = component;
	return (
		<React.Fragment>
			<div className={classes.Modal}>
				<div className={classes.Modal__Header}>
					<div className={classes.Modal__Title}>
						<b>{title}</b>
					</div>
					<button type="button" className={classes.Modal__Close}>x</button>
				</div>
				<div className={classes.Modal__Body}>
					<Component { ...componentData } />
				</div>
			</div>
			<div className={classes.ModalOverlay}></div>
		</React.Fragment>
	)
}

export default Modal;