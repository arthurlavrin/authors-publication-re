import React, {Component} from 'react';
import classes from './SearchApp.module.css';
import ItemList from '../../components/ItemList/ItemList';
import Search from '../../components/Search/Search';

import data from '../../data.json';

class SearchApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: data,
			currentPage: 1,
			itemsPerPage: 10,
			searchString: ''
		};
	}

	handleForwardClick = () => {
		this.setState({
			currentPage: this.state.currentPage + 1
		})
	}

	handleBackwardClick = () => {
		this.setState({
			currentPage: this.state.currentPage - 1
		})
	}

	updateData = value => {
		this.setState({
			searchString: value
		})
	}

	render() {
		const { data, currentPage, itemsPerPage } = this.state;

		data.sort(function(a, b){
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;
		})

		data.sort(function(a, b){
			return b.pageviews - a.pageviews
		})

		const prizePlace = [data[0], data[1], data[2]]

		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		let currentItem = data.slice(indexOfFirstItem, indexOfLastItem);

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
			pageNumbers.push(`${i*10 - 10 + 1}-${i*10}`);
		}
		pageNumbers[pageNumbers.length - 1] = `${(pageNumbers.length - 1) * 10 + 1}-${data.length}`

		let searchString = this.state.searchString.trim().toLowerCase();
		if (searchString.length > 0) {
			currentItem = data.filter(function (i) {
				return i.name.toLowerCase().match(searchString);
			});
		}

		return (
			<div className={classes.SearchApp}>

				<Search updateData={this.updateData} />

				<div>
					<ItemList
						data={currentItem}
						prizePlace={prizePlace}
						itemsCount={pageNumbers}
						allData={this.state}
					/>
					{
						searchString.length > 0
						? null
						: <div
							className={classes.pagControls}
						>
							{ currentPage > 1 ? <span onClick={this.handleBackwardClick}> &lt; </span> : null }

							{pageNumbers[currentPage - 1]}

							{ currentPage !== pageNumbers.length ? <span onClick={this.handleForwardClick}> &gt; </span> : null }
						</div>
					}
				</div>
			</div>
		)
	}
}

export default SearchApp;