import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import style from './ItemList.module.css';
import goldMedal from '../../assets/img/medals/1st.svg';
import silverMedal from '../../assets/img/medals/2nd.svg';
import bronzeMedal from '../../assets/img/medals/3rd.svg';

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const styles = theme => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid white',
		borderBottomLeftRadius: '5px',
		borderBottomRightRadius: '5px'
	},
	avatar: {
		margin: 10,
		color: '#fff',
		boxShadow: '0 0 30px rgba(0,0,0,0.5)',
		border: 'none !important'
	},
	icon: {
		width: '50px'
	},
	pageview: {
		marginTop: 0,
		fontWeight: 'bold',
		color: '#1B374A'
	},
	itemnum: {
		width: '25px',
		color: 'rgba(0, 0, 0, 0.54)',
		fontSize: '12px'
	},
});

function ItemList(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<List className={style.ItemList} component="nav">
				{
					props.data.map( (author, index) => (

						<ListItem key={index} button>

							<p className={classes.itemnum}>{ props.allData.currentPage === 1 ? index + 1 : index + 1 + (props.allData.currentPage-1)*10 }</p>

							<Avatar className={classes.avatar} style={{ backgroundColor: getRandomColor() }}>{author.name && author.name[0]}</Avatar>
							<ListItemText className={style.ItemName} primary={author.name} secondary={`${author.count_pub} публ.`}/>

							{ author.name === props.prizePlace[0].name ?
								<img alt="gold" src={goldMedal} /> : null }
							{ author.name === props.prizePlace[1].name ?
								<img alt="silver" src={silverMedal} /> : null }
							{ author.name === props.prizePlace[2].name ?
								<img alt="bronze" src={bronzeMedal} /> : null }

							<p className={classes.pageview}>{author.pageviews}</p>
						</ListItem>
					) )
				}
			</List>
		</div>
	);
}

ItemList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemList);