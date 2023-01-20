import { apiGetUuidUrl } from "src/request/login/api";
import { GetUUIDReqType, GetUUIDSuccessResType } from "src/request/login/type";

export enum EVENTS_TAG {
  UUID = "getUuidUrl",
}


interface EventsServiceParamTypes<T> {
  label: string;
  data: T;
  callback: () => unknown;
}

export interface EventsService<T> {
  handleEvent: (params: EventsServiceParamTypes<T>) => void;
}

/**
 * 
 */
export class GetUuid implements EventsService<GetUUIDReqType> {
  handleEvent(
    params: EventsServiceParamTypes<GetUUIDReqType>
  ): Promise<GetUUIDSuccessResType> {
    return new Promise((resolve, reject) => {
      apiGetUuidUrl(params.data).then(
        (res) => {
          resolve(res);
        },
        (rea) => reject(rea)
      );
    });
  }
}


export const BACKGROUND_EVENTS = {
  [EVENTS_TAG.UUID]: () => new GetUuid(),
};
