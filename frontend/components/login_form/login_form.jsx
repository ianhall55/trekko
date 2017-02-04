import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Header from '../header/header';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    // this._handleDemo = this._handleDemo.bind(this);
    // this.guestSubmit = this.guestSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      if (this.props.pendingTrip.trip) {
        let trip = this.props.pendingTrip.trip;
        trip.user_id = this.props.currentUser.id;
        this.props.createTrip({trip});
      } else {
        hashHistory.push("/");
      }
    }
  }

  update(fieldName){
    return e => { this.setState({[fieldName]: e.currentTarget.value }); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  renderErrors() {
    const errorLines = [];
    this.props.errors.forEach( (error, i) => (
      errorLines.push(
        <li className="error" key={i}>
          {error}
        </li>
      )
    ));

    return(errorLines);

  }

  render() {

    return(
      <div className="login-form-container">
        <Header noOptions={true} />
        <form onSubmit={this.handleSubmit} className="session-form-box">
					<br/>
					<div className="session-form">
            <ul className="session-errors">
              { this.renderErrors() }
            </ul>
						<br />

							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input"
                placeholder="Username" />


						<br />

							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input"
                placeholder="Password" />


						<br />
						<input className="login-submit" type="submit" value="LOGIN" />
          </div>
          </form>
          <br />
          <div className="session-footer-nav">
            <button className="oauth"><a href="/auth/facebook">Log in with Facebook</a></button>
            <label className="form-footer">
              {"Don't have an account?"} { <Link to="/signup">Sign up</Link> }
            </label>
            <br />
          </div>
			</div>
    );
  }
}


export default withRouter(LoginForm);
