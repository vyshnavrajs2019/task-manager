import React from 'react';

import classes from './Loader.module.scss';

function Loader({ showLoader }) {
	if (!showLoader)
		return null;
	return (
		<div className={classes.Loader}>
			<span>Loading...</span>
		</div>
	)
}

export default Loader;