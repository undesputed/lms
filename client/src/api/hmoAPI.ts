import API from "./helper/api";
import { ec_care_hmo } from "../entity/ec_care_hmo";

export function hmo(): Promise<ec_care_hmo> {
  return API.get<ec_care_hmo>(`hmo`).then((res) => res.data);
}

export function hmoById(id: number | string): Promise<ec_care_hmo> {
  return API.get<ec_care_hmo>(`hmo/${id}`).then((res) => res.data);
}
