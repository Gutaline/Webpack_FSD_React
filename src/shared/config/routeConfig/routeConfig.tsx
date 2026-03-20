import { RouteProps } from "react-router-dom";

import MainPageAsync from "pages/MainPage/ui/MainPage";
import AboutPageAsync from "pages/AboutPage/ui/AboutPage.async";
import NotFoundPage from "pages/NotFoundPage";

export const enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "notfound",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
  {
    path: RoutePath.notfound,
    element: <NotFoundPage />,
  },
];
