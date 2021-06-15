import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class ToughHide extends Hide {
    constructor() {
        super(
            "toughHide",
            "tough hide",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}
