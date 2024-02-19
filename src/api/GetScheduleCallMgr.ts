import {HttpApiCallMgr} from "./HttpApiCallMgr";
import {ApiCall} from "../model/api/ApiCall";
import {GetScheduleEndpoint} from "../model/api/scheduleApi/GetScheduleEndpoint";
import {GetScheduleApiCall} from "../model/api/scheduleApi/GetScheduleApiCall";

export class GetScheduleCallMgr extends HttpApiCallMgr {
    endpoint: GetScheduleEndpoint = new GetScheduleEndpoint();
    call: ApiCall = new GetScheduleApiCall();
}