var React = require('react');

class Submitdog extends React.Component {

  render() {


    return (
              <html>
                <body>
                  <h1>Submit a puppy, {this.props.username}</h1>
                  <form action="/posteddog" method ="POST">

                  <input type="text" placeholder="name" name ="name"/>
                  <input type="text" placeholder="bio" name ="description"/>
                  <input type="text" placeholder="image" name ="img"/>
                  <input type="text" placeholder="age" name ="age"/>
                  <input type="text" placeholder="gender" name ="gender"/>
                  <br/>
                  <br/>
                  <p>HDB Approved?</p>
                  <input type="radio" id="true" name="hdb_approved" value="true"/>
                  <p>True</p>
                  <br/>

                <input type="radio" id="false" name="hdb_approved" value="false"/>
                <p>False</p>
                  <br/>




                  <br/>
                  <br/>

                  <input type="submit" value ="submit"/>


                  </form>

                </body>

              </html>
    );
  }
}

module.exports = Submitdog;