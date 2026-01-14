export const sidebarData = [
  {
    section: "Main",
    id: "dashboard",
    title: "Dashboards",
    icon: "dashboard",
    children: [
      {
        label: "Overview",
        path: "/",
      },
    //   {
    //     label: "All Products",
    //     path: "/product",
    //   },
    //   {
    //     label: "Add Product",
    //     path: "/product/new-product",
    //   },
    ],
  },
  {
    section: "Manage Products",
    id: "products",
    title: "Products",
    children: [
      { label: "All Products", path: "/product" },
      { label: "Add Product", path: "/product/new" },
    ],
  },
  {
    section: "Pages",
    id: "authentication",
    title: "Authentication",
    children: [
      { label: "Login", path: "/login" },
      { label: "Register", path: "/register" },
      { label: "Forgot Password", path: "/forget-password" },
    ],
  },
  {
    section: "General",
    id: "forms",
    title: "Forms",
    children: [
      { label: "Basic Forms", path: "/basic-form" },
      { label: "Advanced Forms", path: "/form" },
    ],
  },
];
