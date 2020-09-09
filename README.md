# ABOUT PUPPY LOVE

Inspiration:
Adopting a Singapore Special is pretty challenging process. Multiple barriers to entry as potential adoptees need to follow many accounts/adoption drives. Hard to find a perfect match.

Description:

Welcome to Puppy Love! A tinder style pet adoption web application that makes the process of adopting a dog and putting a dog up for adoption easier.

Click Yay! on a pet you're interested in, and nay if you're not. An organization will chat with you after screening for potential adoptees.

check your messages to see who you have matched!

All pets have name, age, bio, gender and apartment approved values.

For organizations, 
you can list, edit, and screen potential adopters and chat with them!

INSTRUCTIONS:
TO RUN ON YOUR MACHINE:
Clone the app
npm install
Make sure you have postgres SQL installed on your machine.

on your terminal, 
createdb puppy

Change the user in db.js to your own user name on your machine.

On your terminal
psql -d puppy -U yourname -f tables.sql
psql -d puppy -U yourname -f seed.sql

ON heroku:
https://puppy-love-furever.herokuapp.com/
User credential:
CREATE UR OWN!

Organization credentials
username: SPCA
password:12345

DEMO:

![](loginuser.gif)
![](chatuser.gif)
![](orgchat.gif)
![](orggif.gif)