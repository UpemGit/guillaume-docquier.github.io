import { Rarities } from "components/crafting/data/item";
import { Hide } from "./hide";

export class Durable extends Hide {
    constructor() {
        super(
            "durable",
            "durable",
            [],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [],
            1
        );
    }
}