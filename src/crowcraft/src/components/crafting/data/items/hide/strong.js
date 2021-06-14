import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class Strong extends Hide {
    constructor() {
        super(
            "strong",
            "strong",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}