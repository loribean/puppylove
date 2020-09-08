var React = require('react');

class Login extends React.Component {

  render() {


    return (
              <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
              <link rel="stylesheet" href="/styles.css" />
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
            <a className="nav-link" href="/">Home</a>
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
                                  <h3 className="login-heading mb-4">Welcome back!</h3>
                                  <form action="/storepassword/user" method ="POST">
                                    <div className="form-label-group">
                                      <input type="text-center" id="inputEmail" className="form-control" name ="username"placeholder="username" required autoFocus />
                                      <label htmlFor="inputEmail">Username</label>
                                    </div>

                                    <div className="form-label-group">
                                      <input type="password" id="inputPassword" className="form-control" name="password"placeholder="Password" required />
                                      <label htmlFor="inputPassword">Password</label>
                                    </div>


                                    <button className="btn btn-primary btn-m rounded-pill mt-5" type="submit">Sign in</button>
                                    <div className="text-center">
                                      <a className="small" href="/register/user">Don't have an account? Sign up here</a></div>
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

module.exports = Login;