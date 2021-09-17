import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// function getRouteComponent(path_file) {
//     return "./components/backend/" + path_file + "Component.vue";
// }
function setComponent(path_file) {
    const route_path = "./components/backend/pages/" + path_file + "Component.vue";
    return import ("" + route_path);
}

const routes = [
    { path: "*", component: () => setComponent("error/404") },
    {
        path: "/",
        redirect: { path: '/home' }
    },
    { path: "/home", component: () => setComponent("dashboard/Home"), name: "Home" },
    {
        path: "/users",
        component: () => setComponent("management/user/User"),
        name: "Users",
    },
    {
        path: "/create/users",
        component: () => setComponent("management/user/UserForm"),
        name: "CreateUsers",
    },
    {
        path: "/edit/users/:id",
        component: () => setComponent("management/user/EditUser"),
        name: "edituser",
    },
    {
        path: "/user/:id",
        component: () => setComponent("management/user/UserForm"),
        name: "User Update",
    },
    { path: "/roles", component: () => setComponent("management/role/Role"), name: "Roles" },
    { path: "/create/roles", component: () => setComponent("management/role/CreateRole"), name: "CreateRoles" },
    { path: "/edit/roles/:id", component: () => setComponent("management/role/CreateRole"), name: "EditRoles" },

    { path: "/permissions", component: () => setComponent("management/permission/Permission"), name: "permissions", },
    { path: "/create/permissions", component: () => setComponent("management/permission/CreatePermission"), name: "createpermissions", },

];

const router = new VueRouter({
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active" // short for `
});

router.beforeResolve((to, from, next) => {
    //
    next();
});

router.afterEach((to, from) => {
    // setTimeout(function() { $('.page-loader-wrapper').fadeOut(); }, 50);
});
export default router;
