import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Layout, Input, List, Icon} from 'antd';

import './Home.css';

import {getHotels} from '../../redux/reducers/hotels';
import {hotelsList} from '../../redux/selectors/';

function Home({hotels, getHotels, history}) {
	const [search, setSearch] = useState('');

	useEffect(() => {
		getHotels({search});
	}, [getHotels, search]);

	return (
		<Layout>
			<Layout.Header>
				<Input
					placeholder="Plaza or New York"
					size="large"
					onChange={e => setSearch(e.target.value)}
					value={search}
				/>
			</Layout.Header>
			<Layout.Content className="Home-Content">
				<List
					itemLayout="vertical"
					size="large"
					dataSource={hotels}
					renderItem={item => (
						<List.Item
							key={item.id}
							extra={<img width={272} alt="logo" src={item.photo} />}
							onClick={() => history.push(`/${item.id}`)}
						>
							<List.Item.Meta title={item.name} description={item.city} />
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

const mapStateToProps = state => ({
	hotels: hotelsList(state)
});

const mapDispatchToProps = {
	getHotels
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
