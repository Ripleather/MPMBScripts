var iFileName = "Campaign - Cyric Subclasses.js";

SourceList["CYRIC"] = {
  name: "Cyric Campaign Subclasses",
  abbreviation: "CYRIC",
  group: "Cyric",
  url: "",
  date: "2025/04/04"
};

// Cleric: Domain of the Loom
AddSubClass("cleric", "domain of the loom", {
  regExpSearch: /loom/i,
  subname: "Domain of the Loom",
  fullname: "Cleric: Domain of the Loom",
  source: [["CYRIC", 1]],
  spellcastingExtra: [
    "detect magic", "shield",
    "see invisibility", "silence",
    "dispel magic", "counterspell",
    "resilient sphere", "arcane eye",
    "wall of force", "legend lore"
  ],
  features: {
    "subclassfeature1": {
      name: "Resonant Sensitivity",
      source: [["CYRIC", 1]],
      minlevel: 1,
      description: desc([
        "I learn Mage Hand and Identify as cleric spells; they don't count against prepared spells.",
        "When a spell is cast within 30 ft, I can use my reaction for a Wis (Arcana) check (DC 10 + spell level).",
        "On success, I know the spell, its exact school, and source, even if cast silently or invisibly."
      ]),
      spellcastingBonus: {
        name: "Resonant Sensitivity",
        spells: ["mage hand", "identify"],
        selection: ["mage hand", "identify"],
        firstCol: 'atwill',
        description: "Mage Hand and Identify are always prepared for me and don't count against prepared spells."
      },
      action: ["reaction", "Identify spell cast nearby"]
    },
    "subclassfeature1.1": {
      name: "Weave Anchor",
      source: [["CYRIC", 1]],
      minlevel: 1,
      description: desc([
        "Advantage on saving throws against illusion, enchantment, and wild magic effects.",
        "Creatures within 10 ft have disadvantage on concentration checks for illusion or enchantment spells.",
        "I may change radiant damage from my spells to force damage."
      ]),
      savetxt: { adv_vs: ["illusion", "enchantment", "wild magic"] }
    },
    "subclassfeature2": {
      name: "Channel Divinity: Anchor the Loom",
      source: [["CYRIC", 1]],
      minlevel: 2,
      description: desc([
        "As an action, choose one:",
        "Purge Pulse: 20-ft cone; Con save or 2d10 radiant/force damage, disadvantage next spell atk/save; half damage on success.",
        "Warding Lattice: 10-ft radius, 1 min concentration; resistance vs. spell damage, advantage magic saves, see through magical darkness."
      ]),
      action: ["action", "Channel Divinity: Anchor the Loom"],
      usages: 1,
      recovery: "short rest"
    },
    "subclassfeature6": {
      name: "Harmonic Feedback",
      source: [["CYRIC", 1]],
      minlevel: 6,
      description: desc([
        "When a creature within 60 ft casts a spell (1st-level+), reaction to force Con save.",
        "On fail, deals 2d6 + Wis mod force or psychic damage."
      ]),
      action: ["reaction", "Harmonic Feedback"],
      usages: "Wis mod per ",
      usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
      recovery: "long rest"
    },
    "subclassfeature8": {
      name: "Divine Strike",
      source: [["CYRIC", 1]],
      minlevel: 8,
      description: desc([
        "Once per turn, weapon attack deals extra 1d8 radiant or force damage.",
        "Damage increases to 2d8 at 14th level."
      ]),
      additional: levels.map(function(n) {
        return n < 8 ? "" : (n < 14 ? "1d8 damage" : "2d8 damage");
      })
    },
    "subclassfeature17": {
      name: "Absolute Resonance",
      source: [["CYRIC", 1]],
      minlevel: 17,
      description: desc([
        "When casting spell (1st-level+), grant one creature within 30 ft immunity to one condition (charm/fright/stun) or one spell school until my next turn.",
        "I can concentrate on two cleric spells if both are abjuration or divination; separate concentration checks."
      ])
    }
  }
});

