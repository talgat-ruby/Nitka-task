import React from 'react';
import {Layout, Icon} from 'antd';
import {Link} from 'react-router-dom';

import './NoMatch.css';

function NoMatch() {
	return (
		<Layout className="NoMatch">
			<Layout.Content className="NoMatch-Content">
				<Icon type="close-circle" />
				<span>
					Page not found. Go to back <Link to="/">Home</Link>
				</span>
			</Layout.Content>
		</Layout>
	);
}

export default NoMatch;
