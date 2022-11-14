const result = {
	title2: [{
		icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
		menuName: "测试模块2",
		children: [{
			icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
			menuName: "测试模块",
			url: ""
		}, {
			icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
			menuName: "diy模块",
			type: "diy",
			url: ""
		}],
		url: ""
	}],
	titleDiy: [{
		icon: "https://t11.baidu.com/it/u=2446819114,1498509809&fm=58",
		menuName: "测试模块",
		type: "diy",
		url: ""
	}],


	tabbarData: [{
		isactive: 1,
		path: "/pages/index/index",
		icon: '../../static/tab/tab0.png',
		selectedIcon: '../../static/tab/itab0.png',
		iconWidth: '45px',
		iconHeight: '45px'
	}, {
		path: "/pages/reportForm/index",
		icon: '../../static/tab/tab1.png',
		selectedIcon: '../../static/tab/itab1.png',
		iconWidth: '45px',
		iconHeight: '45px'
	}, {
		path: "/pages/addressList/index",
		icon: '../../static/tab/tab2.png',
		selectedIcon: '../../static/tab/itab2.png',
		iconWidth: '45px',
		iconHeight: '45px'
	}, {
		path: "/pages/person/index",
		icon: '../../static/tab/tab3.png',
		selectedIcon: '../../static/tab/itab3.png',
		iconWidth: '45px',
		iconHeight: '45px'
	}],

	tabData: [{
		id: 0,
		title: "生产监控"
	}, {
		id: 1,
		title: "装置负荷"
	}, {
		id: 2,
		title: "库存分析"
	}, {
		id: 3,
		title: "发货分析"
	}, {
		id: 4,
		title: "原材料"
	}, {
		id: 5,
		title: "生产计划"
	}],
}

export default result;
