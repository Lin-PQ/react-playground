import MockAdapter from "axios-mock-adapter";
import request from "@/utils/request"; 

// 只有在开发环境且开启 mock 时才启用
const isDev = import.meta.env.DEV;
const useMock = true; // 开关

if (isDev && useMock) {
  const mock = new MockAdapter(request, { delayResponse: 500 }); // 模拟 500ms 延迟

  // 模拟用户列表接口
  mock.onGet("/users").reply(200, {
    code: 200,
    message: "success",
    data: [
      { id: 1, name: "John Doe", role: "Admin" },
      { id: 2, name: "Jane Smith", role: "User" },
    ],
  });

  // 模拟登录接口
  mock.onPost("/auth/login").reply(200, {
    code: 200,
    message: "登录成功",
    data: {
      token: "fake-jwt-token-123456",
    },
  });

  // 其它没有匹配到的请求，让它穿透过去（Passthrough）
  // 这样你可以一部分用 Mock，一部分调真实接口
  mock.onAny().passThrough();
}
