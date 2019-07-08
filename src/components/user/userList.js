import React, {Component} from "react";
import {Card, List, Avatar} from "antd";
import {Link} from "react-router-dom";

export default class UserList extends Component {
	render() {
		let {topic,data} = this.props;
		return (
			<Card
				title={topic}
			>
				<List
			        dataSource={data}
			        renderItem={item => (
			          <List.Item actions={["回复"]} key={item.id}>
			              <List.Item.Meta
			                avatar={
			                  <Avatar src={item.author.avatar_url} />
			                }
			                title={item.author.loginname}
			                description={(
			                	<Link to={"/details"}>
			                		{item.title}
			                	</Link>
			                )}
			              />
			          </List.Item>
			        )}
			    />
			</Card>
		);
	}
}
