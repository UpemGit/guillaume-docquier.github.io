import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class DurableHide extends Hide {
    constructor() {
        super(
            "durableHide",
            "durable hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
