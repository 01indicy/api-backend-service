const Modal = require('../modal/modal')

exports.readAllItems = (req,res) => {
    Modal.fetchItems((err,data) =>{
        if(err) res.status(500).send({error:'Error from controller 1'})
        else res.send(data);
    })
}

exports.readSingleItems = (req,res) => {
    Modal.fetchSingleItems(req.params.id,(err,data) =>{
        if(err) res.status(500).send({error:'Error from controller 2'})
        else res.send(data);
    })
}