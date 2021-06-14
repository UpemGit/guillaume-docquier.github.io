import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class Flexible extends Hide {
    constructor() {
        super(
            "flexible",
            "flexible",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}