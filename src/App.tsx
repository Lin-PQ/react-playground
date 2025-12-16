import { Suspense } from 'react';

import { ConfigProvider, Spin } from 'antd';
import zhCN from 'antd/locale/zh_CN';
// 这个 ~react-pages 是插件生成的虚拟模块
import routes from '~react-pages';

import BasicLayout from '@/layouts/basic-layout';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <BasicLayout />,
      children: routes,
    },
  ]);
  return (
    // Suspense 是必须的，因为自动路由默认是懒加载的
    <ConfigProvider locale={zhCN}>
      <Suspense
        fallback={
          <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-slate-50">
            <Spin size="large" />
            <div className="text-sm font-medium text-slate-500">页面加载中...</div>
          </div>
        }
      >
        {element}
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
