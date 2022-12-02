const lib = require("lib");
const free = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(free, 5));
        this.super$load();
    }
}, "free", Planets.sun, 1);
const sS = require("sectorSize");
sS.planetGrid(free, 3.3);
free.generator = new SerpuloPlanetGenerator();
free.atmosphereColor = Color.valueOf("008800");
free.atmosphereRadIn = 0.05;
free.atmosphereRadOut = 0.5;
free.localizedName = "Vivolus";;
free.visible = true;
free.bloom = false;
free.accessible = true;
free.alwaysUnlocked = true;
free.startSector = 1;
free.orbitRadius = 42;
const maps = new SectorPreset("wo-de-tu", free, 1);
maps.alwaysUnlocked = true;
maps.captureWave = 1;
maps.difficulty = 5;
maps.localizedName = "start";
exports.maps = maps;
lib.addToResearch(maps, {
    parent: 'planetaryTerminal',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.groundZero))
});