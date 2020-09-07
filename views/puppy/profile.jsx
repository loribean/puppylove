const React = require('react');

export default class Profile extends React.Component {
    render(){


        let username = this.props.data[0].username;
        let url ="/dogs/";
        let matchesUrl = "/matches/"+this.props.id

        let arrayInfo = this.props.data;
        let dashList = arrayInfo.map(dog => {
            return <li>Name: {dog.name} Age:{dog.age} Gender: {dog.gender} Bio: {dog.description}<a href={`${url}${dog.id}`}>Go to profile</a></li>
        })

        return (
        <html>
        <head>

        </head>
        <body>
          <div>
            <h1>Welcome to your dashboard, {username}!</h1>
            <h2>Dogs</h2>
            <ul>{dashList}</ul>
            <a href={`${matchesUrl}`}>Click here to view your matches </a>
          </div>

        </body>
      </html>
            );
    }
}