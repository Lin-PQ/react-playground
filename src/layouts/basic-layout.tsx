import { Button, Layout, theme } from 'antd';
import { HomeOutlined, ArrowLeftOutlined, GithubOutlined } from '@ant-design/icons';

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
      {/* 顶部导航栏 */}
      <Header 
        style={{ background: colorBgContainer }} 
        className="flex items-center justify-between px-6 border-b border-gray-100 sticky top-0 z-50 shadow-sm"
      >
        <div className="flex items-center gap-4">
          {/* 非首页显示返回按钮 */}
          {!isHome && (
            <Button 
              type="text" 
              icon={<ArrowLeftOutlined />} 
              onClick={() => navigate(-1)}
            />
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
          className="max-w-5xl mx-auto min-h-[80vh]"
          style={{ background: isHome ? 'transparent' : colorBgContainer, borderRadius: 8, padding: isHome ? 0 : 24 }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default BasicLayout;
