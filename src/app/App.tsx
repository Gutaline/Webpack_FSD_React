import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { Navbar } from "widget/Navbar";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { useTheme } from "shared/lib/hooks/useTheme";
import { PageLoader } from "widget/PageLoader/ui/PageLoader";

import "shared/config/i18n/i18n";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routeConfig.map((item) => (
            <Route
              path={item.path}
              key={item.path}
              element={
                <Suspense key={item.path} fallback={<PageLoader />}>
                  {item.element}
                </Suspense>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
