import React, {Component} from "react";
import {Link} from "react-router-dom";
import {List, Avatar} from "antd";
import TxtTag from "../common/txtTag";

class IndexList extends Component {
	render() {
		let {data, loading, pagination} = this.props;
		return (
			<List
			    itemLayout="horizontal"
			    loading={loading}
			    dataSource={data}
			    pagination={pagination}
			    renderItem={item => (
			      <List.Item  
			      actions={["回复"+item.reply_count, "访问"+item.visit_count]}
			      key={item.id}
			      >
			        <List.Item.Meta
			          avatar={<Avatar src={item.author.avatar_url} />}
			          title={(
			          	<Link to={"/details/"+item.id}> 
				          	{item.title}
				         </Link>
			          )}
			          description={(<div>
			          	<TxtTag data={item} />
			          	<Link to={"/user/"+item.author.loginname}>
			          		{item.author.loginname}
			          	</Link>
			          	发表于: {item.last_reply_at.split('T')[0]}
			          </div>)}
			        />
			      </List.Item>
			    )}
			/>
		);
	}
}

export default IndexList;
