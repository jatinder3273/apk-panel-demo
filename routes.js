var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    layout: "/admin",
    display: true
  },
  {
    path: "/categories/add",
    name: "Add Category",
    icon: "ni ni-bullet-list-67 text-blue",
    layout: "/admin",
    display: false
  },
  {
    path: "/categories/edit/:id",
    name: "Edit Category",
    icon: "ni ni-bullet-list-67 text-blue",
    layout: "/admin",
    display: false
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "ni ni-bullet-list-67 text-blue",
    layout: "/admin",
    display: true
  },
  {
    path: "/apps-games",
    name: "Apps or Games",
    icon: "ni ni-button-play text-orange",
    layout: "/admin",
    display: true
  },
  {
    path: "/apps-games/add",
    name: "Add App or Game",
    icon: "ni ni-bullet-list-67 text-blue",
    layout: "/admin",
    display: false
  },
  {
    path: "/apps-games/edit/:id",
    name: "Edit App or Game",
    icon: "ni ni-bullet-list-67 text-blue",
    layout: "/admin",
    display: false
  },
];
export default routes;
