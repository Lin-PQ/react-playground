import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false }); // 去掉右上角那个转圈圈

const ProgressBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    // 稍微延迟一点结束，为了视觉效果
    const timer = setTimeout(() => {
      NProgress.done();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]); // 监听路径变化

  return null;
};

export default ProgressBar;
