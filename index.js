const express = require('express');
const path=require('path');
const wiki = require('wikipedia');
const port =8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

async function wikisearch (input) {
	try {
		const page = await wiki.page(input);
		// console.log(page);
        console.log("------");
		//Response of type @Page object
		const summary = await page.summary();
		// console.log(summary);
        return summary;
		//Response of type @wikiSummary - contains the intro and the main image
	} catch (error) {
		return "error";
		//=> Typeof wikiError
	}
};

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/title", async (req,res)=>{
    try{
    let input=req.query.title;
    // console.log(input);
    let result=await wikisearch(input);
    if(result==="error"){
        res.send("Cannot find this page");
    }else{
        res.render("discription.ejs",{result});
    }
    console.log(result);
    }catch(error){
        // console.log(error);
        res.send(input,"Not found");
    }
});