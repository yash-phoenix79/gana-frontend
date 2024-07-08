import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Example slice
import exampleReducer from '../features/exampleSlice';

export const store = configureStore({
    reducer: {
        example: exampleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
