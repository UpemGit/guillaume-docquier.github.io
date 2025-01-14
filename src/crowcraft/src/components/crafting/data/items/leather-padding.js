import { Item, CraftingMaterial, Rarities, Professions } from "../item";
import { Hide } from "./hide";
import { LacingSinew } from "./lacing-sinew";

export class LeatherPadding extends Item {
    constructor() {
        super(
            "leatherPadding",
            "leather padding",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(2, new Hide()),
                new CraftingMaterial(2, new Hide()),
                new CraftingMaterial(2, new Hide()),
                new CraftingMaterial(1, new LacingSinew())
            ],
            1
        );
    }
}