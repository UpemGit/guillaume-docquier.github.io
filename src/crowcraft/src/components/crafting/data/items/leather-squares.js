import { CustomizableComponent, CraftingMaterial, Rarities, Professions } from "components/crafting/data/item";
import { Hide, Soft, Strong, Tough, Durable, Flexible } from "./hide";

export class LeatherSquares extends CustomizableComponent {
    constructor(
        id = "leatherSquares",
        name = "leather squares",
        craftingMaterials = [
            new CraftingMaterial(4, new Hide()),
            new CraftingMaterial(3, new Hide()),
            new CraftingMaterial(2, new Hide())
        ]
    ) {
        super(
            id,
            name,
            [Professions.Leatherworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            craftingMaterials,
            1
        );
    }

    getCustomizationOptions() {
        return [
            new LimberCoriumLeatherSquares(),
            new SoftCoriumLeatherSquares(),
            new SturdyCoriumLeatherSquares(),
            new StoutCoriumLeatherSquares(),
            new CoriumLeatherSquares(),
            new ChamoiseLeatherSquares(),
            new SturdyBicastLeatherSquares(),
            new LimberGrainLeatherSquares(),
            new BicastLeatherSquares(),
            new SuedeLeatherSquares(),
        ];
    }
}

class LimberCoriumLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "limberCoriumLeatherSquares",
            "leather squares (limber corium)",
            [
                new CraftingMaterial(4, new Durable()),
                new CraftingMaterial(3, new Flexible()),
                new CraftingMaterial(3, new Flexible()),
            ]
        )
    }

    getCustomizationEffect() {
        return "bleed resistance";
    }
}

class SoftCoriumLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "softCoriumLeatherSquares",
            "leather squares (soft corium)",
            [
                new CraftingMaterial(4, new Durable()),
                new CraftingMaterial(3, new Soft()),
                new CraftingMaterial(3, new Soft()),
            ]
        )
    }

    getCustomizationEffect() {
        return "fire resistance";
    }
}

class SturdyCoriumLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "sturdyCoriumLeatherSquares",
            "leather squares (sturdy corium)",
            [
                new CraftingMaterial(4, new Durable()),
                new CraftingMaterial(3, new Strong()),
                new CraftingMaterial(3, new Strong()),
            ]
        )
    }

    getCustomizationEffect() {
        return "ice resistance";
    }
}

class StoutCoriumLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "stoutCoriumLeatherSquares",
            "leather squares (stout corium)",
            [
                new CraftingMaterial(4, new Durable()),
                new CraftingMaterial(3, new Tough()),
                new CraftingMaterial(3, new Tough()),
            ]
        )
    }

    getCustomizationEffect() {
        return "electricity resistance";
    }
}

class CoriumLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "CoriumLeatherSquares",
            "leather squares (corium)",
            [
                new CraftingMaterial(4, new Flexible()),
                new CraftingMaterial(3, new Durable()),
                new CraftingMaterial(3, new Durable()),
            ]
        )
    }

    getCustomizationEffect() {
        return "nature resistance";
    }
}

class ChamoiseLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "ChamoiseLeatherSquares",
            "leather squares (chamoise)",
            [
                new CraftingMaterial(4, new Flexible()),
                new CraftingMaterial(3, new Soft()),
                new CraftingMaterial(3, new Soft()),
            ]
        )
    }

    getCustomizationEffect() {
        return "poison resistance";
    }
}

class SturdyBicastLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "sturdyBicastLeatherSquares",
            "leather squares (sturdy bicast)",
            [
                new CraftingMaterial(4, new Flexible()),
                new CraftingMaterial(3, new Strong()),
                new CraftingMaterial(3, new Strong()),
            ]
        )
    }

    getCustomizationEffect() {
        return "disease resistance";
    }
}

class LimberGrainLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "limberGrainLeatherSquares",
            "leather squares (limber grain)",
            [
                new CraftingMaterial(4, new Flexible()),
                new CraftingMaterial(3, new Tough()),
                new CraftingMaterial(3, new Tough()),
            ]
        )
    }

    getCustomizationEffect() {
        return "slashing resistance";
    }
}

class BicastLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "BicastLeatherSquares",
            "leather squares (bicast)",
            [
                new CraftingMaterial(4, new Soft()),
                new CraftingMaterial(3, new Durable()),
                new CraftingMaterial(3, new Durable()),
            ]
        )
    }

    getCustomizationEffect() {
        return "crush resistance";
    }
}

class SuedeLeatherSquares extends LeatherSquares {
    constructor() {
        super(
            "SuedeLeatherSquares",
            "leather squares (suede)",
            [
                new CraftingMaterial(4, new Soft()),
                new CraftingMaterial(3, new Flexible()),
                new CraftingMaterial(3, new Flexible()),
            ]
        )
    }

    getCustomizationEffect() {
        return "piercing resistance";
    }
}