// Warlock: Szass Tam, the Broken
AddSubClass("warlock", "szass tam, the broken", {
  regExpSearch: /szass tam/i,
  subname: "Szass Tam, the Broken",
  fullname: "Warlock: Szass Tam, the Broken",
  source: [["CYRIC", 1]],
  spellcastingExtra: [
    "disguise self", "detect magic",
    "mirror image", "detect thoughts",
    "counterspell", "dispel magic",
    "greater invisibility", "phantasmal killer",
    "wall of force", "modify memory"
  ],
  features: {
    "subclassfeature1": {
      name: "Residual Clarity",
      source: [["CYRIC", 1]],
      minlevel: 1,
      description: desc([
        "I gain resistance to the charmed and frightened conditions.",
        "Once per short or long rest, when a spell I cast forces a save, I can impose disadvantage if the target is affected by illusion or enchantment."
      ]),
      usages: 1,
      recovery: "short rest"
    },
    "subclassfeature3": {
      name: "Pact Boon: Pact of the Forgotten",
      source: [["CYRIC", 1]],
      minlevel: 3,
      description: desc([
        "Tome: +1 cantrip from any list, unaffected by illusion/enchantment.",
        "Chain: familiar immune to illusory terrain and suggestion-based compulsions.",
        "Blade: +1 psychic dmg vs targets affected by illusion/enchantment (2 dmg at lvl 10).",
        "Optional: once per long rest, activate your pact focus (glyph, shard, mark) to: ",
        "- Gain adv. on one Int or Wis save, OR",
        "- Detect illusions/false memories within 30 ft for 1 min."
      ]),
      usages: 1,
      recovery: "long rest"
    },
    "subclassfeature6": {
      name: "Echo of Betrayal",
      source: [["CYRIC", 1]],
      minlevel: 6,
      description: desc([
        "When a creature casts an illusion or enchantment spell within 60 ft, I can use a reaction.",
        "The caster makes a Charisma save vs my spell DC or the spell fails and is wasted."
      ]),
      usages: "Cha mod per ",
      usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
      recovery: "long rest",
      action: ["reaction", "Disrupt spell"]
    },
    "subclassfeature10": {
      name: "Incomplete Truth",
      source: [["CYRIC", 1]],
      minlevel: 10,
      description: desc([
        "Immune to spells/effects that detect alignment, read thoughts, or compel truth (e.g., Zone of Truth).",
        "If I succeed on a save vs. charm, illusion, or enchantment, the caster must make a Wis save or be stunned until end of their next turn."
      ])
    },
    "subclassfeature14": {
      name: "Break the Mask",
      source: [["CYRIC", 1]],
      minlevel: 14,
      description: desc([
        "Once per long rest, when I target a creature affected by illusion/mind control/altered memory:",
        "They must make a Wis save. On a fail, for 1 min:",
        "- Can't take reactions",
        "- Disadvantage on attacks and saves",
        "- Can only speak in fragmented, contradictory truths (DM's discretion)",
        "The target may repeat the save at end of each of its turns."
      ]),
      usages: 1,
      recovery: "long rest"
    }
  }
});

