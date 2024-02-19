import { GetScheduleParm } from "./GetScheduleParm";
import {HttpApiEndpoint} from "../../../api/HttpApiEndpoint";

export class GetScheduleEndpoint extends HttpApiEndpoint {
    parms = new Map<GetScheduleParm, string>();
    httpMethod = "GET";
    basePath = "/schedule";

    getUrl(): string {
        const appointmentDate: string = this.parms.get("date");
        const vetId: string = this.parms.get("vetId");
        return `${this.basePath}/${vetId}/${appointmentDate}`;
    }
}