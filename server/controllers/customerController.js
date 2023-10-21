// GET /
// homepage

exports.homepage =async (req,res)=>{
    const locals={
        title:"Nodejs",
        description:"Nodejs User Mangement System"
    }
    res.render('index',locals)
}
// GET /
// Add Customer

exports.addCustomer =async (req,res)=>{
    const locals={
        title:"Add New Customer",
        description:"Nodejs User Mangement System"
    }
    res.render('customer/add',locals)
}