// import React, { Component } from 'react';

// class Auth extends Component {
//   constructor() {
//     super();
//     this.state = {
//       redirectToReferrer: false,
//     };

//     this.login = this.login.bind(this);
//   }

//   login = () => {
//     auth.authenticate(() => {
//       this.setState({
//         redirectToReferrer: true,
//       });
//     });
//   };

//   render() {
//     const { from } = this.props.location.state;
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer) {
//       <Redirect to={from} />;
//     }
//     return (
//       <div>
//         <p>
//           You must log in to view this page at {from.pathname}
//           <button onClick={this.login}>Log in</button>
//         </p>
//       </div>
//     );
//   }
// }

// export default Auth;
