import React from "react";

const Signup: React.FC = () => {
  return (
    <div>
      <main>
        <div>
          <section>
            <form className="col-6">
              <h1>Create a new account</h1>

              <label>First name:</label>
              <br />
              <input type="text" id="firstname" name="firstName" required />

              <label>Last name:</label>
              <br />
              <input type="text" id="lastname" name="lastName" required />

              <label>Username:</label>
              <br />
              <input type="text" id="username" name="userName" required />

              <label>Password:</label>
              <br />
              <div className="password-container">
                <input type="password" required />
                {/* <span className="eyeicon">
              <i [ngclassName]="switchIcon1 ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
          </span> */}
              </div>

              <label>Confirm password:</label>
              <br />
              <div className="password-container">
                <input type="password" id="confirmPwd" required />
                {/* <span className="eyeicon" (click)="toggleConfirmPasswordVisibility('confirmPassword')">
          <i [ngclassName]="switchIcon2 ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
        </span> */}
              </div>

              <label>Email:</label>
              <input type="text" id="email" name="email" required />

              <button id="create">CREATE</button>
              <button id="cancel">CANCEL</button>
              {/* <div >
          {{errorMessage}}
        </div> */}
              <p id="write">
                Got an Account?
                <a id="login">Login</a>
              </p>
            </form>
          </section>

          <section id="two">
            <img id="image" src="assets/images/robot1.png" alt="" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Signup;
