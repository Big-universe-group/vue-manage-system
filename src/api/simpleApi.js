import axiosapi from "../utils/request";

const SimpleApi = {
  /*
   * 功能: 获取个人信息列表
   */
  fetchPersonInfos(params) {
    return axiosapi({
      url: "./userinfos.json",
      method: "get",
      params: params,
    });
  },

  /*
   * 功能: 获取当前登录用户详细信息
   */
  fetchSelfDetailInfo(params) {
    return axiosapi({
      url: "./userself.json",
      method: "get",
      params: params,
    });
  },

  /*
   * 功能: 获取todo list
   */
  fetchTodoListInfos(params) {
    return axiosapi.get("./tolist.json", { params });
  },

  /*
   * 功能: 获取指定范围内的销售数据, 若未指定则返回所有销售数据
   */
  fetchSalesData(params) {
    return axiosapi.get("./sales.json", { params });
  },

  /*
   * 功能: 获取网站相关的统计信息: 访问量, 消息数, 订单量等
   */
  fetchStatisticsData(params) {
    return axiosapi.get("./statistics.json", { params });
  },
};

export default SimpleApi;
