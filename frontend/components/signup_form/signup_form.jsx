import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';
import Header from '../header/header';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: ""
    };

    // this.loginDemo = this.loginDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
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

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(fieldName){
    return e => { this.setState({[fieldName]: e.currentTarget.value }); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
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
					<div className="session-form">
            <ul className="session-errors">
              { this.renderErrors() }
            </ul>

            <div className="signup-name-container">
              <input type="text"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="signup-input"
                placeholder="First Name" />

              <input type="text"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="signup-input"
                placeholder="Last Name" />

            </div>

							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="signup-input"
                placeholder="Email" />

							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="signup-input"
                placeholder="Username" />


							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="signup-input"
                placeholder="Password" />

            <input className="login-submit" type="submit" value="SIGN UP" />


					</div>
				</form>
        <div className="session-footer-nav">
          <button className="oauth"><a href="/auth/facebook">Sign up with Facebook</a></button>
            <label className="form-footer">
              Already have an account? { <Link to="/login">Log in</Link> }
            </label>
        </div>
			</div>
    );
  }
}


export default withRouter(SignupForm);
