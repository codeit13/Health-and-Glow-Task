import { Component } from 'react';
import './App.css';

// function App() {

//   function loginForm(event) {
//     event.preventDefault();
//     console.log("Form Submitted: ", this.email, this.password);
//   }
  
//   return (
//       <div className='container'>
//           <h1>Login Form</h1>
//           <form onSubmit={loginForm}>
//             <div>
//               <label>Email Address</label>
//               <input name='email' type="email" ref={node => (this.email)} className='form-control' />
//             </div>
//             <div>
//               <label>Password</label>
//               <input name='password' type="password" ref={node => (this.password)} className='form-control' />
//             </div>
//             <div>
//               <button type="submit" className='btn btn-primary'>Login</button>
//             </div>
//           </form>
//       </div>
//   );
// }

class App extends Component {
  loginForm() {
    this.inputRef.focus();
  }

  render() {
    return (
      <div>
        <input ref={ref => { this.inputRef = ref; }} />
        <button onClick={this.onClick.bind(this)}>Click to Focus</button>
      </div>
    );
  }
}

export default App;
