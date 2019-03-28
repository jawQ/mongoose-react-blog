export default obj_router = App => [
  {
    path: "/panel",
    exact: true,
    component: App
    
  },
  {
    path: "/child/:id",
    component: Child,
    children: [
      {
        path: "/child/:id/grand-child",
        component: GrandChild
      }
    ]
  }
]