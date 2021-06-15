import { CustomizableComponent, CraftingMaterial, Rarities, Professions } from "components/crafting/data/item";
import { Ore, Aurelium, Copper, Iron, Silver, Tin } from "./ores";
import { Coal } from "./coal";

export class MetalRivets extends CustomizableComponent {
    constructor(
        id = "metalRivets",
        name = "metal rivets",
        craftingMaterials = [
            new CraftingMaterial(5, new Ore()),
            new CraftingMaterial(4, new Ore()),
            new CraftingMaterial(2, new Coal())
        ]
    ) {
        super(
            id,
            name,
            [Professions.Armorsmith, Professions.Weaponsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            craftingMaterials,
            1
        );
    }

    getCustomizationOptions() {
        return [
            new StealthMetalRivets(),
            new AnyMetalRivets(),
        ];
    }
}

class StealthMetalRivets extends MetalRivets {
    constructor() {
        super(
            "stealthMetalRivets",
            "metal rivets (stealth)",
            [
                new CraftingMaterial(5, new Aurelium()),
                new CraftingMaterial(3, new Iron()),
                new CraftingMaterial(2, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "stealth";
    }
}

class OutOfCombatHealthRegenMetalRivets extends MetalRivets {
    constructor() {
        super(
            "outOfCombatHealthRegenMetalRivets",
            "metal rivets (out of combat health regeneration))",
            [
                new CraftingMaterial(5, new Ore()),
                new CraftingMaterial(3, new Ore()),
                new CraftingMaterial(2, new Coal())
            ]
        )
    }

    getCustomizationEffect() {
        return "out of combat health regeneration";
    }
}
