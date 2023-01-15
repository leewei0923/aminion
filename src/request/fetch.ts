import { baseURL } from "./url";
import qs from "qs";

const timeout = 30000;

// interface OptionsType {
//   method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD";
//   headers: HeadersInit;
//   credentials: "include" | "omit" | "same-origin";
//   body?: any;
// }

// interface FetchRequest {
//   options: HeadersInit;
//   method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD";
//   body: {
//     [key: string]: any;
//   };
// }

enum MethodEnum {
  get = "GET",
  post = "POST",
  put = "PUT",
  delete = "DELETE",
}

interface paramsType extends Object {
  [key: string]: any;
}

const requestHandler = async <T>(
  method: MethodEnum, // 请求标准
  url: string, // 目标地址
  params: paramsType = {}, //
  config: {} | Headers | undefined //
): Promise<T> => {
  let response: Promise<T>;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  config = myHeaders;

  switch (method) {
    case MethodEnum.get:
      let link = `${baseURL}${url}?`;
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          link += `${key}=${params[key]}&`;
        }
      }

      response = fetch(link.slice(0, link.length - 1), {
        method: MethodEnum.get,
        ...config,
      }).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
      break;

    case MethodEnum.post:
      response = fetch(`${baseURL}${url}`, {
        method: MethodEnum.post,
        body: JSON.stringify(params),
        ...config,
      }).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
      break;

    case MethodEnum.put:
      response = fetch(`${baseURL}${url}`, {
        method: MethodEnum.put,
        body: JSON.stringify(params),
        ...config,
      }).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
      break;

    case MethodEnum.delete:
      response = fetch(`${baseURL}${url}`, {
        method: MethodEnum.delete,
        body: JSON.stringify(params),
        ...config,
      }).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });
      break;
  }

  return new Promise<T>((resolve, reject) => {
    response
      .then(
        (res) => {
          resolve(res);
        },
        (rea) => reject(rea)
      )
      .catch((err) => reject(err));
  });
};

const requestFetch = {
  get: async <T>(url: string, params?: object, config?: Headers) =>
    await requestHandler<T>(MethodEnum.get, url, params, config),
  post: async <T>(url: string, params?: object, config?: Headers) =>
    await requestHandler<T>(MethodEnum.post, url, params, config),
  put: async <T>(url: string, params?: object, config?: Headers) =>
    await requestHandler<T>(MethodEnum.put, url, params, config),
};

export { requestFetch };
