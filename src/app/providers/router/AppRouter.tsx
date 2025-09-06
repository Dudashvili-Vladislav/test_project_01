import { Suspense } from 'react';

import { Spin } from 'antd';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '#/shared/config/routeConfig/routeConfig';

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<Spin />}>
            <div className="page-wrapper">
              {element}
            </div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
