const Modal = (modal) => {}

Modal.fetchItems = result => {
    result(null,({msg:'Hello From Modal'}))
}

module.exports = Modal;