// Ranger: Shadowstrike Conclave
AddSubClass("ranger", "shadowstrike conclave", {
  regExpSearch: /shadowstrike conclave/i,
  subname: "Shadowstrike Conclave",
  fullname: "Ranger: Shadowstrike Conclave",
  source: [["CYRIC", 1]],
  spellcastingExtra: [
    "disguise self", "silent image",
    "blur", "darkness",
    "fear", "nondetection",
    "greater invisibility", "phantasmal killer",
    "mislead", "seeming"
  ],
  features: {
    "subclassfeature3": {
      name: "Shrouded Assault",
      source: [["CYRIC", 1]],
      minlevel: 3,
      description: desc([
        "As a bonus action, I can become invisible until the end of my next turn.",
        "The invisibility ends early if I attack or cast a spell."
      ]),
      action: ["bonus action", "Shrouded Assault"],
      usages: 1,
      recovery: "short rest"
    },
    "subclassfeature3.1": {
      name: "Shadowstep",
      source: [["CYRIC", 1]],
      minlevel: 3,
      description: desc([
        "When lightly or heavily obscured, I can take the Dash action as a bonus action."
      ])
    },
    "subclassfeature7": {
      name: "Phantom Ambush",
      source: [["CYRIC", 1]],
      minlevel: 7,
      description: desc([
        "While invisible or obscured, creatures have disadvantage on opportunity attacks against me."
      ])
    },
    "subclassfeature11": {
      name: "Illusory Stride",
      source: [["CYRIC", 1]],
      minlevel: 11,
      description: desc([
        "When I use Shrouded Assault, I can teleport up to 30 ft to an unoccupied space I can see."
      ])
    },
    "subclassfeature15": {
      name: "Mask of Dread",
      source: [["CYRIC", 1]],
      minlevel: 15,
      description: desc([
        "When a creature fails a save against one of my illusion spells, it is frightened until the end of its next turn."
      ])
    }
  }
});

// Rogue: The Masque
AddSubClass("rogue", "the masque", {
  regExpSearch: /masque/i,
  subname: "The Masque",
  fullname: "Rogue: The Masque",
  source: [["CYRIC", 1]],
  features: {
    "subclassfeature1": {
      name: "Word Wound",
      source: [["CYRIC", 1]],
      minlevel: 3,
      description: desc([
        "You weaponize derision, deception, and distraction. As a bonus action, choose one creature you can see within 30 feet.",
        "The creature must succeed on a Charisma saving throw (DC = 8 + your proficiency bonus + your Charisma modifier), or be mentally exposed until the start of your next turn.",
        "While exposed, the next time you hit the creature with an attack, you can apply Sneak Attack damage even if you don’t have advantage and no ally is nearby.",
        "If the creature succeeds, you can’t target it again with this feature until you finish a short or long rest."
      ]),
      action: ["bonus action", "Word Wound"]
    },
    "subclassfeature2": {
      name: "Grace and Guile",
      source: [["CYRIC", 1]],
      minlevel: 3,
      description: desc([
        "You may use Charisma instead of Intelligence for your subclass saving throw DCs or features.",
        "You gain proficiency in either Persuasion or Deception (your choice).",
        "You learn the Vicious Mockery cantrip. It counts as a rogue cantrip for you.",
        "You may apply your Sneak Attack to Vicious Mockery if the target is currently mentally exposed."
      ])
    },
    "subclassfeature3": {
      name: "Emotional Disarmament",
      source: [["CYRIC", 1]],
      minlevel: 9,
      description: desc([
        "When you target a creature with Word Wound and they fail the saving throw, you may impose one of the following conditions until the end of your next turn:",
        "1) The creature cannot take reactions.",
        "2) The creature has disadvantage on the next Wisdom or Intelligence saving throw it makes.",
        "3) The creature’s movement speed is reduced by 10 feet.",
        "You may use this feature a number of times equal to your Charisma modifier (minimum of once) per long rest."
      ])
    },
    "subclassfeature4": {
      name: "Veiled Threat",
      source: [["CYRIC", 1]],
      minlevel: 13,
      description: desc([
        "You are always under the effect of nondetection.",
        "When a creature targets you with a spell or attack and fails, you may use your reaction to cast Suggestion on them without expending a spell slot. They have disadvantage on the saving throw if they were mentally exposed this turn.",
        "Once you use this feature, you must finish a short or long rest to use it again."
      ]),
      action: ["reaction", "Veiled Threat"]
    },
    "subclassfeature5": {
      name: "The Final Mask",
      source: [["CYRIC", 1]],
      minlevel: 17,
      description: desc([
        "When you reduce a creature to 0 HP or succeed in a Deception or Persuasion check contested by them, you may mark them with your Final Mask.",
        "Until the end of your next turn, any attack against that creature has advantage.",
        "If a creature marked by your Final Mask dies, you regain one expended use of Word Wound.",
        "You may use this feature a number of times equal to your Charisma modifier per long rest."
      ])
    }
  }
});
