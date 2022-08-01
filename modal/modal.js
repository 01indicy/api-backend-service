const sql = require('../config/dbConfig')
const Modal = () => {}

Modal.fetchItems = (request,result) => {
    const page = parseInt(request.page);
    const limit = parseInt(request.limit);
    const offset = (page - 1) * limit
    sql.query("SELECT * FROM tbl_items LIMIT ? OFFSET ?",[limit,offset],(err,data) =>{
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

Modal.updateSingleItems = (id,body,result) => {
    sql.query("UPDATE tbl_items SET Product_Name = ? WHERE Item_ID = ?",[body.Product_Name,id],(err,data) => {
        if(err) result(null,err)
        result(null,data)
    })
}

Modal.deleteItems = (id,result) => {
    sql.query("DELETE tbl_items WHERE Item_ID = ?",[id],(err,data) => {
        if(err) result(null,err)
        result(null,data)
    })
}

module.exports = Modal;