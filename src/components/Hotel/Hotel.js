import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Layout, Breadcrumb, Card, Typography, Icon} from 'antd';

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
			<Layout.Content className="Hotel-Content">
				<Card className="Hotel-Card">
					<Typography.Title>{hotel.name}</Typography.Title>
					<Card.Meta
						avatar={<img alt={hotel.name} src={hotel.photo} />}
						title={hotel.city}
						description={
							<div>
								<Typography.Paragraph>{hotel.description}</Typography.Paragraph>
								<Typography.Paragraph>
									<div className="Hotel-Star">
										<Icon type="star-o" />
										<span>{hotel.stars}</span>
									</div>
								</Typography.Paragraph>
							</div>
						}
					></Card.Meta>
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
