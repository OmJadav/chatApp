const Message = require("../models/messageModel")
const Conversation = require("../models/conversationModel")


exports.sendMessage = async (req, res) => {

    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        // console.log("message sent", id);

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],

            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()])
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("error in sendMessage ---", error);
        res.status(500).json({ error: "sending Message error" });
    }
}
exports.getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}