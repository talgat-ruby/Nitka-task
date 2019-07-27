import React from 'react';
import {Layout, Input, List, Icon} from 'antd';

import data from '../../data.json';

import './Home.css';

function Home() {
	return (
		<Layout>
			<Layout.Header>
				<Input.Search
					placeholder="Plaza or New York"
					size="large"
					onSearch={value => console.log(value)}
				/>
			</Layout.Header>
			<Layout.Content className="Home-Content">
				<List
					itemLayout="vertical"
					size="large"
					dataSource={data}
					renderItem={item => (
						<List.Item
							key={item.id}
							extra={<img width={272} alt="logo" src={item.photo} />}
						>
							<List.Item.Meta
								title={<a href={item.href}>{item.name}</a>}
								description={item.city}
							/>
							<div className="Home-Star">
								<Icon type="star-o" />
								<span>{item.stars}</span>
							</div>
						</List.Item>
					)}
				/>
			</Layout.Content>
		</Layout>
	);
}

export default Home;
