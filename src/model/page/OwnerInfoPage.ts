export class OwnerInfoPage {
    public static ownerInfoTable = "body > div > div > table:nth-child(2)";
    public static editOwnerButton = "a[href*='edit']";
    public static addNewPetButton = "a[href*='pets/new']";
    // another crappy selector straight from dev tools.  
    public static petVisitTable = "body > div > div > table:nth-child(9) > tbody > tr > td:nth-child(2) > table"
    public static editPetLink = "a[href*=''" // ideally going to need to get owner and pet ids for this
    public static addVisitLink = "a[href*='visits/new']";
}