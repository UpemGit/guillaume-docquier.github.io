import { Item, CraftingMaterial, Rarities, Professions } from "components/crafting/data/item";
import { LeatherSquares } from "./leather-squares";
import { MetalRivets } from "./metal-rivets";
import { EtherealDust } from "./ethereal-dust";

export class LeatherCap extends Item {
    static id = "leatherCap";

    constructor() {
        super(
            LeatherCap.id,
            "leather cap",
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new LeatherSquares()),
                new CraftingMaterial(1, new LeatherSquares()),
                new CraftingMaterial(1, new LeatherSquares()),
                new CraftingMaterial(1, new MetalRivets()),
                new CraftingMaterial(6, new EtherealDust())
            ],
            1
        );
    }
}
