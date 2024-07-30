import {configureStore} from '@reduxjs/toolkit'
import { Strikethrough } from 'lucide-react';
import { thunk } from 'redux-thunk'

const initialRducer={
    name:""
}


const store=configureStore({
    reducer:initialRducer
    
})
export default store;