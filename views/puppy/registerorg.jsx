var React = require('react');

class Registerorg extends React.Component {

  render() {


    return (
              <html>
                <body>
                  <h1>SIGN UP FOR AN ORGANIZATION ACCOUNT</h1>
                  <form action="/signed/org" method ="POST">
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

module.exports = Registerorg;