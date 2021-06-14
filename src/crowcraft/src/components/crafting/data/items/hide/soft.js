import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class Soft extends Hide {
    constructor() {
        super(
            "soft",
            "soft",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}