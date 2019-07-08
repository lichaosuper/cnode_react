import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import ReplyList from "../../components/details/replyList.js";
import TxtDetails from "../../components/details/txtDetails.js";
const APIURL = "https://cnodejs.org/api/v1";

class DetailsContainer extends Component {
	constructor(props) {
		super(props);
		// 获取跳转到details页面需要的参数
		let id = this.props.match.params.id;
		this.state = {
			loading: true,
			txtDetails: {},
			replyList: []
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
				type: 'LOADING_TOPICDETAILS'
			});
			axios.get(APIURL + '/topic/' + id, {
			})
			.then(function (response) {
			    // 加载成功
				dispatch({
					data: {
						data: response.data.data
					},
					type: 'LOADING_TOPICDETAILS_SUCCESS'
				});
			})
			.catch(function (error) {
			    console.log(error);
			    // 加载失败
				dispatch({
					data: {
						data: {}
					},
					type: 'LOADING_TOPICDETAILS_FAIL'
				});
			});
		})
	}
	// react生命周期函数，判断是否需要更新组件
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.id !== this.props.id) {
			console.log("阻止更新啦")
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
				<TxtDetails data={data.data} />
				<ReplyList data={data.data} loading={loading} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state.topicDetails
	}
}

export default connect(mapStateToProps)(DetailsContainer)
