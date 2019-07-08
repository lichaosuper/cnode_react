import React, {Component} from "react";
import {Card, List, Avatar} from "antd";

export default class ReplyList extends Component {
	render() {
		let {data, loading} = this.props;
		return (
			<Card title={data.reply_count+"回复"}>
		    	<List
			        itemLayout="horizontal"
			        dataSource={data.replies}
			        loading={loading}
			        renderItem={item => (
			          <List.Item actions={["点赞"+item.ups.length]} key={item.id}>
			              <List.Item.Meta
			                avatar={
			                  <Avatar src={item.author.avatar_url}/>
			                }
			                title={item.author.loginname}
			                description={(
			                	<div
					              	dangerouslySetInnerHTML={{
					              		__html: item.content
					              	}}
					            >
			                	</div>
			                )}
			              />
			          </List.Item>
			        )}
		      	/>  	
		    </Card>
		);
	}
}
