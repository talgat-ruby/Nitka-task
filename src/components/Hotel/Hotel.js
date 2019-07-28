import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Layout, Breadcrumb, Card} from 'antd';

import {getHotel} from '../../redux/selectors/';

import './Hotel.css';

function Hotel({hotel = {}}) {
	return (
		<Layout>
			<Layout.Header className="Hotel-Header">
				<Breadcrumb className="Hotel-Breadcrumb">
					<Breadcrumb.Item key="home">
						<Link to="/" className="Hotel-Home">
							Home
						</Link>
					</Breadcrumb.Item>
				</Breadcrumb>
			</Layout.Header>
			<Layout.Content>
				<Card
					style={{width: 240}}
					cover={<img alt={hotel.name} src={hotel.photo} />}
				>
					<Card.Meta title={hotel.name} description={hotel.description} />
				</Card>
			</Layout.Content>
		</Layout>
	);
}

const mapStateToProps = (state, ownProps) => ({
	hotel: getHotel(state, ownProps)
});

export default connect(
	mapStateToProps,
	null
)(Hotel);
