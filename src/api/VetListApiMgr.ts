import {HttpApiCallMgr} from "./HttpApiCallMgr";
import {VetInfoApiCall} from "../model/api/vetInfoApi/VetInfoApiCall";
import {VetInfoJsonEndpoint} from "../model/api/vetInfoApi/VetInfoJsonEndpoint";

export class VetListApiMgr extends HttpApiCallMgr {
    call: VetInfoApiCall = new VetInfoApiCall();
    endpoint: VetInfoJsonEndpoint = new VetInfoJsonEndpoint();

}