import mysql from 'mysql';
//importing mysql package from nodejs
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeems',
})

con.connect(function(err){
    if (err) {
        console.log("error")
    }else{
        console.log("success")
    }
})
export default con;