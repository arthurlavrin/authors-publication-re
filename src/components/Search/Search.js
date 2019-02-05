import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
	root: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		borderRadius: 0,
		height: '60px',
		backgroundColor: '#E8EFF4',
		border: '1px solid white',
		borderTopLeftRadius: '5px',
		borderTopRightRadius: '5px'
	},
	input: {
		marginLeft: 8,
		flex: 1,
		fontWeight: 'bold'
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		width: 1,
		height: 28,
		margin: 4,
	},
};

function Search(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root} elevation={1}>
			<IconButton className={classes.iconButton} aria-label="Search">
				<SearchIcon />
			</IconButton>
			<InputBase className={classes.input} placeholder="Поиск авторов по имени" onChange={(e) => {
				props.updateData(e.target.value)
			}}/>
		</Paper>
	);
}

Search.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
