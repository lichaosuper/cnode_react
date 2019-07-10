import React, {Component} from "react";
import {Tag} from "antd";
const tag = {
	top: {
		color: "magenta",
		txt: "置顶"
	},
	good: {
		color: "geekblue",
		txt: "精华"
	},
	job: {
		color: "cyan",
		txt: "招聘"
	},
	share: {
		color: "purple",
		txt: "分享"
	},
	ask: {
		color: "green",
		txt: "问答"
	},
	dev: {
		color: "lime",
		txt: "测试"
	}
};

function getTag(data) {
	return (
		data.top?tag.top:
		data.good?tag.good:tag[data.tab]
	);
}

export default class TxtTag extends Component {
	render() {
		var nowTag = getTag(this.props.data);
		if(nowTag) {
			return(
				<Tag color={nowTag.color?nowTag.color:''}>{nowTag.txt}</Tag>
			);
		} else {
			return null;
		}
	}
}