import React, {Component} from 'react';
import {Avatar, Row, Col} from "antd";
import UserList from "./userList";

class User extends Component {
	render() {
		let {data} = this.props;
		return (
			<div>
				<div  className="userWrap">
					<Avatar src={data.avatar_url} className="userAvatar" />
					<Row className="userInfo">
						<Col md={8}>
							用户名: <span>{data.loginname}</span>
						</Col>
						<Col md={8}>
							积分: <span>{data.score}</span>
						</Col>
						<Col md={8}>
							注册时间: <span>{data.create_at}</span>
						</Col>
					</Row>
				</div>
				<UserList topic="最近创建的话题" data={data.recent_topics} />
				<UserList topic="最近回复的话题" data={data.recent_replies} />
			</div>
		)
	}
}

export default User;