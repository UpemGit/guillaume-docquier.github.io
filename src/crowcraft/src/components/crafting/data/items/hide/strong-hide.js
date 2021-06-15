import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class StrongHide extends Hide {
    constructor() {
        super(
            "strongHide",
            "strong hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
