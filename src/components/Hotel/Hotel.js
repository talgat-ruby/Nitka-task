import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
	Layout,
	Breadcrumb,
	Card,
	Typography,
	Icon,
	DatePicker,
	message
} from 'antd';
import moment from 'moment';

import {setDates} from '../../redux/reducers/hotels';
import {getHotel} from '../../redux/selectors/';

import './Hotel.css';

const DATE_FORMAT = 'YYYY-MM-DD';

function Hotel({hotel = {}, setDates}) {
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
				<Card
					className="Hotel-Card"
					actions={
						hotel.dates && [
							<Icon
								type="home"
								onClick={() => message.success('Successfuly booked')}
							/>
						]
					}
				>
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
								<Typography.Paragraph>
									<DatePicker.RangePicker
										format={DATE_FORMAT}
										placeholder={['Start Time', 'End Time']}
										value={(hotel.dates || [null, null]).map(
											d => d && moment(d, DATE_FORMAT)
										)}
										onChange={(dates, strDates) =>
											setDates(hotel.id, dates.length !== 0 ? strDates : null)
										}
									/>
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

const mapDispatchToProps = {
	setDates
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Hotel);
