import { ErrorBoundary } from 'react-error-boundary';

import { ArrowLeftOutlined, GithubOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';

import ProgressBar from '@/components/progress-bar';

const { Header, Content } = Layout;

const BasicLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ant Design 5.x 获取当前主题的 token (用于获取背景色等)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 判断是否是首页
  const isHome = location.pathname === '/';

  return (
    <Layout className="min-h-screen">
      <ProgressBar />
      {/* 顶部导航栏 */}
      <Header
        style={{ background: colorBgContainer }}
        className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-100 px-6 shadow-sm"
      >
        <div className="flex items-center gap-4">
          {/* 非首页显示返回按钮 */}
          {!isHome && (
            <Button type="text" icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)} />
          )}
          <span className="text-lg font-bold text-gray-800">
            {isHome ? 'React 练功房 🧪' : location.pathname.replace('/', '')}
          </span>
        </div>

        <div className="flex gap-2">
          {!isHome && (
            <Button type="link" icon={<HomeOutlined />} onClick={() => navigate('/')}>
              回首页
            </Button>
          )}
          <Button type="text" icon={<GithubOutlined />} href="#" target="_blank" />
        </div>
      </Header>

      {/* 内容区域 */}
      <Content className="p-6">
        {/* 重点：Outlet 是子路由渲染的出口 
           你访问 /demo，Demo 组件就会显示在这里
        */}
        <div
          className="mx-auto min-h-[80vh] max-w-5xl"
          style={{
            background: isHome ? 'transparent' : colorBgContainer,
            borderRadius: 8,
            padding: isHome ? 0 : 24,
          }}
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        </div>
      </Content>
    </Layout>
  );
};

export default BasicLayout;
// 定义一个简单的报错显示的组件
function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
      <h2 className="mb-2 text-lg font-bold text-red-600">💥 组件崩溃了</h2>
      <pre className="mb-4 overflow-auto rounded bg-white p-4 text-left text-sm text-red-500">
        {error.message}
      </pre>
      <button
        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        onClick={resetErrorBoundary}
      >
        尝试恢复
      </button>
    </div>
  );
}
