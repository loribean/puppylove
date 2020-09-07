const React = require('react');

export default class Chats extends React.Component {
    render(){
        let messageArr = this.props.data;
        console.log(messageArr,"----Message array")
        let recipient = messageArr[0].recipient_name;
        let sender = messageArr[0].sender_name;
        let url = `/messages/${this.props.data[0].sender_id}/${this.props.data[0].recipient_id}`

        let msgList = messageArr.map(item =>{
            return <li>{item.sender_name}: {item.content}</li>
        })


        return (
        <html>
        <head>

        </head>
        <body>
          <div>
            <h1>Welcome to your conversation with {recipient}!</h1>
            <p>This is the beginning of your conversation</p>


            <ul>{msgList}</ul>

            <br/>
            <br/>

            <form action={url} method ="POST">
            <p>New Message</p>
                    <span>from:</span>
                  <input type="text" name ="sender_name" value={sender} readOnly/>
                  <span>to:</span>
                  <input type="text" name ="recipient_name" value={recipient} readOnly/>
                  <input type="text" name ="content"/>

                  <br/>
                  <br/>
                  <input type="submit" value ="send"/>
                  </form>
          </div>

        </body>
      </html>
            );
    }
}