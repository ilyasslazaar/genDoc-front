import React from "react";
import { DefaultLayout } from "./layouts";
import ShowTypes from "./views/ShowTypes";
import ShowDocs from "./views/ShowDocs";
import Errors from "./views/Errors";
import AddType from "./views/AddType";
import GenerateDoc from "./views/GenerateDoc";
import Home from "./views/Home";

export default [
  {
    path: "",
    exact: true,
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/generate-doc",
    layout: DefaultLayout,
    component: GenerateDoc
  },
  {
    path: "/show-docs",
    layout: DefaultLayout,
    component: ShowDocs
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
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  }
];
