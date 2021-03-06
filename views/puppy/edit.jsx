var React = require('react');

class Edit extends React.Component {

  render() {
     let {name,org_id,description,img,age,gender,hdb_approved} = this.props.data[0];



    return (
               <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
              <link rel="stylesheet" href="/orglogin.css" />
               <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet"/>
  <link href="/index.css" rel="stylesheet"/>

        </head>

          <body>
           <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">Puppy Love</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/dashboard/org">dashboard</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
                    <div className="container-fluid">
                      <div className="row no-gutter">
                        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                        <div className="col-md-8 col-lg-6">
                          <div className="login d-flex align-items-center py-5">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                  <h3 className="login-heading mb-4">Edit the Doggo</h3>
                                  <form action="/postededit" method ="POST">
                                    <div className="form-label-group">
                                      <input type="text-center" id="inputEmail" className="form-control" name ="name"placeholder={name} required autoFocus />
                                      <label htmlFor="inputEmail">Name</label>
                                    </div>
                                    <div className="form-label-group">
                                      <input type="text-center" id="inputAge" className="form-control" name ="age"placeholder={age} required autoFocus />
                                      <label htmlFor="inputAge">Age</label>
                                    </div>
                                    <div className="form-label-group">
                                      <input type="text-center" id="inputGender" className="form-control" name ="gender"placeholder={gender} required autoFocus />
                                      <label htmlFor="inputGender">Gender</label>
                                    </div>

                                    <div className="form-label-group">
                                      <input type="text-center" id="inputdescription" className="form-control" name={description} placeholder="description" required />
                                      <label htmlFor="inputdescription">description</label>
                                    </div>
                                    <div className="form-label-group">
                                      <input type="text-center" id="inputimg" className="form-control" name ="img"placeholder="image URL" required autoFocus />
                                      <label htmlFor="inputimg">Image</label>
                                    </div>
                                        <div>
                                        <p> HDB APPROVED?</p>
                                        <select name="hdb_approved" id="hdb_approved" className="form-control">
                                          <option value="true">true</option>
                                          <option value="false">false</option>
                                        </select>
                                    </div>


                                    <button className="btn btn-primary btn-m rounded-pill mt-5" type="submit">Edit Doggo</button>
                                    <div className="text-center">
                                     </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </body>

      </html>
            );
    }
}

module.exports = Edit;