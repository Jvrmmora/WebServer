const express = require('express');
const router = express.Router();

var product = [
    {id:1, 
     name:'producto 1' 
    },
    {id:2, 
     name:'producto 2' 
    },
    {id:3, 
     name:'producto 3' 
    },
]

var coupon = [
    {   id:1, 
        name:'producto 3', 
        description: 'Bono de producto', 
        product_id:3 , 
        valid_since: '2020-02-25T00:00:00.000', 
        valid_until: '2020-02-25T23:59:00.999'
    },

]

const auth = (req,res,next ) => {
    let auth = req.headers.auth;
    if(auth == "admin"){
        next();
    }else{
        res.status(200).json({

            message : 'Error 401'
        });
    }
}
const authCustomer = (req,res,next ) => {
    let auth = req.headers.auth;
    if(auth == "customer"){
        next();
    }else{
        res.status(200).json({

            message : 'Error 401'
        });
    }
}
const getAllProducts = (req, res) => {
    
    res.status(200).json({
        ok:true,
        data : product
    });
}


router.get('/products', [auth, getAllProducts]); 



module.exports = router;