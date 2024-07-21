"use strict";

// TODO: filters (by race, class, etc), other types of choices (e.g. professions)
// TODO: Maybe some styling too >.>

const races = [
    "Dark Iron Dwarf",
    "Draenei",
    "Dwarf",
    "Gnome",
    "Human",
    "Kul Tiran",
    "Lightforged Draenei",
    "Mechagnome",
    "Night Elf",
    "Void Elf",
    "Worgen",
    "Blood Elf",
    "Goblin",
    "Highmountain Tauren",
    "Mag'har Orc",
    "Nightborne",
    "Orc",
    "Tauren",
    "Troll",
    "Undead",
    "Vulpera",
    "Zandalari Troll",
    "Dracthyr",
    "Pandaren"
]

const classes = {
    "Blood Elf": ["Death Knight", "Demon Hunter", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
    "Dark Iron Dwarf": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Dracthyr": ["Evoker"],
    "Draenei": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Dwarf": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Gnome": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
    "Goblin": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Highmountain Tauren": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Human": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
    "Kul Tiran": ["Death Knight", "Druid", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Lightforged Draenei": ["Death Knight", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Warlock", "Warrior"],
    "Mag'har Orc": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Mechagnome": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
    "Night Elf": ["Death Knight", "Demon Hunter", "Druid", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
    "Nightborne": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
    "Orc": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Pandaren": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Tauren": ["Death Knight", "Druid", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Troll": ["Death Knight", "Druid", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Undead": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
    "Void Elf": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
    "Vulpera": ["Death Knight", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"],
    "Worgen": ["Death Knight", "Druid", "Hunter", "Mage", "Monk", "Priest", "Rogue", "Warlock", "Warrior"],
    "Zandalari Troll": ["Death Knight", "Druid", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"]
}

const specs = {
    "Death Knight": ["Blood", "Frost", "Unholy"],
    "Demon Hunter": ["Havoc", "Vengeance"],
    "Druid": ["Balance", "Feral", "Guardian", "Restoration"],
    "Evoker": ["Augmentation", "Devastation", "Preservation"],
    "Hunter": ["Beast Mastery", "Marksmanship", "Survival"],
    "Mage": ["Arcane", "Fire", "Frost"],
    "Monk": ["Brewmaster", "Mistweaver", "Windwalker"],
    "Paladin": ["Holy", "Protection", "Retribution"],
    "Priest": ["Discipline", "Holy", "Shadow"],
    "Rogue": ["Assassination", "Outlaw", "Subtlety"],
    "Shaman": ["Elemental", "Enhancement", "Restoration"],
    "Warlock": ["Affliction", "Demonology", "Destruction"],
    "Warrior": ["Arms", "Fury", "Protection"]
}

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
        document.getElementById('js-randomize').addEventListener('click', () => {
            const chosenRace = pickRandom(races);
            const chosenClass = pickRandom(classes[chosenRace]);
            document.getElementById('js-outcome').innerText = `${chosenRace} - ${chosenClass} (${pickRandom(specs[chosenClass])})`;
        });
    }
}

function pickRandom(fromData) {
    return fromData[Math.floor(Math.random() * fromData.length)];
}