import axios from 'axios';

const TOKEN = "1fc313ad-df016a95-292dfe99-22bd8daf";
const w = "https://autozakaz.shop/api/product/price/"

export  const getData = async () => {
    try{
        const res = await axios.get(w, {
            params: {
                authKey: TOKEN
            }
        });
        console.log(res.data);
        return res.data;
    } catch(error){
        console.log(error);
    }
}


