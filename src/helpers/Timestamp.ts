import dateFormat from "dateformat";

export class Timestamp {

    public static nowString(): string {
        const timestamp = dateFormat(new Date(), "yymmddHHMMss").toString();
        return timestamp;
    }
}