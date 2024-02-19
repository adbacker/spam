import { Appointment } from "../../visit/Appointment";
import { ApiCall } from "../ApiCall";

export class GetScheduleApiCall implements ApiCall {
    request: any;
    response: Appointment[];
}