import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

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

app.listen(PORT , () => console.log(`App rodando na porta ${PORT}`));

