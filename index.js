const express=require("express");
const path=require("path");
const app=express();
const port=8080;

//  for seving static files
app.use('/staticfile', express.static('staticpage'));
app.use(express.urlencoded())


app.set('view engine', 'pug')

app.set('views', path.join(__dirname,'views'));

  app.get('/',  (req, res) => {
      const con="This is my web page using pug"
      const val={'title':'my pug demo',content:con }
    res.render('demo.pug',val);
  });
  app.listen(port,  ()=>{
    console.log("server stareted on" + port);
});
