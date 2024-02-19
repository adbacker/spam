import {HttpApiCallMgr} from "./HttpApiCallMgr";
import {AddScheduleEndpoint} from "../model/api/scheduleApi/AddScheduleEndpoint";
import {AddScheduleApiCall} from "../model/api/scheduleApi/AddScheduleApiCall";

export class AddScheduleApiMgr extends HttpApiCallMgr {
    call: AddScheduleApiCall;
    endpoint: AddScheduleEndpoint;
}