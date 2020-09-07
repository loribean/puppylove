const React = require('react');

export default class Timeline extends React.Component {
    render(){

        const {name,age,description,image,id} =this.props;

        return (
        <html>
        <head>

        </head>
        <body>
          <div>
            <h1>Let's get swiping!</h1>

           <form action="/swipe" method ="POST">
                 <div id="container">
                    <p>Name:{name}</p>
                    <p>Age:{age}</p>
                    <p>Bio:{description}</p>
                    <p>Image:{image}</p>

                    </div>
                  <br/>
                  <br/>

                  <input type="radio" id="like" name="swipe" value="like"/>
                  <p>Like</p>
                  <br/>
                <input type="radio" id="dislike" name="swipe" value="dislike"/>
                <p>Dislike</p>
                  <br/>
                  <br/>
                  <input type="submit" value ="submit"/>
                  </form>
          </div>

        </body>
      </html>
            );
    }
}