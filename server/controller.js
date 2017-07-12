module.exports = {
   
    getAllMessages: (req, res) => {
        req.app.get('db').get_messages().then(foundMessages => {
            res.json(foundMessages);
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    createMessage: (app, messageData) => {
        const db = app.get('db')
        console.log(db)
        const message = messageData.message_body;
        const sender_id = messageData.sender_id
        console.log(message);
        return db.create_message([message, sender_id]).then(resp => {
            return resp
            console.log(resp)
        })
    },

}