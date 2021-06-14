import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class Tough extends Hide {
    constructor() {
        super(
            "tough",
            "tough",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}