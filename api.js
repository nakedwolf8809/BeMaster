const fetch = require("node-fetch");

fetch("https://api.github.com/search/repositories?q=user:google&sort=stars&per_page=10").then((respuesta)=>{
   return respuesta.json()
}).then((resp)=>{
    for(var i in resp.items){
        console.log(resp.items[i].owner.login);
        console.log(resp.items[i].full_name);
        console.log(resp.items[i].html_url);
        console.log(resp.items[i].stargazers_count);
    }
    
});