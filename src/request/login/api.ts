import { requestFetch } from "../fetch";
import { request } from "../index";
import { GetUUIDReqType, GetUUIDSuccessResType } from "./type";

/**
 * 请求随机字符串（扫码用的key值）
 * @param data GetUUIDSuccessResType
 * @returns
 */
// export const apiGetUuidUrl = async (
//   data: GetUUIDReqType
// ): Promise<GetUUIDSuccessResType> =>
//   await request.get<GetUUIDSuccessResType>(`/scan/getRandomString`, data, {
//     timeout: 15000,
//   });

export const apiGetUuidUrl = async (
  data: GetUUIDReqType
): Promise<GetUUIDSuccessResType> =>
  await requestFetch.get<GetUUIDSuccessResType>(`/scan/getRandomString`, data);
