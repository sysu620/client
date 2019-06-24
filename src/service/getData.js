/* eslint-disable */
import axios from "axios";
import qs from "qs";
let domain = "";
export const getDomain = () => {
  return domain;
};
export const setDomain = $domain => {
  domain = $domain;
};
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase();
  let keys = Object.keys(queryParameters);
  let queryUrl = url;
  if (keys.length > 0) {
    queryUrl = url + "?" + qs.stringify(queryParameters);
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config);
  } else if (method === "get") {
    return axios[method](
      queryUrl,
      {
        params: form
      },
      config
    );
  } else {
    return axios[method](queryUrl, qs.stringify(form), config);
  }
};
/*==========================================================
 *                    
 ==========================================================*/
/**
 * publish a new questionareTask(发布一个新的问卷任务，需要填写表单)
 * request: publishQTask
 * url: publishQTaskURL
 * method: publishQTask_TYPE
 * raw_url: publishQTask_RAW_URL
 * @param body - Task form information should be posted(任务表单)
 */
export const publishQTask = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/user/publishQuery";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }
  if (parameters["body"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: body"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("post", domain + path, body, queryParameters, form, config);
};
export const publishQTask_RAW_URL = function() {
  return "/user/publishQuery";
};
export const publishQTask_TYPE = function() {
  return "post";
};
export const publishQTaskURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/user/publishQuery";
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * publish a new deliveryTask(发布一个新的快递任务，需要填写表单)
 * request: publishDTask
 * url: publishDTaskURL
 * method: publishDTask_TYPE
 * raw_url: publishDTask_RAW_URL
 * @param body - Task form information should be posted(任务表单)
 */
export const publishDTask = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/user/publishDelivery";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }
  if (parameters["body"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: body"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("post", domain + path, body, queryParameters, form, config);
};
export const publishDTask_RAW_URL = function() {
  return "/user/publishDelivery";
};
export const publishDTask_TYPE = function() {
  return "post";
};
export const publishDTaskURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/user/publishDelivery";
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * accept a new task(接受一个新任务，需要绑定用户和任务)
 * request: acceptTask
 * url: acceptTaskURL
 * method: acceptTask_TYPE
 * raw_url: acceptTask_RAW_URL
 * @param body - the task that user accept(用户和接受的任务)
 */
export const acceptTask = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/user/accept";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }
  if (parameters["body"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: body"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("post", domain + path, body, queryParameters, form, config);
};
export const acceptTask_RAW_URL = function() {
  return "/user/accept";
};
export const acceptTask_TYPE = function() {
  return "post";
};
export const acceptTaskURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/user/accept";
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * query a page of tasks accepted(获取一页用户接受的任务)
 * request: qAcceptPage
 * url: qAcceptPageURL
 * method: qAcceptPage_TYPE
 * raw_url: qAcceptPage_RAW_URL
 * @param page - if page is greater than 0, response a page of tasks(10), if page is 0, response 3 front tasks(如果page参数为0，则返回3个任务，供导航页使用；如果page大于0，则按页数返回10个任务)
 * @param userId - the id of user
 */
export const qAcceptPage = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/task/qAcceptPage";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["page"] !== undefined) {
    queryParameters["page"] = parameters["page"];
  }
  if (parameters["page"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: page"));
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters["userId"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: userId"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("get", domain + path, body, queryParameters, form, config);
};
export const qAcceptPage_RAW_URL = function() {
  return "/task/qAcceptPage";
};
export const qAcceptPage_TYPE = function() {
  return "get";
};
export const qAcceptPageURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/task/qAcceptPage";
  if (parameters["page"] !== undefined) {
    queryParameters["page"] = parameters["page"];
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * query a page of tasks published(获取一页用户发布的任务)
 * request: qPublishPage
 * url: qPublishPageURL
 * method: qPublishPage_TYPE
 * raw_url: qPublishPage_RAW_URL
 * @param page - if page is greater than 0, response a page of tasks(10), if page is 0, response 3 front tasks(如果page参数为0，则返回3个任务，供导航页使用；如果page大于0，则按页数返回10个任务)
 * @param userId - the id of user
 */
export const qPublishPage = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/task/qPublishPage";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["page"] !== undefined) {
    queryParameters["page"] = parameters["page"];
  }
  if (parameters["page"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: page"));
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters["userId"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: userId"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("get", domain + path, body, queryParameters, form, config);
};
export const qPublishPage_RAW_URL = function() {
  return "/task/qPublishPage";
};
export const qPublishPage_TYPE = function() {
  return "get";
};
export const qPublishPageURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/task/qPublishPage";
  if (parameters["page"] !== undefined) {
    queryParameters["page"] = parameters["page"];
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * query a page of questionareTasks not accepted and not published by user(获取一页用户没接受过，也不是由用户发布的问卷任务)
 * request: queryPageQ
 * url: queryPageQURL
 * method: queryPageQ_TYPE
 * raw_url: queryPageQ_RAW_URL
 * @param page - if page is greater than 0, response a page of tasks(10), if page is 0, response 5 front tasks(如果page参数为0，则返回5个任务，供导航页使用；如果page大于0，则按页数返回10个任务)
 * @param userId - the id of user
 */
export const queryPageQ = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/task/queryPageQ";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["page"] !== undefined) {
    queryParameters["page"] = parameters["page"];
  }
  if (parameters["page"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: page"));
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters["userId"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: userId"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("get", domain + path, body, queryParameters, form, config);
};
export const queryPageQ_RAW_URL = function() {
  return "/task/queryPageQ";
};
export const queryPageQ_TYPE = function() {
  return "get";
};
export const queryPageQURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/task/queryPageQ";
  if (parameters["page"] !== undefined) {
    queryParameters["page"] = parameters["page"];
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * query a page of delivery tasks not accepted and not published by user(获取一页用户没接受过，也不是由用户发布的快递任务)
 * request: queryPageD
 * url: queryPageDURL
 * method: queryPageD_TYPE
 * raw_url: queryPageD_RAW_URL
 * @param page - if page is greater than 0, response a page of tasks(10), if page is 0, response 5 front tasks(如果page参数为0，则返回5个任务，供导航页使用；如果page大于0，则按页数返回10个任务)
 * @param userId - the id of user
 */
export const queryPageD = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/task/queryPageD";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["page"] !== undefined) {
    queryParameters["page"] = parameters["page"];
  }
  if (parameters["page"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: page"));
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters["userId"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: userId"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("get", domain + path, body, queryParameters, form, config);
};
export const queryPageD_RAW_URL = function() {
  return "/task/queryPageD";
};
export const queryPageD_TYPE = function() {
  return "get";
};
export const queryPageDURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/task/queryPageD";
  if (parameters["page"] !== undefined) {
    queryParameters["page"] = parameters["page"];
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * query some tasks not accepted and not published by user by title(通过标题查询获取用户没接受过，也不是由用户发布的任务)
 * request: queryTitle
 * url: queryTitleURL
 * method: queryTitle_TYPE
 * raw_url: queryTitle_RAW_URL
 * @param title - the title of tasks
 * @param userId - the id of user
 */
export const queryTitle = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/task/queryTitle";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["title"] !== undefined) {
    queryParameters["title"] = parameters["title"];
  }
  if (parameters["title"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: title"));
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters["userId"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: userId"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("get", domain + path, body, queryParameters, form, config);
};
export const queryTitle_RAW_URL = function() {
  return "/task/queryTitle";
};
export const queryTitle_TYPE = function() {
  return "get";
};
export const queryTitleURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/task/queryTitle";
  if (parameters["title"] !== undefined) {
    queryParameters["title"] = parameters["title"];
  }
  if (parameters["userId"] !== undefined) {
    queryParameters["userId"] = parameters["userId"];
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * get a questionareTask by taskId(通过任务id获取一个问卷任务)
 * request: getQuestionare
 * url: getQuestionareURL
 * method: getQuestionare_TYPE
 * raw_url: getQuestionare_RAW_URL
 * @param taskId - the id of tasks
 */
export const getQuestionare = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/task/quetionare/{taskId}";
  let body;
  let queryParameters = {};
  let form = {};
  path = path.replace("{taskId}", `${parameters["taskId"]}`);
  if (parameters["taskId"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: taskId"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("get", domain + path, body, queryParameters, form, config);
};
export const getQuestionare_RAW_URL = function() {
  return "/task/quetionare/{taskId}";
};
export const getQuestionare_TYPE = function() {
  return "get";
};
export const getQuestionareURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/task/quetionare/{taskId}";
  path = path.replace("{taskId}", `${parameters["taskId"]}`);
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * get a deliveryTask by taskId(通过任务id获取一个快递任务)
 * request: getDelivery
 * url: getDeliveryURL
 * method: getDelivery_TYPE
 * raw_url: getDelivery_RAW_URL
 * @param taskId - the id of tasks
 */
export const getDelivery = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/task/delivery/{taskId}";
  let body;
  let queryParameters = {};
  let form = {};
  path = path.replace("{taskId}", `${parameters["taskId"]}`);
  if (parameters["taskId"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: taskId"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("get", domain + path, body, queryParameters, form, config);
};
export const getDelivery_RAW_URL = function() {
  return "/task/delivery/{taskId}";
};
export const getDelivery_TYPE = function() {
  return "get";
};
export const getDeliveryURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/task/delivery/{taskId}";
  path = path.replace("{taskId}", `${parameters["taskId"]}`);
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * finish a accepted task by userId and TaskId(通过用户id和任务id完成一个已接收的任务)
 * request: finishAccept
 * url: finishAcceptURL
 * method: finishAccept_TYPE
 * raw_url: finishAccept_RAW_URL
 * @param body - the task that user accept(用户和接受的任务)
 */
export const finishAccept = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/user/finishAccept";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }
  if (parameters["body"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: body"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("delete", domain + path, body, queryParameters, form, config);
};
export const finishAccept_RAW_URL = function() {
  return "/user/finishAccept";
};
export const finishAccept_TYPE = function() {
  return "delete";
};
export const finishAcceptURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/user/finishAccept";
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * finish a published task(结束/取消一个已发布的任务)
 * request: finishPublish
 * url: finishPublishURL
 * method: finishPublish_TYPE
 * raw_url: finishPublish_RAW_URL
 * @param body - the task
 */
export const finishPublish = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/user/finishPublish";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }
  if (parameters["body"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: body"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("delete", domain + path, body, queryParameters, form, config);
};
export const finishPublish_RAW_URL = function() {
  return "/user/finishPublish";
};
export const finishPublish_TYPE = function() {
  return "delete";
};
export const finishPublishURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/user/finishPublish";
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * sign up
 * request: signUp
 * url: signUpURL
 * method: signUp_TYPE
 * raw_url: signUp_RAW_URL
 * @param body - User form information should be posted
 */
export const signUp = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/user/signup";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }
  if (parameters["body"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: body"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("post", domain + path, body, queryParameters, form, config);
};
export const signUp_RAW_URL = function() {
  return "/user/signup";
};
export const signUp_TYPE = function() {
  return "post";
};
export const signUpURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/user/signup";
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * sign in
 * request: signIn
 * url: signInURL
 * method: signIn_TYPE
 * raw_url: signIn_RAW_URL
 * @param body - User form information should be posted, include userId and password
 */
export const signIn = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/user/signin";
  let body;
  let queryParameters = {};
  let form = {};
  if (parameters["body"] !== undefined) {
    body = parameters["body"];
  }
  if (parameters["body"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: body"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("post", domain + path, body, queryParameters, form, config);
};
export const signIn_RAW_URL = function() {
  return "/user/signin";
};
export const signIn_TYPE = function() {
  return "post";
};
export const signInURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/user/signin";
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
/**
 * get user by userId
 * request: getUser
 * url: getUserURL
 * method: getUser_TYPE
 * raw_url: getUser_RAW_URL
 * @param userId -
 */
export const getUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config;
  let path = "/user/{userId}";
  let body;
  let queryParameters = {};
  let form = {};
  path = path.replace("{userId}", `${parameters["userId"]}`);
  if (parameters["userId"] === undefined) {
    return Promise.reject(new Error("Missing required  parameter: userId"));
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  return request("get", domain + path, body, queryParameters, form, config);
};
export const getUser_RAW_URL = function() {
  return "/user/{userId}";
};
export const getUser_TYPE = function() {
  return "get";
};
export const getUserURL = function(parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = "/user/{userId}";
  path = path.replace("{userId}", `${parameters["userId"]}`);
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] =
        parameters.$queryParameters[parameterName];
    });
  }
  let keys = Object.keys(queryParameters);
  return (
    domain +
    path +
    (keys.length > 0
      ? "?" +
        keys
          .map(key => key + "=" + encodeURIComponent(queryParameters[key]))
          .join("&")
      : "")
  );
};
