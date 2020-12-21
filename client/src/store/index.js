/*
 * VueX - State Management
 */

import Vue from "vue";
import Vuex from "vuex";

// Register Vuex
Vue.use(Vuex);

// Helpers
const helpers = {
  getWindowWidth() {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  },
  getCurrentYear() {
    return new Date().getFullYear();
  }
};

import router from "@/router";

import axios from "axios";
import { pick, findIndex , filter } from "lodash";
import configs from '@/configs';
const serverAPIURL = configs.API_SERVER_URL
// Vuex Store
export default new Vuex.Store({
  modules: {
    products:{
      namespaced: true,
      state:{
        products:[]
      },
      getters:{},
      actions:{
        async fetchProducts({commit,rootState}){
          const response = await axios.get(
            `${serverAPIURL}product`,
            {
              headers: {
                Authorization: `Bearer ${rootState.token}`
              }
            }
          );
          const products = response.data.products;
          console.log(products);
          commit("setProducts", products);
        },
        async createProduct({commit,rootState},product){
          try {
            await axios.post(
              `${serverAPIURL}product`,
              {
                ...product
              },
              {
                headers:{
                  Authorization: `Bearer ${rootState.token}`
                }
              } 
            );
            commit("pushProduct",product);
          } catch (error) {
            console.log(error);
            console.dir(error);
          }
        },
        async deleteProduct({commit, rootState},productSlug){
          try {
            await axios.delete(
              `${serverAPIURL}product/${productSlug}`,
              {
                headers: {
                  Authorization: `Bearer ${rootState.token}`
                }
              }
            );
            commit("deleteProduct",productSlug);
          } catch (error) {
            console.log(error);
          }
        }
      },
      mutations:{
        setProducts(state,products){
          state.products = products;
        },
        pushProduct(state,product){
          state.products=[...state.products,product]
        },
        deleteProduct(state,productSlug){
          state.products= state.products.filter(product=>product.default_spec.slug!==productSlug);
        }
      }
    },
    authentication: {
      namespaced: true,
      state: {
        currentUser: {
          username: ""
        },
        error: ""
      },
      getters: {},
      actions: {
        signIn: async ({ commit, rootState }, credentials) => {
          try {
            console.log(credentials);
            const response = await axios.post(
              `${serverAPIURL}sign-in`,
              {
                ...credentials
              }
            );

            // if(response.data.role !== "admin") throw

            console.log(response);

            const { token, role } = response.data;
            
            if(role !== 'admin') throw new Error("Bạn không phải là Admin!")

            rootState.token = token;
            localStorage.setItem("token", token);
            router.push("/backend");

            const user = {
              username: credentials.username,
            }

            commit("setCurrentUser", user);
            localStorage.setItem("user", JSON.stringify(user));
          } catch (err) {
            if(err.response) {
              return commit('setError', err.response.data.message)
            }
            commit('setError', err.message)
          }
        },
        updateCurrentUser: async ({ commit }, currentUser) => {
          commit("setCurrentUser", currentUser);
        },
        logOut :async({commit,rootState})=>{
          console.log(rootState.token);
          try {
            await axios.post(`${serverAPIURL}sign-out`,
            {
              
            },
            {
              headers: {
                Authorization: `Bearer ${rootState.token}`
              }
            }
            );
            commit("removeCurrentData");
            rootState.token="";
            rootState.users.users = []
          } catch (error) {
            console.log(error.response);

          }
        }
      },
      mutations: {
        setCurrentUser(state, user) {
          state.currentUser = user
        },
        removeCurrentData(state){
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          state.currentUser={};
        },
        setError(state, err){
          state.error = err;
        }
      }
    },
    users: {
      namespaced: true,
      state: {
        users: []
      },
      getters: {},
      actions: {
        async fetchUsers({ commit, rootState }) {
          const response = await axios.get(
            `${serverAPIURL}user`,
            {
              params: {
                limit: 500
              },
              headers: {
                Authorization: `Bearer ${rootState.token}`
              }
            }
          );
          const { users } = response.data;
          console.log(users);
          commit("setUsers", users);
        },
        async createUser({ commit, rootState }, user) {
          try {
            await axios.post(
              `${serverAPIURL}user`,
              {
                ...user
              },
              {
                headers: {
                  Authorization: `Bearer ${rootState.token}`
                }
              }
            );

            commit("pushUser", user);
          } catch (err) {
            console.log(err);
          }
        },
        async deleteUser({ commit, rootState }, username) {
          try {
            await axios.delete(
              `${serverAPIURL}user/${username}`,
              {
                headers: {
                  Authorization: `Bearer ${rootState.token}`
                }
              }
            );
            commit("deleteUser", username);
          } catch (error) {
            console.log(error);
          }
        },
        async updateUser({ commit, rootState }, { username, data }) {
          const sanitizedData = pick(data, ["password", "role"]);
          console.log(sanitizedData);
          try {
            await axios.put(
              `${serverAPIURL}user/${username}`,

              {
                ...sanitizedData
              },

              {
                headers: {
                  Authorization: `Bearer ${rootState.token}`
                }
              }
            );

            commit("updateUser", { username, sanitizedData });
          } catch (error) {
            console.log(error.response);
          }
        }
      },
      mutations: {
        setUsers: (state, users) => {
          state.users = users;
        },
        pushUser: (state, user) => {
          state.users = [...state.users, user];
        },
        deleteUser: (state, username) => {
          state.users = state.users.filter(user => user.username !== username);
        },
        updateUser: (state, { username, sanitizedData }) => {
          let userIndex = findIndex(state.users, { username: username });
          Vue.set(state.users, userIndex, {
            ...state.users[userIndex],
            ...sanitizedData
          });
        },
      }
    },
    images:{
      namespaced : true,
      state:{
        images:[]
      },
      getters:{},
      actions:{
        async fetchImages({ commit, rootState }) {
          try {
            const response = await axios.get(
              `${serverAPIURL}images`,
              {
                headers: {
                  Authorization: `Bearer ${rootState.token}`
                }
              }
            );
            const images = response.data.images;
            // console.log(images);
            commit("setImages", images);
            
          } catch (error) {
            console.log(error);
          }
        },
        async uploadImage({ commit, rootState }, formData) {
          try {
            const response = await axios.post(
              `${serverAPIURL}images`,
              formData,
              {
                headers: {
                  Authorization: `Bearer ${rootState.token}`
                }
              }
            );

            const {image} = response.data
            
            commit("pushImage", image)
          } catch (err) {
            console.log(err);
          }
        },
        async deleteImages({ commit, rootState }, objectToDelete) {
          try {
            await axios.delete(
              `${serverAPIURL}images`,
              {
                headers: {
                  Authorization: `Bearer ${rootState.token}`
                },
                data:{
                  "imageNames":objectToDelete
                }
              }
            );
            commit("deleteImages", objectToDelete);
          } catch (error) {
            console.log(error);
          }
        },
      },
      mutations:{
        setImages : (state,images)=>{
          state.images = images;
        },
        pushImage : (state,image)=>{
          state.images = [...state.images,image]
        },
        deleteImages : (state,objectToDelete)=>{
          state.images = filter(state.images,(o)=>{
            return !objectToDelete.includes(o.name)
          })
        }
      },
    },
  },
  
  state: {
    token: null,
    // App vital details
    app: {
      name: "Admin by Hwi",
      version: process.env.PACKAGE_VERSION,
      copyright: helpers.getCurrentYear()
    },

    // Default layout options
    layout: {
      header: true,
      sidebar: true,
      sideOverlay: true,
      footer: true
    },

    // Default template settings
    // Various of them are also set in each layout variation under layouts/variations/ folder
    settings: {
      colorTheme: "", // 'amethyst', 'city', 'flat', 'modern', 'smooth'
      sidebarLeft: true,
      sidebarMini: false,
      sidebarDark: true,
      sidebarVisibleDesktop: true,
      sidebarVisibleMobile: false,
      sideOverlayVisible: false,
      sideOverlayHoverable: false,
      pageOverlay: true,
      headerFixed: true,
      headerDark: false,
      headerSearch: false,
      headerLoader: false,
      pageLoader: false,
      rtlSupport: false,
      sideTransitions: true,
      mainContent: "" // 'boxed', ''narrow'
    }
  },
  getters: {
    // Get App name
    appName: state => {
      return state.app.name;
    },
    // Get App version
    appVersion: state => {
      return state.app.version;
    },
    // Get App copyright year
    appCopyright: state => {
      return state.app.copyright;
    },
    // Get app color theme
    appColorTheme: state => {
      return state.settings.colorTheme;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("updateToken", token);
    }
  },
  mutations: {
    updateToken(state, token) {
      console.log(token);
      state.token = token;
    },
    // Sets the layout, useful for setting different layouts (under layouts/variations/)
    setLayout(state, payload) {
      state.layout.header = payload.header;
      state.layout.sidebar = payload.sidebar;
      state.layout.sideOverlay = payload.sideOverlay;
      state.layout.footer = payload.footer;
    },
    // Sets sidebar visibility (open, close, toggle)
    sidebar(state, payload) {
      if (helpers.getWindowWidth() > 991) {
        if (payload.mode === "open") {
          state.settings.sidebarVisibleDesktop = true;
        } else if (payload.mode === "close") {
          state.settings.sidebarVisibleDesktop = false;
        } else if (payload.mode === "toggle") {
          state.settings.sidebarVisibleDesktop = !state.settings
            .sidebarVisibleDesktop;
        }
      } else {
        if (payload.mode === "open") {
          state.settings.sidebarVisibleMobile = true;
        } else if (payload.mode === "close") {
          state.settings.sidebarVisibleMobile = false;
        } else if (payload.mode === "toggle") {
          state.settings.sidebarVisibleMobile = !state.settings
            .sidebarVisibleMobile;
        }
      }
    },
    // Sets sidebar mini mode (on, off, toggle)
    sidebarMini(state, payload) {
      if (helpers.getWindowWidth() > 991) {
        if (payload.mode === "on") {
          state.settings.sidebarMini = true;
        } else if (payload.mode === "off") {
          state.settings.sidebarMini = false;
        } else if (payload.mode === "toggle") {
          state.settings.sidebarMini = !state.settings.sidebarMini;
        }
      }
    },
    // Sets sidebar position (left, right, toggle)
    sidebarPosition(state, payload) {
      if (payload.mode === "left") {
        state.settings.sidebarLeft = true;
      } else if (payload.mode === "right") {
        state.settings.sidebarLeft = false;
      } else if (payload.mode === "toggle") {
        state.settings.sidebarLeft = !state.settings.sidebarLeft;
      }
    },
    // Sets sidebar style (dark, light, toggle)
    sidebarStyle(state, payload) {
      if (payload.mode === "dark") {
        state.settings.sidebarDark = true;
      } else if (payload.mode === "light") {
        state.settings.sidebarDark = false;
      } else if (payload.mode === "toggle") {
        state.settings.sidebarDark = !state.settings.sidebarDark;
      }
    },
    // Sets side overlay visibility (open, close, toggle)
    sideOverlay(state, payload) {
      if (payload.mode === "open") {
        state.settings.sideOverlayVisible = true;
      } else if (payload.mode === "close") {
        state.settings.sideOverlayVisible = false;
      } else if (payload.mode === "toggle") {
        state.settings.sideOverlayVisible = !state.settings.sideOverlayVisible;
      }
    },
    // Sets side overlay hover mode (on, off, toggle)
    sideOverlayHover(state, payload) {
      if (payload.mode === "on") {
        state.settings.sideOverlayHoverable = true;
      } else if (payload.mode === "off") {
        state.settings.sideOverlayHoverable = false;
      } else if (payload.mode === "toggle") {
        state.settings.sideOverlayHoverable = !state.settings
          .sideOverlayHoverable;
      }
    },
    // Sets page overlay visibility (on, off, toggle)
    pageOverlay(state, payload) {
      if (payload.mode === "on") {
        state.settings.pageOverlay = true;
      } else if (payload.mode === "off") {
        state.settings.pageOverlay = false;
      } else if (payload.mode === "toggle") {
        state.settings.pageOverlay = !state.settings.pageOverlay;
      }
    },
    // Sets header mode (fixed, static, toggle)
    header(state, payload) {
      if (payload.mode === "fixed") {
        state.settings.headerFixed = true;
      } else if (payload.mode === "static") {
        state.settings.headerFixed = false;
      } else if (payload.mode === "toggle") {
        state.settings.headerFixed = !state.settings.headerFixed;
      }
    },
    // Sets header style (dark, light, toggle)
    headerStyle(state, payload) {
      if (payload.mode === "dark") {
        state.settings.headerDark = true;
      } else if (payload.mode === "light") {
        state.settings.headerDark = false;
      } else if (payload.mode === "toggle") {
        state.settings.headerDark = !state.settings.headerDark;
      }
    },
    // Sets header search visibility (on, off, toggle)
    headerSearch(state, payload) {
      if (payload.mode === "on") {
        state.settings.headerSearch = true;
      } else if (payload.mode === "off") {
        state.settings.headerSearch = false;
      } else if (payload.mode === "toggle") {
        state.settings.headerSearch = !state.settings.headerSearch;
      }
    },
    // Sets header loader visibility (on, off, toggle)
    headerLoader(state, payload) {
      if (payload.mode === "on") {
        state.settings.headerLoader = true;
      } else if (payload.mode === "off") {
        state.settings.headerLoader = false;
      } else if (payload.mode === "toggle") {
        state.settings.headerLoader = !state.settings.headerLoader;
      }
    },
    // Sets page loader visibility (on, off, toggle)
    pageLoader(state, payload) {
      if (payload.mode === "on") {
        state.settings.pageLoader = true;
      } else if (payload.mode === "off") {
        state.settings.pageLoader = false;
      } else if (payload.mode === "toggle") {
        state.settings.pageLoader = !state.settings.pageLoader;
      }
    },
    // Sets main content mode (full, boxed, narrow)
    mainContent(state, payload) {
      if (payload.mode === "full") {
        state.settings.mainContent = "";
      } else if (payload.mode === "boxed") {
        state.settings.mainContent = "boxed";
      } else if (payload.mode === "narrow") {
        state.settings.mainContent = "narrow";
      }
    },
    // Sets active color theme
    setColorTheme(state, payload) {
      // Matches all classes which start with "theme-"
      let regx = new RegExp("\\btheme-[^ ]*[ ]?\\b", "g");

      // Set new theme
      state.settings.colorTheme = payload.theme || "";

      // Remove all classes which start with "theme-" from body element
      document.body.className = document.body.className.replace(regx, "");

      // If theme is set, add the theme class to body element
      if (payload.theme) {
        document.body.classList.add("theme-" + payload.theme);
      }
    }
  }
});
