import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class SoftHide extends Hide {
    constructor() {
        super(
            "softHide",
            "soft hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
