import React, {Component} from "react";
import {Card} from "antd";

export default class PubliCard extends Component {
	render() {
		let {data} = this.props;
		return (
			<Card
			    title={data.title}
			    type="inner"
			>
			    <div dangerouslySetInnerHTML={{
			    	__html: data.content
			    }}>
			    </div>
			</Card>
		);
	}
}
