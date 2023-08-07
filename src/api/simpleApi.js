import axiosapi from "../utils/request";

const SimpleApi = {
  /*
   * 功能: 验证函数, 而非API
   * 添加一个临时函数, 用于判断请求是否异常
   */
  checkRequestResult(vm, result, errormsg) {
    if (!result || !result.code) {
      this.$message.error(errormsg || "响应数据为空, 请检查");
      return false;
    }

    if (result.code != 100000) {
      vm.$message.error(result.message || errormsg);
      return false;
    }
    return true;
  },

  /*
   * 功能: 获取个人信息列表
   */
  fetchPersonInfos(params) {
    return axiosapi({
      url: "./auth/users",
      method: "get",
      params: params,
    });
  },

  /*
   * 功能: 获取当前登录用户详细信息
   */
  fetchSelfDetailInfo(params) {
    return axiosapi({
      url: "./other/userself",
      method: "get",
      params: params,
    });
  },

  /*
   * 功能: 获取todo list
   */
  fetchTodoListInfos(params) {
    return axiosapi.get("./other/tolist", { params });
  },

  /*
   * 功能: 获取指定范围内的销售数据, 若未指定则返回所有销售数据
   */
  fetchSalesData(params) {
    return axiosapi.get("./other/sales", { params });
  },

  /*
   * 功能: 获取网站相关的统计信息: 访问量, 消息数, 订单量等
   */
  fetchStatisticsData(params) {
    return axiosapi.get("./other/statistics", { params });
  },
};

export default SimpleApi;
