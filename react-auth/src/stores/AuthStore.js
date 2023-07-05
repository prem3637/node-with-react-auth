import { create } from "zustand";
const AuthStore = create((set) => ({
  loggedIn: null,
  loginForm: {
    email: "",
    password: "",
  },
  signup: {
    email: "",
    password: "",
  },
  updateLoginForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  login: async (e) => {
    const { loginForm } = AuthStore.getState();
    const res = await fetch("http://localhost:5000/login", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      body: JSON.stringify(loginForm),
    });
    if (res.ok) {
      set({ loggedIn: true ,loginForm:{
        email:'',
        password:''
      }});
    }
    return res
  },
  checkAuth: async () => {
    try {
      const res = await fetch("http://localhost:5000/check-auth", {
        credentials: "include",
      });
      console.log(res, "prem");
      if (res.ok) {
        set({ loggedIn: true });
      }
    } catch (err) {
      set({ loggedIn: false });
    }
  },
  updateSignupForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        signup: {
          ...state.signup,
          [name]: value,
        },
      };
    });
  },
  Signup: async (e) => {
    const { signup } = AuthStore.getState();
    try {
      const res = await fetch("http://localhost:5000/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        method: "POST",
        body: JSON.stringify(signup),
      });
      if(res.ok){
        set({signup:{
            email:'',
            password:''
        }})
      }
    } catch (err) {
      console.log(err);
    }
  },
  logout:async()=>{
    const res = await fetch("http://localhost:5000/logout", {
        credentials: "include",
      });
  }
}));
export default AuthStore;
