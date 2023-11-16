import { ec_care_ua } from "../entity/ec_care_ua";
import API from "./helper/api";

export function ua(): Promise<ec_care_ua> {
  return API.get<ec_care_ua>(`ua`).then((res) => res.data);
}

export function createUa(ua: ec_care_ua): Promise<ec_care_ua> {
  return API.post<ec_care_ua>(`ua`, ua).then((res) => res.data);
}
