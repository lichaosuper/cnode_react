import React, {Component} from 'react';
import {Card, Avatar} from "antd";
import {Link} from "react-router-dom";
import TxtTag from "../common/txtTag";

export default class TxtDetail extends Component {
	render() {
		let {data} = this.props;
		let title = (
			<div>
				<h1>{data.title}</h1>
				<div
					style={{
						display: "flex",
						alignItem: "center"
					}}
				>
					<TxtTag data={data} />
					<Avatar src={data.author.avatar_url} />
					<Link to={"/user/data.author.loginname"}>
						{data.author.loginname}
					</Link>
					发布于: {data.create_at.split("T")[0]}
				</div>
			</div>
		);
		return(
			<div>
				<Card 
					title={title}
				>
					<div dangerouslySetInnerHTML={{
						__html: data.content
					}}>
					</div>
				</Card>
			</div>
		);
	}
}
