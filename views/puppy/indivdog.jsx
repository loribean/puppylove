const React = require('react');

export default class Indivdog extends React.Component {
    render(){
const {name, description,age,gender,hdb_approved,id,img} = this.props.data[0];
let url = "/dogs/edit/"+id


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

<div>
  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">Puppy Love</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/submitdog">Enter a new dog!</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="masthead text-center text-white">
    <div className="masthead-content">
      <div className="container">
        <h1 className="masthead-heading mb-0">{name}</h1>
        <h2 className="masthead-subheading mb-0">Profile</h2>
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
            <img class="img-fluid rounded-circle" src={img} alt=""/>
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">{age} {gender}</h2>
            <p>{description}</p>
            <p>hdb_approved: {JSON.stringify(hdb_approved)}</p>
            <a href={url} className="btn btn-primary btn-xl rounded-pill mt-5">Edit this profile</a>

          </div>
        </div>
      </div>
    </div>
  </section>


          </div>

        </body>
      </html>
            );
    }
}