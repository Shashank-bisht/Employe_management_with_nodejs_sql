import express from "express";
import con from "../utils/db.js"
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/adminlogin',(req, res) => {
    const sql = 'SELECT * from admin where email = ? and password = ?'
    con.query(sql, [req.body.email, req.body.password],(err,result)=>{
        console.log(req.body)
        if (err) { return res.json({loginStatus: false,Error: "Query error"})}
        if(result.length >0){
            const email = result[0].email;
            //creating token with playload
            const token = jwt.sign({role: 'admin',email:email},"jwt_secret_key",{expiresIn:'1d'}
            
            // cookie will expire after 1day
            )
            // console.log(token)
            // assign cookie 
            res.cookie('token',token,{httpOnly:true})
            return res.json({loginStatus: true})
        }else{
            return res.json({loginStatus: false,Error: "wrong credentials"})
        }
    })
})

export {router as adminRouter}