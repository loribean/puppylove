var React = require('react');

class Edit extends React.Component {

  render() {
     let {name,org_id,description,img,age,gender,hdb_approved} = this.props.data[0];


    return (
              <html>
                <body>
                  <h1>Edit this puppy</h1>
                  <form action="/postededit" method ="POST">

                  <input type="text" placeholder={name} name ="name"/>
                  <input type="text" placeholder={description} name ="description"/>
                  <input type="text" placeholder={img} name ="img"/>
                  <input type="text" placeholder={age} name ="age"/>
                  <input type="text" placeholder={gender} name ="gender"/>
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

module.exports = Edit;