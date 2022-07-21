import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formState/FormState';
import listReducer from './taskList/TaskList';
import CardTask from '../interface/interface';

export interface RootState {
  dataForm: {
    location: string;
    text: string;
    sign: string;
  },

  dataList: {
    list: Array<CardTask>
  }
}

export default configureStore({
  reducer: {
    dataForm: formReducer,
    dataList: listReducer
  },
});



