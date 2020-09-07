const React = require('react');

export default class Dashboarduser extends React.Component {
    render(){
        let matchArr = this.props.data;

        let matchList = matchArr.map(item =>{
            return <li>{item.name} <a href={`/chat/${item.dog_id}`}>Your Chats</a></li>
        })

        return (
        <html>
        <head>

        </head>
        <body>
          <div>
            <h1>Welcome to your User dashboard</h1>
            <p>Your Messages</p>
            <ul>{matchList}</ul>

            <a href ="/timeline"> Click here to get swiping </a>


          </div>

        </body>
      </html>
            );
    }
}