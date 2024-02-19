import { Appointment } from "../../visit/Appointment";
import { ApiCall } from "../ApiCall";

export class AddScheduleApiCall implements ApiCall {
    request: Appointment;
    response: any;
}