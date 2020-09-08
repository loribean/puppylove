const React = require('react');

export default class Timeline extends React.Component {

    render(){

        const {name,age,description,img,org_id} =this.props;

        return (

 <html>
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet"/>
  <link href="/timeline.css" rel="stylesheet"/>
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
            <a className="nav-link" href="/home">Back to Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Back to home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="masthead text-center">
    <div className="masthead-content">
      <div className="container">
        <div id="dog">
        <h2 className="masthead-subheading mb-0 text-green ">{name}</h2>
         <img class="rounded-square" src={img} alt=""/>
         <div id="container text-yellow">
                    <p>Age:{age}</p>
                    <p>Bio:{description}</p>

                    </div>
                    <ul id="options">
                <li>
                  <form action="/swipe" method ="POST">
                  <input type="submit" className="btn btn-primary btn-s rounded-pill mt-5" value ="YAY"/>
                  <input type="hidden" id="like" name="swipe" value="like" readOnly/>
                  </form>
                  </li>
                  <li>

                  <form action="/swipe" method ="POST">
                  <input type="submit" className="btn btn-nope btn-s rounded-pill mt-5" value ="NAY"/>
                   <input type="hidden" id="dislike" name="swipe" value="dislike" readOnly/>
                  </form>
                  </li>
                  </ul>
         </div>


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