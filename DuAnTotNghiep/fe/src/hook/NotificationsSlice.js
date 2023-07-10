import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;