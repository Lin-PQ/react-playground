import { Button, Card } from "antd";
import { useBoolean } from "ahooks";

const Demo = () => {
  // state 也就是当前的布尔值，{ toggle, setTrue, setFalse } 是操作方法
  const [state, { toggle, setTrue, setFalse }] = useBoolean(false);

  return (
    <div className="p-8">
      <Card title="基础练习：useBoolean" className="w-96">
        <p className="mb-4 text-lg">
          当前状态:
          <span
            className={`ml-2 font-bold ${state ? "text-green-500" : "text-red-500"}`}
          >
            {JSON.stringify(state)}
          </span>
        </p>

        <div className="flex gap-2">
          {/* 直接绑定方法，不用写箭头函数 */}
          <Button onClick={toggle} type="primary">
            切换 (Toggle)
          </Button>
          <Button onClick={setTrue}>设为 True</Button>
          <Button onClick={setFalse} danger>
            设为 False
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Demo;
