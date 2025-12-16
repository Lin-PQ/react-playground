import { Suspense } from "react";
// 这个 ~react-pages 是插件生成的虚拟模块
import routes from "~react-pages";
import BasicLayout from "@/layouts/basic-layout";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <BasicLayout />,
      children: routes,
    },
  ]);
  return (
    // Suspense 是必须的，因为自动路由默认是懒加载的
    <ConfigProvider locale={zhCN}>
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        {element}
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
