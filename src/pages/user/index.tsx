import { Button } from 'antd';

import { useUserStore } from '@/store/use-user-store';

const User: React.FC = () => {
  const { bears, increase } = useUserStore();
  return (
    <div>
      <Button
        onClick={() => {
          increase();
        }}
      >
        +1
      </Button>
      {bears}
    </div>
  );
};

export default User;
