import { AppRoutes } from "../Constants";
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";

type route = {
    path: String;
    component: JSX.Element;
}

export const routes: route[] = [
    // auth routes
    { path: AppRoutes.HOME, component: <Home children={undefined} /> },
  
    // user routes
    { path: AppRoutes.ABOUT, component: <About />},
  
    //user routes
    { path: AppRoutes.MENU, component: <Menu />},
  
    //user routes
    { path: AppRoutes.CONTACT, component: <Contact />}
]