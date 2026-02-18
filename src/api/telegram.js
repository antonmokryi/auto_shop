import axios from "axios";

const TOKEN = "8563486553:AAFcRtrVzad606ByvE1mVdzcml1IyAnzhwc"
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const CHAT_ID = 440380344

const sendMessage = async (message) => {
    try{
        await axios.post(URL, {
            chat_id: CHAT_ID,
            text: message,
        })
    }catch(err){
        console.log(err);
    }
}

export default sendMessage;