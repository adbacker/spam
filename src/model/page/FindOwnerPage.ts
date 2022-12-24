/**
 * @description selectors for Find owner page
 */
export class FindOwnerPage {
    public static addOwnerButton = "a[href='/owners/new']";
    // super ugly selector, indeed
    public static findOwnerButton = "#search-owner-form > div:nth-child(2) > div > button";
    public static ownerLastNameTextbox = "input[id='lastName']";
}