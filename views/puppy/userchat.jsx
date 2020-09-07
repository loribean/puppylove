const React = require('react');

export default class Userchats extends React.Component {
    render(){
        let messageArr = this.props.data;
        let dog = messageArr[0].sender_name;
        let dog_id = this.props.otherid
        let you = messageArr[0].recipient_name;
        let url = "/chathist/" + dog_id



        let msgList = messageArr.map(item =>{
            return <li>{item.sender_name}: {item.content}</li>
        })


        return (
        <html>
        <head>

        </head>
        <body>
          <div>
            <h1>Welcome to your conversation with {dog}!</h1>
            <p>This is the beginning of your conversation</p>


            <ul>{msgList}</ul>

            <br/>
            <br/>

            <form action={url} method ="POST">
            <p>New Message</p>
                    <span>from:</span>
                  <input type="text" name ="sender_name" value={you} readOnly/>
                  <span>to:</span>
                  <input type="text" name ="recipient_name" value={dog} readOnly/>
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