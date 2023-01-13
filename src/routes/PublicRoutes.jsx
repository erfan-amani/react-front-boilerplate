import { Route, Routes } from "react-router-dom";

const publicRoutes = [
  {
    path: "/",
    component: () => <div>Main Page</div>,
  },
];

export const PublicRoutes = () => (
  <Routes>
    {publicRoutes.map(({ exact = false, path, component: Component }, i) => {
      return (
        <Route key={i} exact={exact} path={path} element={<Component />} />
      );
    })}
  </Routes>
);

export default PublicRoutes;
