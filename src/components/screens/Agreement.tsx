import React from "react";

const Agreement: React.FC = () => {
  return (
    <div>
      <section id="title">
        <h1>Terms and Conditions</h1>
      </section>
      <div className="page">
        <p id="first">Welcome to your personalised Robo-Advisor App!</p>

        <section className="write">
          <p>
            These terms and conditions outline the rules and regulations for the
            use of this Robo-Advisor App. By accessing this app, we assume you
            accept these terms and conditions. Do not continue to use the
            Robo-Advisor App if you do not agree to take all of the terms and
            conditions stated on this page!
          </p>
        </section>

        <section className="write">
          <h2>Privacy Policy</h2>

          <p>
            Your privacy is important to us. It is our policy to respect your
            privacy regarding any information we may collect from you across our
            app.
          </p>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we're
            collecting it and how it will be used.{" "}
          </p>
          <p>
            Please refer to our Privacy Policy to understand how we handle your
            data.
          </p>
        </section>

        <section className="write">
          <h2>User Agreement</h2>
          <p>By using the Robo-Advisor App, you agree to:</p>
          <section className="list">
            <ul>
              <li>
                Provide accurate and truthful information about your demographic
                region, risk appetite, previous investments, attitude towards
                losses, the worth of your present portfolio, and the amount you
                are willing to invest.
              </li>
              <li>
                Understand that the advice provided by the app is based on the
                information you provide and is not financial or investment
                advice.
              </li>
              <li>
                Acknowledge that investment decisions are subject to market
                risks, and past performance is not indicative of future results.
              </li>
              <li>
                Consent to receive notifications, alerts, and updates related to
                your account and our services.
              </li>
              <li>
                Recognize that the Robo-advisor app is not responsible for any
                losses or damages resulting from your investment decisions.
              </li>
              <li>
                Agree to keep your login credentials confidential and report any
                unauthorized access to your account.
              </li>
            </ul>
          </section>
        </section>

        <section className="write">
          <h2>Security</h2>
          <p>
            We employ industry-standard security measures to protect your
            information. However, no method of transmission over the internet or
            electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your personal information,
            we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="write">
          <h2>Modification of Terms</h2>
          <p>
            We may revise these terms of service for its app at any time without
            notice. By using this app, you are agreeing to be bound by the
            then-current version of these terms of service.
          </p>
        </section>

        <section className="write">
          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms, click <a>here</a>. By
            proceeding with the use of this Robo-Advisor App, you agree to abide
            by these terms and conditions.
          </p>
        </section>
        <button>Continue</button>
        <button>Back to Home</button>
      </div>
    </div>
  );
};

export default Agreement;
