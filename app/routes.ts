import { type RouteConfig, index ,prefix,route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),

      ...prefix("users", [
    index("routes/user.tsx"),
    route(":id", "routes/userdetail.tsx"),
  ]),
] satisfies RouteConfig;
