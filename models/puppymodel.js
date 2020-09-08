/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {


let postLogin = (values,callback) => {
    let query = 'SELECT * FROM users WHERE username=$1 and password=$2';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

  let postLoginOrg = (values,callback) => {
    let query = 'SELECT * FROM org WHERE username=$1 and password=$2';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }


  let postedDog = (values,callback) => {
    let query = 'INSERT INTO dog (name,org_id,description,img,age,gender,hdb_approved) VALUES($1,$2,$3,$4,$5,$6,$7)';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

  let postedSignupUser = (values,callback) => {
    let query = 'INSERT INTO users (username, password,bio) VALUES($1,$2,$3)';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

let postedSignupOrg = (values,callback) => {
    let query = 'INSERT INTO org (username, password) VALUES($1,$2)';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }


  let  getOrgDashboard = (values,callback) => {
    let query = 'SELECT * FROM org INNER JOIN dog on org.id =$1 and dog.org_id =$1';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }
let getIndivDog = (values,callback) => {
    let query = 'SELECT * FROM dog where id=$1';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

  let getEditDog = (values,callback) => {
    let query = 'SELECT * FROM dog where id=$1';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

let postedEditDog = (values,callback) => {
    let query = 'UPDATE dog SET name=$1,org_id=$2,description=$3,img=$4,age=$5,gender=$6,hdb_approved=$7 where id=$8';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

  let getTimeline = (values,callback) => {
    let query = 'SELECT * from (SELECT * from dog left join (SELECT * FROM match where match.follower_user_id =$1) as seen_dogs on dog.id = seen_dogs.dog_id) as foo where dog_id is null  AND name is not null';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)

    })
  }

let getCheckMatches = (values,callback) => {
    let query = 'select * from match inner join dog on match.dog_id = dog.id where match.follower_user_id=$1';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)
    })
  }

  let postSwipeLike =(values,value,callback) => {
    let query = 'INSERT INTO match (dog_id,follower_user_id,liked) VALUES ($1,$2,true);';
    dbPoolInstance.query(query,values)
        .then(() => {
            let query = 'INSERT INTO message (sender_id,recipient_id,sender_name,recipient_name,content) VALUES ($2,$1,$3,$4,$5);';
    dbPoolInstance.query(query,value,(err,result)=>{
        callback(err,result)
    })
        })
  }


  let postSwipeDislike = (values,callback) => {
    let query = 'INSERT INTO match (dog_id,follower_user_id,liked) VALUES ($1,$2,false);';
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)
    })
  }

  let getOrgMatched =(values,callback) =>{
    let query ="select * from dog inner join org on dog.org_id = org.id inner join match on dog.id = match.dog_id inner join users on match.follower_user_id = users.id where org.id =$1 AND match.liked = true";
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)
    })
  }

  let getMessaged  =(values,callback) =>{
    let query ="select * from message where sender_id =$1 and recipient_id = $2";
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)
    })
  }

  let postMessaged =(values,callback) =>{
    let query ="INSERT INTO message (sender_id,recipient_id,sender_name,recipient_name,content) VALUES($1,$2,$3,$4,$5) RETURNING *";
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)
    })
  }

  let getMessagedUser  =(values,callback) =>{
    let query ="select * from message where recipient_id =$1 and sender_id=$2 or recipient_id =$2 and sender_id=$1 ";
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)
    })
  }

  let postMessagedUser =(values,callback) =>{
    let query ="INSERT INTO message (sender_id,recipient_id,sender_name,recipient_name,content) VALUES($1,$2,$3,$4,$5) returning * ";
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)
    })
  }

let getAllConversationsUsers =(values,callback) =>{
    let query ="select * from match inner join dog on match.dog_id = dog.id where match.follower_user_id=$1";
    dbPoolInstance.query(query,values,(err,result)=>{
        callback(err,result)
    })
  }


  return {

    postLogin,
    postLoginOrg,
    postedDog,
    postedSignupUser,
    postedSignupOrg,
    getOrgDashboard,
    getIndivDog,
    getEditDog,
    postedEditDog,
    getTimeline,
    postSwipeDislike,
    postSwipeLike,
    getOrgMatched,
    getMessaged,
    postMessaged,
    getMessagedUser,
    postMessagedUser,
    getCheckMatches,
    getAllConversationsUsers,





  };
};