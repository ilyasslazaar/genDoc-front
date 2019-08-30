import { DefaultLayout } from "./layouts";
import ShowTypes from "./views/ShowTypes";
import ShowDocs from "./views/ShowDocs";
import AddType from "./views/AddType";
import GenerateDoc from "./views/GenerateDoc";
import Login from "./views/Login";
import { connected } from "./constants/defaultValues";
import Home from "./views/Home";
import Error from "./views/Error";

export default () => {
  if (connected) {
    return [
      {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: GenerateDoc
      },
      {
        path: "/generate-doc",
        layout: DefaultLayout,
        component: GenerateDoc
      },
      {
        path: "/login",
        layout: DefaultLayout,
        component: Login
      },
      {
        path: "/add-type",
        layout: DefaultLayout,
        component: AddType
      },
      {
        path: "/show-types",
        layout: DefaultLayout,
        component: ShowTypes
      },
      {
        path: "/show-docs",
        layout: DefaultLayout,
        component: ShowDocs
      },
      {
        path: "/error",
        layout: DefaultLayout,
        component: Error
      }
    ];
  } else {
    return [
      {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: Home
      },
      {
        path: "/login",
        layout: DefaultLayout,
        component: Login
      },
      {
        path: "/error",
        layout: DefaultLayout,
        component: Error
      }
    ];
  }
};
