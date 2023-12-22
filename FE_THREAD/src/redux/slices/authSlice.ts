import apiConfig from "@/api/apiConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  currentUser: null | UserType;
  isLoading: boolean;
}

interface UserType {
  user: object;
  token: string;
}

interface LoginParams {
  email: string;
  password: string;
}

interface RegisterParams {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  "/create",
  async ({ username, fullName, email, password }: RegisterParams) => {
    try {
      const response = await apiConfig.post("/register", {
        username,
        fullName,
        email,
        password,
      });
      return response;
    } catch (error) {
      console.error("Error during login:", error);
      if (axios.isAxiosError(error)) {
        throw error.response!.data.message;
      }
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  "/login",
  async ({ email, password }: LoginParams) => {
    try {
      const response = await apiConfig.post("/login", {
        email,
        password,
      });

      const data: UserType = response.data;
      console.log(data);

      return data;
    } catch (error) {
      
      if (axios.isAxiosError(error)) {
        console.error("Error during login:", error);
        throw error.response!.data.message;
      }
      throw error;
    }
  }
);

const initialState: AuthState = {
  currentUser: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
       
      });

    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
  },
});

// export { initialState };
export default authSlice.reducer;