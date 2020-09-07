var React = require("react");

class Index extends React.Component {
  render() {



    return (
      <html>
        <head />
        <body>
          <h3>Find furever</h3>

          <a href="/login/user">Login as a user</a>
          <br/>
          <a href="/login/org">Login as a organization</a>
          <br/>
          <a href="/register/user">Create an account</a>
          <a href="/register/org">Create an enterprise account</a>

        </body>
      </html>
    );
  }
}

module.exports = Index;