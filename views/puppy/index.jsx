var React = require("react");

class Index extends React.Component {
  render() {



    return (
      <html>
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
<link rel="stylesheet" href="/index.css" />
  <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet"/>
  <link href="/index.css" rel="stylesheet"/>
</head>

<body>


  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">Puppy Love</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/login/user">Login as a User</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login/org">Login as an Organization</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register/user">Sign up as a User</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register/org">Sign Up as an Organization</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="masthead text-center text-white">
    <div className="masthead-content">
      <div className="container">
        <h1 className="masthead-heading mb-0">Find your Furever</h1>
        <h2 className="masthead-subheading mb-0"></h2>
        <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Let's Go!</a>
      </div>
    </div>
    <div className="bg-circle-1 bg-circle"></div>
    <div className="bg-circle-2 bg-circle"></div>
    <div className="bg-circle-3 bg-circle"></div>
    <div className="bg-circle-4 bg-circle"></div>
  </header>

  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img class="img-fluid rounded-circle" src="https://source.unsplash.com/Qb7D1xw28Co/400x400" alt=""/>
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">For those looking a cuddle buddy!</h2>
            <p>“You think those dogs will not be in heaven! I tell you they will be there long before any of us.” ― Robert Louis Stevenson</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="p-5">
            <img class="img-fluid rounded-circle" src="https://source.unsplash.com/eoqnr8ikwFE/400x400" alt=""/>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="p-5">
            <h2 class="display-4">For those looking for a platform to help..</h2>
            <p>“All his life he tried to be a good person. Many times, however, he failed. For after all, he was only human. He wasn’t a dog.” – Charles M Schulz</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img class="img-fluid rounded-circle" src="https://source.unsplash.com/5-jX_6kqsaw/400x400" alt="" />
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">Let's get swiping!</h2>
            <p>“My main characters are the most sunny, happy, optimistic, loving creatures on the face of the Earth. I couldn’t be happier that’s where I start. I can put as many flawed people in the dog’s world as I like, but the dog doesn’t care. Dog doesn’t judge, dog doesn’t dislike. Dog loves. That’s not so bad.” – Bruce Cameron</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="py-5 bg-black">
    <div class="container">
      <p class="m-0 text-center text-white small">PuppyLove INC</p>
    </div>

  </footer>


</body>

</html>
    );
  }
}

module.exports = Index;