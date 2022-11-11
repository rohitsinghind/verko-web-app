export const SOCKET_EVENT = {
    JOIN_ALL: 'join_all',
    JOIN_CHAT: 'join_chat',
    CREATE_CHAT: 'create_chat',
    MESSAGE: 'message',
    SENT: 'sent',
    READ: 'read',
    RECEIVED: 'received',
    DISCONNECT: 'disconnect',
    TYPING: 'typing',
    ERROR: 'error',
};

export const SOCKET_EVENT_ACK = {
    CREATE_CHAT_ACK: 'create_chat_ack',
    MESSAGE_ACK: 'message_ack',
    SENT_ACK: 'sent_ack',
    READ_ACK: 'read_ack',
    RECEIVED_ACK: 'received_ack',
    DISCONNECT_ACK: 'disconnect_ack',
    TYPING_ACK: 'typing_ack',
    ERROR_ACK: 'error_ack',
};


export const ADD_LAST_MESSAGE_AND_SORT = (chats, lastMessage) => {
    if (lastMessage) {
        const findChat = chats.find(obj => obj._id === lastMessage.conversationID);
        if (findChat) {
            const newchat = chats.map(obj => {
                if (obj._id === lastMessage.conversationID) {
                    return {
                        ...obj,
                        updateDate: lastMessage.createDate,
                        lastMessage,
                        isNew: lastMessage.tempID ? false : true,
                    };
                }
                return obj;
            });
            return newchat.sort((a, b) => b.updateDate - a.updateDate);
        } else {
            return chats;
        }
    } else {
        return chats;
    }
};