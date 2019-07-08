import React, {Component} from 'react';
import {Row, Col} from "antd";
import IndexMenu from "./indexMenu";
import IndexList from "./list.js";
class Index extends Component {
	render() {
		let {data, loading, pagination} = this.props;
		return (
			<Row className="wrap">
				<Col md={6} xs={0} className="indexSider">
					<IndexMenu id="indexMenu" mode="vertical" />
				</Col>
				<Col md={0} xs={24}>
					<IndexMenu id="indexXsMenu" mode="horizontal" />
				</Col>
				<Col 
					md={18} 
					xs={24}
					className="indexList"
				>
				<IndexList data={data} loading={loading} pagination={pagination} />
				</Col>
			</Row>
		);
	}
}

export default Index;
