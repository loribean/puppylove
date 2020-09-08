const React = require('react');

export default class Userchats extends React.Component {
    render(){
        let messageArr = this.props.data;
        let dog = messageArr[0].sender_name;
        let dog_id = this.props.otherid
        let you = messageArr[0].recipient_name;
        let url = "/chathist/" + dog_id

        let msgList = messageArr.map(item =>{
            return <li>

    <div className="speech-bubble container">
      <div className="row align-items-center">

          <div className="p-2">
            <h6>{item.sender_name}</h6>
            <p className = "speech-bubble">{item.content}</p>
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


  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">Puppy Love</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/timeline">Swipe</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/home">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="masthead text-center text-white">
    <div className="masthead-content">
      <div className="container">
        <h2 className="masthead-subheading mb-0">Chat with {dog}!</h2>

      </div>
    </div>
    <div className="bg-circle-1 bg-circle"></div>
    <div className="bg-circle-2 bg-circle"></div>
    <div className="bg-circle-3 bg-circle"></div>
    <div className="bg-circle-4 bg-circle"></div>
  </header>
          <div>
            <ul style={{listStyle: "none"}}>{msgList}</ul>

          </div>

          <section>
    <div class="container">
      <div class="row align-items-center">
         <form action={url} method ="POST">
            <p>New Message</p>

                  <input type="hidden" name ="sender_name" value={you} readOnly/>

                  <input type="hidden" name ="recipient_name" value={dog} readOnly/>
                  <input type="text" name ="content"/>

                  <br/>
                  <br/>
                  <input type="submit" value ="send"/>
                  </form>
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