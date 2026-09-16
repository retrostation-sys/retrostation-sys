// https://ia801900.us.archive.org/view_archive.php?archive=/2/items/ultimate-rom-collection/Sony%20-%20PS1%20%28Update%201%29.zip

const x= "https://drive.google.com/thumbnail?id=1";
const y= "https://archive.org/download/ultimate-rom-collection/Sony%20-%20PS1%20%28Update%201%29.zip/";

function psx(imgId, titulo, archivo) {
     return {
          system: "psx", 
          img: x + imgId, 
          title: titulo, 
          src: y + archivo
     };
};

agregarJuegos([
     psx("F3cJMILeajZuvt72NnakYsOWye5pKPpu", "¡S INTERNAL SECTION", "iS%20-%20Internal%20Section%20%28Japan%29%20%5BT-En%20by%20GameHacking.org%20v1.02%5D.chd"),
     psx("-0Dligj5SJLVl2ge8K8pSQ3EDkITvsnZ", "FIGHTING FORCE", "Fighting%20Force%20%28USA%29%20%28Rev%202%29.chd"),
     psx("w-ghwDp9B1lc0djeaUJe8oFxXUd_8_0y", "FRONT MISSION 2", "Front%20Mission%202%20%28Japan%29%20%5BT-En%20by%20Front%20Mission%205%20Team%20Patch%20F%5D.chd"),
     psx("E-Ksv0aee3Db8vphip6WwabHmG_nwgdA", "GUNDAM BATTLE ASSAULT", "Gundam%20Battle%20Assault%20%28USA%29.chd"),
     psx("NpWi2h8xsqppw12BQ8kGiGri4cQW5pf0", "GUNDAM BATTLE ASSAULT 2", "Gundam%20Battle%20Assault%202%20%28USA%29.chd"),
     psx("", "HARMFUL PARK",  "Harmful%20Park%20%28Japan%29%20%5BT-En%20by%20Hilltop%20v1.1%5D.chd"),
     psx("", "IN COLD BLOOD (D1)",  "In%20Cold%20Blood%20%28USA%29%20%28Disc%201%29.chd"),
     psx("", "IN COLD BLOOD (D2)",  "In%20Cold%20Blood%20%28USA%29%20%28Disc%202%29.chd"),
     psx("", "JADE COCOON",  "Jade%20Cocoon%20-%20Story%20of%20the%20Tamamayu%20%28USA%29.chd"),
     psx("", "MAGIC CARPET",  "Magic%20Carpet%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CSv%29.chd"),
     psx("", "R-C STUNT COPTER",  "R-C%20Stunt%20Copter%20%28USA%29.chd"),
     psx("", "SAGA FRONTIER",  "SaGa%20Frontier%20%28USA%29.chd"),
     psx("", "SAGA FRONTIER 2",  "SaGa%20Frontier%202%20%28USA%29.chd"),
     psx("", "SKULLMONKEYS",  "Skullmonkeys%20%28USA%29.chd"),
     psx("", "SPEED PUNKS",  "Speed%20Punks%20%28USA%29.chd"),
     psx("", "TAIL CONCERTO",  "Tail%20Concerto%20%28USA%29.chd"),
     psx("", "TEAM BUDDIES",  "Team%20Buddies%20%28USA%29.chd"),
     psx("", "TENCHU STEALTH ASSASSINS",  "Tenchu%20-%20Stealth%20Assassins%20%28USA%29%20%28Rev%201%29.chd"),
     psx("", "TENCHU 2 BIRTH OF THE STEALTH ASSASSINS",  "Tenchu%202%20-%20Birth%20of%20the%20Stealth%20Assassins%20%28USA%29.chd"),
     psx("", "THUNDER FORCE V PERFECT SYSTEM",  "Thunder%20Force%20V%20-%20Perfect%20System%20%28USA%29.chd"),
     psx("", "TOBAL NO. 1",  "Tobal%20No.%201%20%28USA%29.chd"),
     psx("", "TRAP GUNNER",  "Trap%20Gunner%20%28USA%29.chd"),
     psx("", "TWISTED METAL",  "Twisted%20Metal%20%28USA%29.chd"),
     psx("", "WAR GAMES DEFCON 1",  "WarGames%20-%20Defcon%201%20%28USA%29.chd"),
     psx("", "X-COM UFO DEFENSE",  "X-COM%20-%20UFO%20Defense%20%28USA%29.chd"),
     psx("", "ZANAC X ZANAC",  "Zanac%20x%20Zanac%20%28Japan%29.chd"),
     

]);