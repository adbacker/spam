/**
 * Business object to be returned by the ApiResponseParser
 */

export interface ApiResponse {
    // when we're simply returning the straight json from the api call response, 
    // this allows any appended property to be referenced w/o complaint
    [x: string]: any; 
}