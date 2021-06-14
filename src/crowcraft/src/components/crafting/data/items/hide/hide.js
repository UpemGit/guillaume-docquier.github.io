import { RawMaterial, Rarities } from "components/crafting/data/item";

export class Hide extends RawMaterial {
    constructor(
        id = "hide",
        name = "hide",
        professions = [],
        rarities = [Rarities.Poor, Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
        craftingMaterials = [],
        craftingQuantity = 1) {
        super(id, name, professions, rarities, craftingMaterials, craftingQuantity);
    }
}