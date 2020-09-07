var React = require('react');

class Login extends React.Component {

  render() {


    return (
              <html>
                <body>
                  <h1>LOGIN AS AN ORGANIZATION</h1>
                  <form action="/storepassword/org" method ="POST">
                  <input type="text" name ="username"/>
                  <br/>
                  <br/>
                  <input type="password" name ="password"/>
                   <br/>
                  <br/>
                  <input type="submit" value ="submit"/>


                  </form>

                </body>

              </html>
    );
  }
}

module.exports = Login;