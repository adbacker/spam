export class OwnerInfoPage {
    public static ownerInfoTable = "body > div > div > table:nth-child(2)";

    public static editOwnerButton = "a[href*='edit']";
    public static addNewPetButton = "a[href*='pets/new']";
    public static petVisitTable = "h2#petsAndVisits + table";
    public static editPetLink = "a[href*=''" // ideally going to need to get owner and pet ids for this
    public static addVisitLink = "a[href*='visits/new']";
    
    // select the next sib after the table header with the id "name"
    public static ownerName = "th#name + td"; 
    public static ownerAddress = "th#address + td"; 
    public static ownerCity = "th#city + td"; 
    public static ownerTelephone = "th#telephone + td"; 
}