import { ApiCall } from "../ApiCall";
import { VetInfoApiResponse } from "./VetInfoApiResponse";

export class VetInfoApiCall implements ApiCall {
    request: any;
    response: VetInfoApiResponse;
}