import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Block extends Component {
	render() {
		return (
			<Card>
				<CardImg
					top
					width="100%"
					src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
					alt="Card image cap"
				/>
				<CardBody>
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<CardSubtitle>Posted by user@mail.com</CardSubtitle>
				</CardBody>
			</Card>
		);
	}
}

class Home extends Component {
	render() {
		return (
			<div>
				<Button color="dark" className="mb-5" block>
					CREATE POST
				</Button>
				<div class="row">
					<div class="col-md-4 mb-3">
						<addNewButton />
						<Block />
					</div>
					<div class="col-md-4 mb-3">
						<Block />
					</div>
					<div class="col-md-4 mb-3">
						<Block />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
