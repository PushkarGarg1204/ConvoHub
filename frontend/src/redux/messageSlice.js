import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",

  initialState: {
    messages: [],
  },

  reducers: {
    // Used when fetching existing messages from the backend
    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    // Used when receiving a new message through Socket.IO
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages, addMessage } = messageSlice.actions;

export default messageSlice.reducer;
