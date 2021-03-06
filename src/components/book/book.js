import React, {Component} from 'react';
import data from "./data";
import PublicCard from "../common/public_card";

class Book extends Component {
	render() {
		return (
			<div>
				{
					data.map((item, index, array) => {
						return <PublicCard data={item} />
					})
				}
			</div>
		)
	}
}

export default Book;
