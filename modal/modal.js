const sql = require('../config/dbConfig')
const Modal = () => {}

Modal.fetchItems = result => {
    sql.query("SELECT * FROM tbl_items LIMIT 20",(err,data) =>{
        if(err) result(null,err)
        result(null,data)
    })
}

Modal.fetchSingleItems = (id,result) => {
    sql.query("SELECT * FROM tbl_items WHERE Item_ID = ?",[id],(err,data) => {
        if(err) result(null,err)
        result(null,data)
    })
}

module.exports = Modal;