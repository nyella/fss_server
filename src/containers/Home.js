import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { invokeApig } from '../libs/awsLib';
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }
    this.setState({ isLoading: false });
  }

  handleNoteClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute("href"));
  }

    renderLander() {
    return (
      <div className="lander">
        <h1>Federal Soft Systems</h1>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
        </div>
      </div>
    );
  }

  renderWishes() {
    return (
      <h1>Welcome to FSS Dashboard</h1>
    );
  }

  render() {
    return (
      <div className="Home">
          {this.props.isAuthenticated ? this.renderWishes():this.renderLander()}
      </div>
    );
  }
}
