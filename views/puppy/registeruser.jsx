var React = require('react');

class Registeruser extends React.Component {

  render() {


    return (
              <html>
                <body>
                  <h1>SIGN UP FOR AN ACCOUNT</h1>
                  <form action="/signed/user" method ="POST">
                  <input type="text" name ="username"/>
                  <br/>
                  <br/>
                  <input type="password" name ="password"/>
                  <br/>
                  <br/>
                  <input type="text" name="bio"/>

                  <input type="submit" value ="submit"/>


                  </form>

                </body>

              </html>
    );
  }
}

module.exports = Registeruser;