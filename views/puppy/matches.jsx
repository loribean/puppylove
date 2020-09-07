const React = require('react');

export default class Matches extends React.Component {
    render(){
        let matchArr = this.props.data;

        let matchList = matchArr.map(item =>{
            return <li>{item.username} matched {item.name} <a href="/">Click here to start a conversation</a></li>
        })


        return (
        <html>
        <head>

        </head>
        <body>
          <div>
            <h1>Welcome to your matches!</h1>

            <ul>{matchList}</ul>
          </div>

        </body>
      </html>
            );
    }
}