import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import User from "../../component/user/user.js";
const APIURL = "https://cnodejs.org/api/v1";

class UserContainer extends Component {
	constructor(props) {
		super(props);
		let id = this.props.match.params.id;
		this.state = {
			loading: true,
			user: {}
		};
		// 初始化组件时就加载数据 
		this.getData(id);
	}
	getData(id) {
		this.props.dispatch(dispatch=> {
			// 显示加载中
			dispatch({
				data: {
					data: {}
				},
				type: 'LOADING_USER'
			});
			axios.get(APIURL + '/user/' + id, {
			})
			.then(function (response) {
			    // 加载成功
				dispatch({
					data: {
						data: response.data.data
					},
					type: 'LOADING_USER_SUCCESS'
				});
			})
			.catch(function (error) {
			    console.log(error);
			    // 加载失败
				dispatch({
					data: {
						data: {}
					},
					type: 'LOADING_USER_FAIL'
				});
			});
		})
	}
	// react生命周期函数，判断是否需要更新组件
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.id !== this.props.id) {
			this.getData(nextProps.id);
			// 阻止此次组件的更新
			return false;
		}
		return true;
	}
	render() {
		let {data, loading} = this.props.data;
		// 条件渲染
		if(JSON.stringify(data) === "{}") {
			return null;
		}
		return (
			<div>
				<User data={data} loading={loading} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state.user
	}
}

export default connect(mapStateToProps)(UserContainer)
