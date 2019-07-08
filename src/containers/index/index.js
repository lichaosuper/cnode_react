import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import Index from "../../component/index/index.js";
const APIURL = "https://cnodejs.org/api/v1";

class IndexContainer extends Component {
	constructor(props) {
		super(props);
		// 获取左侧边栏菜单的分类
		let tab = this.props.match.params.id;
		this.state = {
			tab: tab,
			page: 1,
			currentPage: 1,
			data: []
		};
		/*
		 * 在组件初次加载安装的时候就渲染了一次空数据的组件
		 * 然后等到异步加载完数据之后，再次渲染一次有数据的组件
		 * 这里经过了两次渲染，有没有优化的空间
		 * 初始化组件时就加载数据
		 */
		this.getData(tab, 1);
	}
	getData(tab, page) {
		this.props.dispatch(dispatch=> {
			// 显示加载中
			dispatch({
				data: {
					data: []
				},
				type: 'LOADING_LIST'
			});
			// 向后台发起网络请求
			axios.get(APIURL + '/topics', {
			    params: {
			        tab : tab,
			        page : page,
			        limit : 20,
			        mdrender : true
			    }
			})
			.then(function (response) {
			    // 加载成功
				dispatch({
					data: {
						data: response.data.data
					},
					type: 'LOADING_LIST_SUCCESS'
				});
			})
			.catch(function (error) {
			    console.log(error);
			    // 加载失败
				dispatch({
					data: {
						data: []
					},
					type: 'LOADING_LIST_FAIL'
				});
			});
		})
	}
	// react生命周期函数，判断是否需要更新组件
	shouldComponentUpdate(nextProps, nextState) {
		// 获取左侧边栏菜单的分类
		let tab = nextProps.match.params.id;
		if(tab !== this.state.tab) {
			/* 
			 * 每次分类不同，就将页码设置为第一页
			 * 等到调用this.getData()的时候自然会重新渲染组件
			 */
			this.setState({
				currentPage: 1,
				tab: tab
			})
			// 去后台获取对应分类的数据
			this.getData(tab, 1);
			// 阻止此次组件的更新
			return false;
		}
		return true;
	}
	// 分页改变后的业务逻辑
	onChange(page, pageSize) {
		// 更新页码
		this.setState({
			currentPage: page
		});
		// 去加载对应页码的数据
		this.getData(this.state.tab, page);
	}
	render() {
		let {data, loading} = this.props.data;
		// 配置分页
		let pagination = {
			current: this.state.currentPage,
			total: 150,
			pageSize: 20,
			onChange: this.onChange.bind(this)
		};
		return (
			<Index data={data} loading={loading} pagination={pagination} />
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.indexList
	}
}

export default connect(mapStateToProps)(IndexContainer)
