import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      if (this.props.pendingTrip) {
        let trip = this.props.pendingTrip.trip;
        trip.user_id = this.props.currentUser.id;
        this.props.createTrip({trip});
      } else {
        hashHistory.push("/tripboard");
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
    const errorLines = this.props.errors.map( (error, i) => (
      <li className="error" key={i}>
        {error}
      </li>
    ));

    return(
			<ul>
        {errorLines}
			</ul>
		);

  }

  // loginDemo() {
  //   const user = { username: 'guest', password: 'password' };
  //   this.props.login({user});
  // }
  // <input type="button"
  //            value="Log in with Demo"
  //            className="guest-login"
  //            onClick={this.loginDemo} />


  render() {

    return(
      <div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
          {<Link to="/" className="form-title">trekko</Link>}
					<br/>
					{ this.renderErrors() }
					<div className="login-form">

            <br />
						<label> Email:
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input" />
						</label>

            <br />
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<br />
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<br />
						<input className="login-submit" type="submit" value="GET STARTED" />
            <br />
              <label className="form-footer">
                Already have an account? { <Link to="/login">Log in</Link> }
              </label>

					</div>
				</form>
			</div>
    );
  }
}


export default withRouter(SignupForm);
