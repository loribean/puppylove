const React = require('react');

export default class Matches extends React.Component {
    render(){
        let matchArr = this.props.data;

        let matchList = matchArr.map(item =>{
            return  <li>
    <div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 order-lg-2">
          <div class="p-5">
            <img class="img-fluid rounded-circle" src="https://source.unsplash.com/5-jX_6kqsaw/400x400" alt="" />
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="p-5">
            <h2 class="display-4">{item.username}</h2>
            <p>{item.username} matched {item.name} </p>
            <a href={`/messages/${item.follower_user_id}/${item.dog_id}`} className="btn btn-primary btn-xl rounded-pill mt-5">Click here to start a conversation</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </li>


        })


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
        <h1 className="masthead-heading mb-0">Welcome to your Matches</h1>
      </div>
    </div>
    <div className="bg-circle-1 bg-circle"></div>
    <div className="bg-circle-2 bg-circle"></div>
    <div className="bg-circle-3 bg-circle"></div>
    <div className="bg-circle-4 bg-circle"></div>
  </header>
          <div>
            <ul style={{listStyle: "none"}}>{matchList}</ul>

          </div>



           <footer class="py-5 bg-black">
            <div class="container">
              <p class="m-0 text-center text-white small">PuppyLove INC</p>
            </div>

            </footer>
</div>
        </body>
      </html>
            );
    }
}