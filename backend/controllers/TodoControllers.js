const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        console.error("Error occurred while fetching ToDo:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports.saveToDo = async (req, res) => {
    try {
        const { text } = req.body;
        const data = await ToDoModel.create({ text });
        console.log("Added Successfully....");
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error("Error occurred while saving ToDo:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports.updateToDo = async (req, res) => {
    try {
        const { _id, text } = req.body;
        await ToDoModel.findByIdAndUpdate(_id, { text });
        res.send("Updated Successfully....");
    } catch (error) {
        console.error("Error occurred while updating ToDo:", error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports.deleteToDo = async(req, res) => {
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("deleted  SuccessFully...."))
    .catch((error) => console.log(error))
}