import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

class SingleBook extends React.Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <Card>
          <CardImg top width='100%' src={this.props.books.img} alt='Generic placeholder image' />
          <CardBody>
            <CardTitle>{this.props.books.title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleBook;
