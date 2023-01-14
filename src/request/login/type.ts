import { CommonSuccessRes } from "../type";

export interface GetUUIDReqType {
  key_id: string;
}

export interface GetUUIDSuccessResType {
  key_id: string;
  status: boolean;
  isScan: boolean;
  start_time: number;
  expire_time: number;
  openid: string;
  code: number;
  msg: string;
  token: string;
}
