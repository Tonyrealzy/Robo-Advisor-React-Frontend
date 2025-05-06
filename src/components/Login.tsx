import React from "react";

const Login: React.FC = () => {
  return (
    <div>
      <div>
        <section>
          <div>
            <h1>
              Achieve financial goals
              <br />
              with confidence!
            </h1>
            <button></button>
            <h1>
              Your trusted partner in personalized
              <br />
              investment recommendations and <br />
              portfolio management services.
              <br />
            </h1>
            <button>RETURN</button>
          </div>
        </section>

        <section>
          <div>
            <form>
              <section>
                {/* <small className="text-red-600 text-center block text-[0.8rem]">{{errorMessage}}</small> */}

                <p id="sign">Sign in with your details</p>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                />

                <div className="password-container">
                  <input required />
                  <span className="eyeicon">
                    {/* <i
                  [ngclassName]="
                    switchIcon ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'
                  "
                ></i> */}
                  </span>
                </div>

                <button type="submit" className="text-white font-bold">
                  LOG IN
                </button>
              </section>

              <section>
                <p id="par">
                  Is this your first time here? For full access, you need to
                  sign-up.
                </p>
                <a>CREATE NEW ACCOUNT</a>
              </section>
            </form>
            <br />
            <br />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
