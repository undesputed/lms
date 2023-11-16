import { ec_care_referral } from "../entity/ec_care_referral";
import API from "./helper/api";

export function referral(): Promise<ec_care_referral> {
  return API.get<ec_care_referral>(`referral`).then((res) => res.data);
}
