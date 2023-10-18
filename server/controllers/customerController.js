// GET /
// homepage

exports.homepage =async (req,res)=>{
    const locals={
        title:"Nodejs",
        description:"Nodejs User Mangement System"
    }
    res.render('index',locals)
}