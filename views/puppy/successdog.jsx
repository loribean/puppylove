const React = require('react');

export default class Successdog extends React.Component {
    render(){

        let {id,name} =this.props;
        let url = "/dashboard/"+id
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

  <header className="masthead text-center text-white">
    <div className="masthead-content">
      <div className="container">
        <h1 className="masthead-heading mb-0">Success!</h1>
        <h2 className="masthead-subheading mb-0">{name}</h2>
        <a href={url} className="btn btn-primary btn-xl rounded-pill mt-5">Back to dashboard?</a>
      </div>
    </div>
    <div className="bg-circle-1 bg-circle"></div>
    <div className="bg-circle-2 bg-circle"></div>
    <div className="bg-circle-3 bg-circle"></div>
    <div className="bg-circle-4 bg-circle"></div>
  </header>




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