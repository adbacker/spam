import { Appointment } from "../../visit/Appointment";
import {HttpApiEndpoint} from "../../../api/HttpApiEndpoint";

export class AddScheduleEndpoint extends HttpApiEndpoint {
    parms = new Map<AddScheduleParm,any>();
    httpMethod: "POST";
    basePath: "/schedule";
    port: "8080";

    getData(): any {
        const appointment: Appointment = this.parms.get("appointment");
        return appointment;
    }

}