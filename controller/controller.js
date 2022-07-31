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

exports.updateItem = (req,res) => {
    Modal.updateSingleItems(req.params.id,req.body,(err,data) => {
        if(err) res.status(500).send({error:'Error from controller 3'})
        else res.send(data);
    })
}

exports.deleteItems = (req,res) => {
    Modal.deleteItems(req.params.id,(err,data) =>{
        if(err) res.status(500).send({error:'Error from controller 2'})
        else res.send(data);
    })
}