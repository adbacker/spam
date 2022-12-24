/**
 * @description selectors for Edit pet page
 */

export class EditPetPage {
    // super ugly default selector from devtools.  would ask dev to update with an id
    public static ownerName = "body > div.container-fluid > div > form > div.form-group.has-feedback > div:nth-child(1) > div > span"
    public static petName = "input[id='name']";
    public static birthdate = "input[id='birthDate']"
    public static petType = "input['id=type']";
    public static updatePetButton = "button[type='submit']"; // not ideal, but the only button on the page
}