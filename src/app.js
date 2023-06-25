import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const users = [];
const tweets = [];

// Configura uma função pra ser executada quando bater um GET na rota "/"
app.get("/tweets", (req, res) => {
    const sendObj = [];;
    for(let i = 0 ; i < 10 ; i++){
        if(tweets.length - i - 1 < 0){
            break;
        }
        let uname = tweets[tweets.length - 1 - i].username;
        let tweetUser = users.find( (user) => user.username === uname); 
        sendObj.push(
            {
                username: tweetUser.username ,
                tweet: tweets[tweets.length - i - 1].tweet ,
                avatar: tweetUser.avatar
            }
        )
    }
    res.send(sendObj);
});

app.post("/sign-up", (req, res) => {
    const newUser = {
        username: req.body.username ,
        avatar: req.body.avatar
    }
    users.push(newUser);
    res.send("Ok");
});

app.post("/tweets", (req, res) => {
    const isRegistered = users.some((user) => user.username === req.body.username);
    if(!isRegistered){
        res.send("UNAUTHORIZED")
    }
    else{
        let newTweet = {
            username: req.body.username , 
            tweet: req.body.tweet
        };
        tweets.push(newTweet);
        res.send("OK");        
    }
});

app.listen(PORT , () => console.log(`App rodando na porta ${PORT}`));

