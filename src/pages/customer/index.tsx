import { Button } from 'antd';

import DepartmentIcon from '@/assets/department.svg?react';

const User: React.FC = () => {
  console.log('3');
  return (
    <div className="bg-green-100">
      <DepartmentIcon className="h-20 w-20 text-blue-500 hover:text-red-500" />
      44<Button>22</Button>
    </div>
  );
};

export default User;
