//Layouts
import { HeaderOnly } from "~/layouts";
//Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

//Routes Public
const publicRouter = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/:nickname", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];
//Routes Private
const privateRouter = [];

export { privateRouter, publicRouter };
