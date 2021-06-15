import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class FlexibleHide extends Hide {
    constructor() {
        super(
            "flexibleHide",
            "flexible hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
