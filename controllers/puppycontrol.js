
module.exports = (db) => {
let populateData;


  let getHome  = (request, response) => {
  // send response with some data (a string)
    response.render('puppy/index')

};

  let logIn = (request, response) => {
  // send response with some data (a string)
    response.render('puppy/login')

};

let postLogIn = (request, response) => {
    let values = [request.body.username,request.body.password];
    db.puppy.postLogin(values,(err,result) =>{
        if(err){
            console.log('Error at postLogin---', err.message)
        } else {
            let userInfo = result.rows[0];
            let sessionid = userInfo.id;
            let userName = userInfo.username;
            let loginCookie = response.cookie("session",sessionid, { maxAge: 900000});
            let userCookie = response.cookie("userInfo",userName, { maxAge: 900000});
            response.send("Welcome "+ userName+ '<a href ="/home"> Go to dashboard </a>')
        }
    })
}

let logInOrg = (request, response) => {
  // send response with some data (a string)
    response.render('puppy/loginorg')

};

let postLogInOrg =  (request, response) => {
    let values = [request.body.username,request.body.password];
    db.puppy.postLoginOrg(values,(err,result) =>{
        if(err){
            console.log('Error at postLogin---', err.message)
        } else {
            let orgInfo = result.rows[0];
            let sessionid = orgInfo.id;
            let url = '/dashboard/org/'+sessionid;
            let userName = orgInfo.username;
            let loginCookie = response.cookie("sessionOrg",sessionid, { maxAge: 900000});
            let orgCookie = response.cookie("orgInfo",userName, { maxAge: 900000});
            response.send("Welcome "+ userName+ '<a href ='+url+'> Check your dashboard </a>')
        }
    })
}
  let submitDog = (request,response)=>{
    let orgCookie = request.cookies['orgInfo'];
            if(orgCookie=== null  ) {
            response.render('puppy/loginorg')
          } else {
            let loginCookie = request.cookies['sessionOrg'];
            let obj = {username:orgCookie, orgId:loginCookie}

            response.render('puppy/submitdog',obj)

          }
        }

let postDog = (request,response) => {
    let userName = request.cookies['orgInfo'];
    let org_id = request.cookies["sessionOrg"];
    console.log(org_id);
    let {name,description,img,age,gender,hdb_approved} = request.body;

let values = [name,org_id,description,img,age,gender,hdb_approved];
console.log(values)
    db.puppy.postedDog(values,(err,result)=>{
        if(err){
            console.log('Error at postDog---', err.message)
        } else{

            response.send("Success "+ userName+ '<a href ="/"> Back to Dashboard?</a>')
        }
        })

}

let createAccountUser =(request,response) =>{
    response.render('puppy/registeruser')

}

let postAccountUser = (request,response) =>{
    let values = [request.body.username,request.body.password,request.body.bio];
    db.puppy.postedSignupUser(values,(err,result)=>{
        if(err){
            console.log('Error at getRegistered---', err.message)
        } else{
            response.send('Success! <a href ="/login/user"> Login Now?</a>')
        }
        })
}

let createAccountOrg =(request,response) =>{
    response.render('puppy/registerorg')

}

let postAccountOrg = (request,response) =>{
    let values = [request.body.username,request.body.password];
    db.puppy.postedSignupOrg(values,(err,result)=>{
        if(err){
            console.log('Error at getRegistered---', err.message)
        } else{
            response.send('Success! <a href ="/login/org"> Login Now?</a>')
        }
        })
}


let getDashboard =(request,response)=> {
    let values = [request.params.id];
    db.puppy.getOrgDashboard(values,(err,result)=>{
        if(err){
            console.log('Error at getDashboard---', err.message)
        } else{

            let data = result.rows;
            let info = {'data': data, 'id':request.params.id };

            response.render('puppy/profile', info)
        }
        })

}


let indivDog =(request,response)=> {
    let values = [request.params.id];
    db.puppy.getIndivDog(values,(err,result)=>{
        if(err){
            console.log('Error at getDashboard---', err.message)
        } else{
            let data = result.rows;
            let info = {'data': data };
            console.log(data)

            response.render('puppy/indivdog',info)
        }
        })

}

let editDog =(request,response)=> {
    let values = [request.params.id];
    db.puppy.getEditDog(values,(err,result)=>{
        if(err){
            console.log('Error at getEdit---', err.message)
        } else{
            let data = result.rows;
            let info = {'data': data };

            response.render('puppy/edit',info)
        }
        })

}

let postEditDog =  (request,response) => {
    let dog_id = request.params.id;
    let userName = request.cookies['orgInfo'];
    let org_id = request.cookies["sessionOrg"];
    let url = "/dashboard/org/"+org_id;
    console.log(org_id);
    let {name,description,img,age,gender,hdb_approved} = request.body;

let values = [name,org_id,description,img,age,gender,hdb_approved,dog_id]
console.log(values)
    db.puppy.postedEditDog(values,(err,result)=>{
        if(err){
            console.log('Error at postEditDog---', err.message)
        } else{

            response.send("Success you edited your dog"+ userName+ '<a href ='+url+'> Back to Dashboard?</a>')
        }
        })

}


//helper function to populate the card which is async that awaits
function populate (arr){
         populateObj = {
            id : arr[0].id,
            org_id : arr[0].org_id,
            name: arr[0].name,
            description: arr[0].description,
            age: arr[0].age,
            gender:arr[0].gender,
            img: arr[0].img,
            hdb_approved:arr[0].hdb_approved
        }
    arr.shift();
     return populateObj;
}



let timeline = (request,response) => {
    let user_id = request.cookies["session"];
    let values = [user_id];

    db.puppy.getTimeline(values,(err,result)=>{
        if(err){
            res.send("you have run out of dogs to swipe. try again later?")
        } else{
            console.log(result.rows)
            populateData = result.rows;
            if(populateData.length <1){
                response.send("you have run out of dogs to swipe. try again later?")
            } else {

            let obj = populate(populateData);
            let dogId = obj.id;
            let dogCookie = response.cookie("dogCookie",dogId);
            let dogName = response.cookie("dogName",obj.name)
            response.render('puppy/timeline',obj)
        }}
        })

}


let swipe =  (request,response) => {
    let user_id = request.cookies["session"];
    let dog_id = request.cookies["dogCookie"];
    let dogBot = request.cookies["dogName"];
    let dogBot2 = request.cookies["userInfo"];
    let defaultMsg ='THIS IS THE START OF YOUR CONVERSATION';
    let values = [dog_id,user_id];
    let value = [dog_id,user_id,dogBot,dogBot2,defaultMsg]

    if(request.body.swipe === 'like'){
        db.puppy.postSwipeLike(values,value,(err,result)=>{
            if(err){
                console.log(err, "err at swipe")
            } else{
            let obj = populate(populateData);
            let dogCookie = response.cookie("dogCookie",obj.id);
            let dogName = response.cookie("dogName",obj.name);
            if(populateData.length <1){
                response.send("out of dogs")
            }else{
            console.log(populateData, "this is data AFTER function");

            response.render('puppy/timeline',obj)
            }
        }
    })
    }

    else if(request.body.swipe === 'dislike'){
        db.puppy.postSwipeDislike(values,(err,result)=>{
            if(err){
                console.log(err, "err at swipe")
            } else{

            let obj = populate(populateData);
            let dogCookie = response.cookie("dogCookie",obj.id);
            let dogName = response.cookie("dogName",obj.name);
            if(populateData.length <1){
            response.send("out of dogs to swipe. try again later")
            } else {
                 console.log(populateData, "this is data AFTER function");

            response.render('puppy/timeline',obj)
            }

            }
        })
    }
}

let getOrgMatches =(request,response)=> {
    let values = [request.params.id];
    db.puppy.getOrgMatched(values,(err,result)=>{
        if(err){
            console.log('Error at getMatches---', err.message)
        } else{
            console.log(result.rows)
            let data = result.rows;
            let obj = { 'data':data }
            response.render('puppy/matches',obj)
        }
        })

}

let getMessages =(request,response)=> {
    let values = [request.params.yourid, request.params.otherid];

    db.puppy.getMessaged(values,(err,result)=>{
        if(err){
            console.log('Error at getMessages---', err.message)
            response.send("Something went wrong while getting from DB")
        } else{
            console.log(result.rows);
            let data = result.rows;
            let obj = { 'data':data }
            response.render('puppy/chats',obj)
        }
        })
}

let postMessages =(request,response)=> {


    let values = [request.params.senderid, request.params.recipientid, request.body.sender_name,request.body.recipient_name,request.body.content ];
    db.puppy.postMessaged(values,(err,result)=>{
        if(err){
            console.log('Error at postMessages---', err.message)
        } else{
            console.log(result.rows, "this is from postMessages");
            let data = result.rows;
            let obj = { 'data':data }
            response.redirect(`/messages/${request.params.senderid}/${request.params.recipientid}`)
        }
        })
}

let getMessagesUser =(request,response)=> {
    let user_id = request.cookies['session']
    let values = [user_id, request.params.id];
    db.puppy.getMessagedUser(values,(err,result)=>{
        if(err){
            console.log('Error at getMessages---', err.message)
        } else{
            console.log(result.rows);
            let data = result.rows
            let obj = {data:data, yourid:user_id, otherid:request.params.id}
            console.log(obj)
            response.render("puppy/userchat",obj)

        }
        })
}

let postMessagesUser =(request,response)=> {
    let user_id = request.cookies['session']

    let values = [user_id, request.params.id, request.body.sender_name,request.body.recipient_name,request.body.content ];
    db.puppy.postMessagedUser(values,(err,result)=>{
        if(err){
            console.log('Error at postMessages---', err.message)
        } else{
            console.log(result.rows, "this is from postMessages");
            let data = result.rows;
            let obj = { 'data':data }
            let url = '/chat/'+request.params.id
            response.redirect(`/chat/${request.params.id}`);
        }
        })
}

let getAllConversationsUser =(request,response)=> {
    let user_id = request.cookies['session']
    let values = [user_id];
    db.puppy.getAllConversationsUsers(values,(err,result)=>{
        if(err){
            console.log('Error at postMessages---', err.message)
        } else{
            console.log(result.rows, "this is from getAllMessages");
            let data = result.rows;
            let obj = { 'data':data }
            response.render("puppy/dashboarduser",obj)

        }
        })
}




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    getHome,
    logIn,
    postLogIn,
    logInOrg,
    postLogInOrg,
    submitDog,
    postDog,
    createAccountUser,
    postAccountUser,
    createAccountOrg,
    postAccountOrg,
    getDashboard,
    indivDog,
    editDog,
    postEditDog,
    timeline,
    swipe,
    getOrgMatches,
    getMessages,
    postMessages,
    getMessagesUser,
    postMessagesUser,
    getAllConversationsUser



    // postFollowers

  };
}