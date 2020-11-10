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
const getAOneProduct = (req, res) => {

    res.status(200).json({
        ok:true,
        data : product.find(data => data.id === +req.params.id)
    });
}

const createBono = (req, res) => {
    // console.log(coupon.length + 1);
    coupon.push({
        id: coupon.length + 1,
        name: req.body.name,
        description: req.body.description,
        product_id: parseInt(req.body.product_id),
        valid_since: req.body.valid_since,
        valid_until: req.body.valid_until,

    })
    res.status(200).json({
        ok:true,
        data : coupon.find(data => data.id === parseInt(coupon.length))
    });
}


router.get('/product/:id', [auth, getAOneProduct]); 
router.get('/product', [auth, getAllProducts]); 
router.post('/bono/create', [auth, createBono]); 




module.exports = router;