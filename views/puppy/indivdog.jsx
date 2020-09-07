const React = require('react');

export default class Indivdog extends React.Component {
    render(){
const {name, description,age,gender,hdb_approved,id} = this.props.data[0];
let url = "/dogs/edit/"+id


        return (
        <html>
        <head>

        </head>
        <body>
          <div>
          <div>
            <h1>DOG PROFILE</h1>
            <h2>Name:{name}</h2>
            <h4>description: {description}</h4>
            <h4>Age: {age}</h4>
            <h4>Gender: {gender}</h4>
            <h4>hdb_approved: {hdb_approved}</h4>
        </div>
        <a href={url}>Click here to Edit this profile</a>







          </div>

        </body>
      </html>
            );
    }
}