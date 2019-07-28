import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Layout, Breadcrumb} from 'antd';

import './Hotel.css';

function Hotel() {
	return (
		<Layout>
			<Layout.Header>
				<Breadcrumb></Breadcrumb>
			</Layout.Header>
			<Layout.Content className="Home-Content"></Layout.Content>
		</Layout>
	);
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Hotel);
