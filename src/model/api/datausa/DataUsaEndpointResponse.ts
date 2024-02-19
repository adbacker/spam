import {NationPopulation} from "../../datausa/NationPopulation";
import {Source} from "../../datausa/Source";

export class DataUsaEndpointResponse {
    data: NationPopulation[];
    source: Source[];
}