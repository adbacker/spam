import { ApiCall } from "../ApiCall";
import { VetApiResponse } from "./VetApiResponse";

export class VetInfoApiCall implements ApiCall {
    request: any;
    response: VetApiResponse;
}