const Modal = require('../modal/modal')

exports.readAllItems = (req,res) => {
    Modal.fetchItems((err,data) =>{
        if(err) res.status(500).send({error:'Error from controller'})
        else res.send(data);
    })
}