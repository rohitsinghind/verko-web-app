import { CHATS_FAIL, CHATS_START, CHATS_SUCCESS, MESSAGES_CLEAR_SUCCESS, MESSAGES_FAIL, MESSAGES_START, MESSAGES_SUCCESS, POSTS_CLEAR_SUCCESS } from '../actions';

const initialState = {
    chatCount: 0,
    chatPage: 1,
    chats: [],
    chatsLoading: false,
    messageLoading: false,
    messages: [],
    messagesCount: 0,
    messagePage: 1,
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGES_CLEAR_SUCCESS:
            return {
                ...state,
                messageLoading: false,
                messages: []
            };
        case POSTS_CLEAR_SUCCESS:
            return {
                ...state,
                chatsLoading: false,
                chats: []
            };
        case CHATS_START:
            return {
                ...state,
                chatsLoading: true
            };
        case CHATS_SUCCESS:
            return {
                ...state,
                chatsLoading: false,
                chats:
                    action.data.page > 1
                        ? [...state.chats, ...action.data.chats]
                        : action.data.chats,
                chatCount: action.data.count,
                chatPage: action.data.page,
            };
        case CHATS_FAIL:
            return {
                ...state,
                chatsLoading: false
            };

        case MESSAGES_START:
            return {
                ...state,
                messageLoading: true
            };
        case MESSAGES_SUCCESS:
            const pushData = action.data.page > 1 &&
                state.messages && state.messages.length > 0 &&
                state.messages[0].conversationID == action.data.messages[0]?.conversationID;
            return {
                ...state,
                messageLoading: false,
                messages:
                    pushData
                        ? [...state.messages, ...action.data.messages]
                        : action.data.messages,
                messagesCount: action.data.count,
                messagePage: action.data.page,
            };
        case MESSAGES_FAIL:
            return {
                ...state,
                messageLoading: false
            };
        default:
            return state;
    }
};
export default chatReducer;
