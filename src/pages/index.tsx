// 这里的 routes 数组是由插件自动生成的，包含了你所有的页面路径
// @ts-ignore (如果 TS 报错找不到模块，加上这就行，或者检查 vite-env.d.ts)
import routes from "~react-pages";

const Index = () => {
  // 1. 过滤掉首页自己 ('/')，否则列表里会出现一个跳到自己的死循环链接
  // 2. 过滤掉可能存在的 404 页面
  const menuItems = routes.filter(
    (r: any) => r.path !== "/" && r.path !== "/*"
  );

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          🛠️ React 练功房
        </h1>
        <p className="text-slate-500 mb-8">
          当前已收录{" "}
          <span className="font-bold text-blue-600">{menuItems.length}</span>{" "}
          个练习
        </p>

        {/* 练习列表区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item: any) => (
            <Link
              key={item.path}
              to={item.path}
              className="block p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
            >
              <div className="flex justify-between items-center">
                <div>
                  {/* 自动把路径变成标题：比如 'use-state-demo' 显示为 'Use State Demo' */}
                  <h3 className="text-lg font-semibold text-slate-700 group-hover:text-blue-600 capitalize">
                    {item.path.replace("/", "").replace(/-/g, " ")}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{item.path}</p>
                </div>
                <span className="text-slate-300 group-hover:text-blue-500 text-xl">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 如果没有任何练习页面时的提示 */}
        {menuItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
            <p className="text-slate-500">
              还没有练习页面哦，快去 <code>src/pages</code> 下新建一个{" "}
              <code>Demo.tsx</code> 吧！
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
