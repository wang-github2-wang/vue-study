import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import permission from "./modules/permission";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { user, permission },
  getters: {
    permission_routes: state => state.permission.routes,
  },
});

export default store;
