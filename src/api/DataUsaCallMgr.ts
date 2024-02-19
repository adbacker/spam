import {HttpApiCallMgr} from "./HttpApiCallMgr";
import {ApiCall} from "../model/api/ApiCall";
import {DataUsaEndpoint} from "../model/api/datausa/DataUsaEndpoint";
import {DataUsaApiCall} from "../model/api/datausa/DataUsaApiCall";
export class DataUsaCallMgr extends HttpApiCallMgr {
    endpoint: DataUsaEndpoint = new DataUsaEndpoint();
    call: ApiCall = new DataUsaApiCall();
}