import { Api, LOCAL_STORAGE_KEY } from '@commons/constant'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { customFetch } from 'utils/axios'
import {
  addItemToLocalStorage,
  getItemFromLocalstorage,
} from 'utils/localStorage'

let lang = getItemFromLocalstorage(LOCAL_STORAGE_KEY.LANG)
if (!lang) {
  lang = 'vn'
  addItemToLocalStorage(LOCAL_STORAGE_KEY.LANG, lang)
}
const initialState = {
  language: lang,
  // isSidebarOpen: false,
  // isFocusedInSidebar: false,
  // isSidebarHidden: false,
}

// get menu
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language === 'en'
        ? (state.language = 'vn')
        : (state.language = 'en')
    },

    // setIsSidebarOpen: (state, { payload }) => {
    //   state.isSidebarOpen = payload
    // },
    // setIsFocusedInSidebar: (state, { payload }) => {
    //   console.log(payload)
    //   state.isFocusedInSidebar = payload
    // },
    // setIsSidebarHidden: (state, { payload }) => {
    //   state.isSidebarHidden = payload
    // },
  },
})

export const {
  toggleLanguage,
} = uiSlice.actions

export default uiSlice.reducer
