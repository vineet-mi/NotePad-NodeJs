const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs")
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));




app.get('/',function(req,res){
    fs.readdir(`./files`, function(err,files){
        res.render("index",{files:files});
    })
});
app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}`, req.body.details, ()=>{
        res.redirect("/")
    })
});
app.get('/files/:filename',function(req,res){
    const name = req.params.filename;
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        res.render("show",{title:name,details:filedata})
    })
   
});
app.get('/edit/:filename',function(req,res){
    const name = req.params.filename;
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        res.render("edit",{title:name,details:filedata})
    })
   
});

app.post('/edit',function(req,res){
    

    fs.writeFile(`./files/${req.body.title.split(' ').join('')}`, req.body.details, ()=>{
        res.redirect("/")
    })
});

app.listen(3000);