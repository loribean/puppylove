


-- INSERT INTO users (username, password, bio) VALUES ('timotits','12345','Hey! I am Tim!');

-- INSERT INTO users (username, password, bio) VALUES ('jewelyap','12345','First-time pawrent');
-- INSERT INTO users (username, password, bio) VALUES ('polkalette','12345','looking to adopt a puppy');
-- INSERT INTO users (username, password, bio) VALUES ('shurui','12345','looking for a buddy for my dog');

-- INSERT INTO org (username, password) VALUES ('SOSD','12345');
-- INSERT INTO org (username, password) VALUES ('SPCA','12345');
-- INSERT INTO org (username, password) VALUES ('A-strays-life','12345');
-- INSERT INTO org (username, password) VALUES ('MercyLight-Adoptions','12345');
-- INSERT INTO org (username, password) VALUES ('OSCAS','12345');





-- INSERT INTO dog (name,org_id,description,img,age,gender,hdb_approved) VALUES ('Cheddie',1,'a cutie looking for a furever home','cheddie_img_url_here','2 Years','Female',false);

-- INSERT INTO dog (name,org_id,description,img,age,gender,hdb_approved) VALUES ('Mark',1,'a cutie looking for a furever home','Mark_img_url_here','3 Years','Male',true);

-- INSERT INTO dog (name,org_id,description,img,age,gender,hdb_approved) VALUES ('Maple',2,'a senior looking for a furever home','Maple_img_url_here','9 Years','Female',true);

-- INSERT INTO dog (name,org_id,description,img,age,gender,hdb_approved) VALUES ('Xiao Bai',4, 'a cutie looking for a furever home','cheddie_img_url_here','1 month','male',false);

-- INSERT INTO dog (name,org_id,description,img,age,gender,hdb_approved) VALUES ('Molly',3,'a cutie looking for a furever home','cheddie_img_url_here','6 years','female',false);

-- INSERT INTO dog (name,org_id,description,img,age,gender,hdb_approved) VALUES ('Gretel',3, 'a cutie looking for a furever home','cheddie_img_url_here','2 years','male',true);

-- INSERT INTO dog (name,org_id,description,img,age,gender,hdb_approved) VALUES ('Scrappy',3,'a cutie looking for a furever home','cheddie_img_url_here','3 years','male',false);

-- INSERT INTO dog (name,org_id,description,img,age,gender,hdb_approved) VALUES ('Yoda',2,'a cutie looking for a furever home','cheddie_img_url_here','3 month','male',false);

-- INSERT INTO match (dog_id,follower_user_id,liked) VALUES (1,2,false);
-- INSERT INTO match (dog_id,follower_user_id,liked) VALUES (2,4,true);
-- INSERT INTO match (dog_id,follower_user_id,liked) VALUES (3,1,true);


INSERT INTO message (sender_id,recipient_id,sender_name,recipient_name,content) VALUES (4,4,'Mark','shurui','Hey there! Nice to meet you shurui, I am from SOSD and you are interested in Mark?');