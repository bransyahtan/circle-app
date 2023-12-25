/* eslint-disable @typescript-eslint/no-explicit-any */
import apiConfig from "@/api/apiConfig"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface userState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currentUser: any;
    isLoading: boolean;
  }
  
export const getAllUser:any = createAsyncThunk("/getAllUser", async () =>{
    try {
      const response = await apiConfig.get(`/users`)
      console.log(response.data.data)
      return response.data.data
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log(error.message)
    }
  })

  const initialState: userState = {
    currentUser: [],
    isLoading: false,
  };


  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
      
      builder
      .addCase(getAllUser.pending, (state)=> {
        state.isLoading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action)=> {
        state.isLoading = false;
        // state.currentUser = action.payload
        state.currentUser = action.payload;
  
      })
    },
  });

  export default userSlice.reducer;