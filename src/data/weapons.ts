export interface AttackPhase {
  label: string;
  windup: number;
  hit: number;
  hitstop?: number;
  recover?: number;
  altRecover?: number;
  finish?: number;
}

export interface Weapon {
  name: string;
  cat: string;
  slot: string;
  hand: 'one' | 'two';
  dmgMin: number;
  dmgMax: number;
  dmgType: 'Physical' | 'Magical' | 'Phys+Magic';
  movespd: number;
  dmgMagMin?: number;
  dmgMagMax?: number;
  comboMult: number[];
  attacks: AttackPhase[];
}

export const WEAPONS: Weapon[] = [
  // ────────────────────────────────────────
  {name: 'Abyssal Trident', cat: 'Polearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 42, dmgMax: 42, dmgType: 'Physical', movespd: -40,
   comboMult: [100, 100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.706, hit: 0.098, recover: 0.279, altRecover: 0.349, finish: 0.996, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.748, hit: 0.098, recover: 0.319, altRecover: 0.407, finish: 1.554, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.824, hit: 0.115, altRecover: 0.409, finish: 0.821, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Arming Sword', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 27, dmgMax: 33, dmgType: 'Physical', movespd: -20,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.399, hit: 0.205, recover: 0.234, altRecover: 0.171, finish: 1.197, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.4, hit: 0.157, recover: 0.376, altRecover: 0.309, finish: 1.043, hitstop: 0.235},
    {label: 'Primary A3', windup: 0.6, hit: 0.154, altRecover: 0.313, finish: 1.213, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Axe of Righteousness', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 48, dmgMax: 48, dmgType: 'Physical', movespd: -35,
   comboMult: [100, 110, 120],
   attacks: [
    {label: 'Primary A1', windup: 1, hit: 0.122, recover: 0.245, altRecover: 0.611, finish: 1.245, hitstop: 0.235},
    {label: 'Primary A2', windup: 1.033, hit: 0.167, recover: 0.267, altRecover: 0.386, finish: 1.2, hitstop: 0.235},
    {label: 'Primary A3', windup: 1.133, hit: 0.134, altRecover: 0.566, finish: 1.2, hitstop: 0.235},
   ]},
  // ────────────────────────────────────────
  {name: 'Bardiche', cat: 'Polearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 44, dmgMax: 56, dmgType: 'Physical', movespd: -45,
   comboMult: [100, 100, 110],
   attacks: [
    {label: 'Primary A1', windup: 1.033, hit: 0.183, recover: 0.317, altRecover: 0.543, finish: 1.35, hitstop: 0.235},
    {label: 'Primary A2', windup: 0.657, hit: 0.2, recover: 0.443, altRecover: 0.335, finish: 1.143, hitstop: 0.235},
    {label: 'Primary A3', windup: 1.123, hit: 0.21, altRecover: 0.358, finish: 1.233, hitstop: 0.235},
   ]},
  // ────────────────────────────────────────
  {name: 'Bare Hand One Handed', cat: 'Unarmed', slot: 'Main 1H', hand: 'one',
   dmgMin: 8, dmgMax: 8, dmgType: 'Physical', movespd: 0,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.8, hit: 0.188, altRecover: 0.245, finish: 0.912, hitstop: 0.22},
   ]},
  // ────────────────────────────────────────
  {name: 'Bare Hand Two Handed', cat: 'Unarmed', slot: 'Main 2H', hand: 'two',
   dmgMin: 8, dmgMax: 8, dmgType: 'Physical', movespd: 0,
   comboMult: [100, 100],
   attacks: [
    {label: 'Primary A1', windup: 0.833, hit: 0.2, recover: 0.1, finish: 0.967, hitstop: 0.12},
    {label: 'Primary A2', windup: 0.767, hit: 0.267, recover: 0.433, finish: 0.967, hitstop: 0.12},
   ]},
  // ────────────────────────────────────────
  {name: 'Battle Axe', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 43, dmgMax: 55, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.906, hit: 0.186, recover: 0.293, altRecover: 0.506, finish: 1.108, hitstop: 0.237},
    {label: 'Primary A2', windup: 0.993, hit: 0.227, altRecover: 0.535, finish: 1.014, hitstop: 0.238},
   ]},
  // ────────────────────────────────────────
  {name: 'Blade of Righteousness', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 38, dmgMax: 38, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.932, hit: 0.229, recover: 0.283, altRecover: 0.339, finish: 1.005, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.679, hit: 0.233, recover: 0.054, altRecover: 0.146, finish: 0.954, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.757, hit: 0.233, altRecover: 0.443, finish: 0.976, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Bloodthirst', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 54, dmgMax: 54, dmgType: 'Physical', movespd: -40,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.929, hit: 0.242, recover: 0.334, altRecover: 0.47, finish: 1.028, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.795, hit: 0.238, recover: 0.567, altRecover: 0.478, finish: 1.1, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.967, hit: 0.233, altRecover: 0.518, finish: 0.967, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Bolas', cat: 'ThrowableStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 10, dmgMax: 22, dmgType: 'Physical', movespd: -10,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.4, hit: 0.15},
   ]},
  // ────────────────────────────────────────
  {name: 'Boneshaper', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 32, dmgMax: 32, dmgType: 'Physical', movespd: -22,
   comboMult: [100, 110, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.669, hit: 0.211, recover: 0.237, altRecover: 0.198, finish: 0.82, hitstop: 0.182},
    {label: 'Primary A2', windup: 0.62, hit: 0.223, recover: 0.262, altRecover: 0.228, finish: 0.924, hitstop: 0.182},
    {label: 'Primary A3', windup: 0.737, hit: 0.211, recover: 0.158, altRecover: 0.138, finish: 0.785, hitstop: 0.182},
   ]},
  // ────────────────────────────────────────
  {name: 'Bow of Righteousness', cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 27, dmgMax: 27, dmgType: 'Physical', movespd: -40,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 1.5, hit: 0.15, finish: 1.167},
   ]},
  // ────────────────────────────────────────
  {name: 'Catice', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 20, dmgMax: 20, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.692, hit: 0.188, recover: 0.224, altRecover: 0.333, finish: 0.987, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.735, hit: 0.21, recover: 0.183, altRecover: 0.296, finish: 0.921, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.787, hit: 0.165, finish: 1.115, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: "Centaur's Madness", cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 29, dmgMax: 29, dmgType: 'Physical', movespd: -40,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 1.5, hit: 0.15, finish: 1.167},
   ]},
  // ────────────────────────────────────────
  {name: 'Ceremonial Staff', cat: 'MagicStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 26, dmgMax: 32, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.637, hit: 0.168, recover: 0.064, altRecover: 0.151, finish: 0.828, hitstop: 0.3},
    {label: 'Primary A2', windup: 0.676, hit: 0.234, altRecover: 0.321, finish: 0.89, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Cinder', cat: 'Polearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 60, dmgMax: 60, dmgType: 'Physical', movespd: -50,
   comboMult: [100, 100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.974, hit: 0.096, recover: 0.179, altRecover: 0.702, finish: 1.063, hitstop: 0.233},
    {label: 'Primary A2', windup: 0.818, hit: 0.116, recover: 0.267, altRecover: 0.251, finish: 1.067, hitstop: 0.232},
    {label: 'Primary A3', windup: 1.133, hit: 0.113, altRecover: 0.353, finish: 1.02, hitstop: 0.23},
   ]},
  // ────────────────────────────────────────
  {name: 'Club', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 28, dmgMax: 34, dmgType: 'Physical', movespd: -22,
   comboMult: [100, 110, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.669, hit: 0.211, recover: 0.237, altRecover: 0.198, finish: 0.82, hitstop: 0.182},
    {label: 'Primary A2', windup: 0.62, hit: 0.223, recover: 0.262, altRecover: 0.228, finish: 0.924, hitstop: 0.182},
    {label: 'Primary A3', windup: 0.737, hit: 0.211, recover: 0.158, altRecover: 0.138, finish: 0.785, hitstop: 0.182},
   ]},
  // ────────────────────────────────────────
  {name: 'Crossbow', cat: 'Crossbow', slot: 'Main 2H', hand: 'two',
   dmgMin: 33, dmgMax: 39, dmgType: 'Physical', movespd: -50,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.4, hit: 0.15, finish: 0.8},
   ]},
  // ────────────────────────────────────────
  {name: 'Crystal Sword', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 13, dmgMax: 19, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.692, hit: 0.188, recover: 0.224, altRecover: 0.333, finish: 0.987, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.735, hit: 0.21, recover: 0.183, altRecover: 0.296, finish: 0.921, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.787, hit: 0.165, finish: 1.115, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Cutlass', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 29, dmgMax: 35, dmgType: 'Physical', movespd: -23,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.522, hit: 0.225, recover: 0.186, altRecover: 0.161, finish: 0.886, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.6, hit: 0.158, recover: 0.375, altRecover: 0.305, finish: 0.876, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.522, hit: 0.204, recover: 0.316, altRecover: 0.277, finish: 0.907, hitstop: 0.202},
    {label: 'Primary A4', windup: 0.63, hit: 0.11, altRecover: 0.245, finish: 1.06, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Dagger of Righteousness', cat: 'Dagger', slot: 'Main 1H', hand: 'one',
   dmgMin: 18, dmgMax: 18, dmgType: 'Physical', movespd: -10,
   comboMult: [100, 100, 100],
   attacks: [
    {label: 'Primary A1', windup: 0.319, hit: 0.365, recover: 0.115, altRecover: 0.093, finish: 0.582, hitstop: 0.08},
    {label: 'Primary A2', windup: 0.3, hit: 0.1, recover: 0.23, altRecover: 0.336, finish: 0.867, hitstop: 0.08},
    {label: 'Primary A3', windup: 0.396, hit: 0.186, recover: 0.191, altRecover: 0.173, finish: 0.618, hitstop: 0.08},
   ]},
  // ────────────────────────────────────────
  {name: "Demon's Glee", cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 26, dmgMax: 26, dmgType: 'Physical', movespd: -15,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.433, hit: 0.069, recover: 0.112, altRecover: 0.153, finish: 0.565, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.669, hit: 0.079, recover: 0.18, altRecover: 0.152, finish: 0.652, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.651, hit: 0.081, recover: 0.239, altRecover: 0.28, finish: 0.769, hitstop: 0.202},
    {label: 'Primary A4', windup: 0.596, hit: 0.083, finish: 0.688, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Divine Axe', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 50, dmgMax: 50, dmgType: 'Physical', movespd: -35,
   comboMult: [100, 110, 120],
   attacks: [
    {label: 'Primary A1', windup: 1, hit: 0.122, recover: 0.245, altRecover: 0.611, finish: 1.245, hitstop: 0.235},
    {label: 'Primary A2', windup: 1.033, hit: 0.167, recover: 0.267, altRecover: 0.386, finish: 1.2, hitstop: 0.235},
    {label: 'Primary A3', windup: 1.133, hit: 0.134, altRecover: 0.566, finish: 1.2, hitstop: 0.235},
   ]},
  // ────────────────────────────────────────
  {name: 'Divine Blade', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 39, dmgMax: 39, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.932, hit: 0.229, recover: 0.283, altRecover: 0.339, finish: 1.005, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.679, hit: 0.233, recover: 0.054, altRecover: 0.146, finish: 0.954, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.757, hit: 0.233, altRecover: 0.443, finish: 0.976, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Divine Bow', cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 28, dmgMax: 28, dmgType: 'Physical', movespd: -40,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 1.5, hit: 0.15, finish: 1.167},
   ]},
  // ────────────────────────────────────────
  {name: 'Divine Dagger', cat: 'Dagger', slot: 'Main 1H', hand: 'one',
   dmgMin: 19, dmgMax: 19, dmgType: 'Physical', movespd: -10,
   comboMult: [100, 100, 100],
   attacks: [
    {label: 'Primary A1', windup: 0.319, hit: 0.365, recover: 0.115, altRecover: 0.093, finish: 0.582, hitstop: 0.08},
    {label: 'Primary A2', windup: 0.3, hit: 0.1, recover: 0.23, altRecover: 0.336, finish: 0.867, hitstop: 0.08},
    {label: 'Primary A3', windup: 0.396, hit: 0.186, recover: 0.191, altRecover: 0.173, finish: 0.618, hitstop: 0.08},
   ]},
  // ────────────────────────────────────────
  {name: 'Divine Rod', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 35, dmgMax: 35, dmgType: 'Physical', movespd: -20,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.717, hit: 0.15, recover: 0.14, altRecover: 0.116, finish: 0.863, hitstop: 0.136},
    {label: 'Primary A2', windup: 0.749, hit: 0.172, recover: 0.146, altRecover: 0.111, finish: 0.846, hitstop: 0.137},
    {label: 'Primary A3', windup: 0.77, hit: 0.257, altRecover: 0.257, finish: 0.906, hitstop: 0.137},
   ]},
  // ────────────────────────────────────────
  {name: 'Divine Staff', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 38, dmgMax: 38, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.737, hit: 0.096, recover: 0.2, altRecover: 0.271, finish: 0.967, hitstop: 0.22},
    {label: 'Primary A2', windup: 0.732, hit: 0.168, recover: 0.3, altRecover: 0.357, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A3', windup: 0.612, hit: 0.188, recover: 0.3, altRecover: 0.358, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A4', windup: 0.733, hit: 0.133, altRecover: 0.467, finish: 1.033, hitstop: 0.22},
   ]},
  // ────────────────────────────────────────
  {name: 'Double Axe', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 44, dmgMax: 56, dmgType: 'Physical', movespd: -35,
   comboMult: [100, 110, 120],
   attacks: [
    {label: 'Primary A1', windup: 1, hit: 0.122, recover: 0.245, altRecover: 0.611, finish: 1.245, hitstop: 0.235},
    {label: 'Primary A2', windup: 1.033, hit: 0.167, recover: 0.267, altRecover: 0.386, finish: 1.2, hitstop: 0.235},
    {label: 'Primary A3', windup: 1.133, hit: 0.134, altRecover: 0.566, finish: 1.2, hitstop: 0.235},
   ]},
  // ────────────────────────────────────────
  {name: 'Echo of Screams', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 58, dmgMax: 58, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.906, hit: 0.186, recover: 0.293, altRecover: 0.506, finish: 1.108, hitstop: 0.237},
    {label: 'Primary A2', windup: 0.993, hit: 0.227, altRecover: 0.535, finish: 1.014, hitstop: 0.238},
   ]},
  // ────────────────────────────────────────
  {name: 'Elven Bow of Truth', cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 25, dmgMax: 25, dmgType: 'Physical', movespd: -30,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 1.2, hit: 0.15, finish: 1.6},
   ]},
  // ────────────────────────────────────────
  {name: 'Falchion of Honor', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 37, dmgMax: 37, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.65, hit: 0.166, recover: 0.384, altRecover: 0.321, finish: 1.05, hitstop: 0.23},
    {label: 'Primary A2', windup: 0.615, hit: 0.127, recover: 0.404, altRecover: 0.31, finish: 1.024, hitstop: 0.23},
    {label: 'Primary A3', windup: 0.767, hit: 0.119, altRecover: 0.181, finish: 1.115, hitstop: 0.23},
   ]},
  // ────────────────────────────────────────
  {name: 'Falchion', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 33, dmgMax: 39, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.65, hit: 0.166, recover: 0.384, altRecover: 0.321, finish: 1.05, hitstop: 0.23},
    {label: 'Primary A2', windup: 0.615, hit: 0.127, recover: 0.404, altRecover: 0.31, finish: 1.024, hitstop: 0.23},
    {label: 'Primary A3', windup: 0.767, hit: 0.119, altRecover: 0.181, finish: 1.115, hitstop: 0.23},
   ]},
  // ────────────────────────────────────────
  {name: 'Famine', cat: 'Axe', slot: 'Main 1H', hand: 'one',
   dmgMin: 36, dmgMax: 36, dmgType: 'Physical', movespd: -22,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.595, hit: 0.133, recover: 0.224, altRecover: 0.094, finish: 0.705, hitstop: 0.166},
    {label: 'Primary A2', windup: 0.669, hit: 0.156, recover: 0.154, altRecover: 0.067, finish: 0.675, hitstop: 0.166},
    {label: 'Primary A3', windup: 0.714, hit: 0.134, finish: 0.786, hitstop: 0.166},
   ]},
  // ────────────────────────────────────────
  {name: 'Felling Axe', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 38, dmgMax: 50, dmgType: 'Physical', movespd: -30,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.7, hit: 0.156, altRecover: 0.809, finish: 1.844},
   ]},
  // ────────────────────────────────────────
  {name: 'Flanged Mace', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 32, dmgMax: 38, dmgType: 'Physical', movespd: -20,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.717, hit: 0.15, recover: 0.14, altRecover: 0.116, finish: 0.863, hitstop: 0.136},
    {label: 'Primary A2', windup: 0.749, hit: 0.172, recover: 0.146, altRecover: 0.111, finish: 0.846, hitstop: 0.137},
    {label: 'Primary A3', windup: 0.77, hit: 0.257, altRecover: 0.257, finish: 0.906, hitstop: 0.137},
   ]},
  // ────────────────────────────────────────
  {name: 'Francisca Axe', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 12, dmgMax: 24, dmgType: 'Physical', movespd: -10,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.4, hit: 0.15},
   ]},
  // ────────────────────────────────────────
  {name: 'Frostlight Crystal Sword', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 17, dmgMax: 17, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.692, hit: 0.188, recover: 0.224, altRecover: 0.333, finish: 0.987, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.735, hit: 0.21, recover: 0.183, altRecover: 0.296, finish: 0.921, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.787, hit: 0.165, finish: 1.115, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Frostlight Spear', cat: 'Polearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 38, dmgMax: 38, dmgType: 'Physical', movespd: -40,
   comboMult: [100, 100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.706, hit: 0.098, recover: 0.279, altRecover: 0.349, finish: 0.996, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.748, hit: 0.098, recover: 0.319, altRecover: 0.407, finish: 1.554, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.824, hit: 0.115, altRecover: 0.409, finish: 0.821, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Frostlight War Maul', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 50, dmgMax: 50, dmgType: 'Physical', movespd: -50,
   comboMult: [100, 110, 110],
   attacks: [
    {label: 'Primary A1', windup: 1.033, hit: 0.3, recover: 0.033, altRecover: 0.445, finish: 1.067, hitstop: 0.196},
    {label: 'Primary A2', windup: 0.867, hit: 0.333, recover: 0.267, altRecover: 0.467, finish: 1.3, hitstop: 0.196},
    {label: 'Primary A3', windup: 0.833, hit: 0.367, recover: 0.033, altRecover: 0.5, finish: 1, hitstop: 0.196},
   ]},
  // ────────────────────────────────────────
  {name: 'Fulgor', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 44, dmgMax: 44, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.932, hit: 0.229, recover: 0.283, altRecover: 0.339, finish: 1.005, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.679, hit: 0.233, recover: 0.054, altRecover: 0.146, finish: 0.954, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.757, hit: 0.233, altRecover: 0.443, finish: 0.976, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Golden Felling Axe', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 46, dmgMax: 46, dmgType: 'Physical', movespd: -30,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.7, hit: 0.156, altRecover: 0.809, finish: 1.844},
   ]},
  // ────────────────────────────────────────
  {name: 'Golden Scripture of Solaris', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 22, dmgMax: 22, dmgType: 'Physical', movespd: -15,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.793, hit: 0.163, finish: 0.944, hitstop: 0.15},
   ]},
  // ────────────────────────────────────────
  {name: 'Golden Viking Sword', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 33, dmgMax: 33, dmgType: 'Physical', movespd: -20,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.636, hit: 0.165, recover: 0.231, altRecover: 0.228, finish: 0.765, hitstop: 0.166},
    {label: 'Primary A2', windup: 0.699, hit: 0.175, recover: 0.157, altRecover: 0.257, finish: 0.726, hitstop: 0.188},
    {label: 'Primary A3', windup: 0.779, hit: 0.145, altRecover: 0.224, finish: 0.809, hitstop: 0.166},
   ]},
  // ────────────────────────────────────────
  {name: 'Grimslayer', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 47, dmgMax: 47, dmgType: 'Physical', movespd: -40,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.929, hit: 0.242, recover: 0.334, altRecover: 0.47, finish: 1.028, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.795, hit: 0.238, recover: 0.567, altRecover: 0.478, finish: 1.1, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.967, hit: 0.233, altRecover: 0.518, finish: 0.967, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Halberd', cat: 'Polearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 45, dmgMax: 57, dmgType: 'Physical', movespd: -50,
   comboMult: [100, 100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.974, hit: 0.096, recover: 0.179, altRecover: 0.702, finish: 1.063, hitstop: 0.233},
    {label: 'Primary A2', windup: 0.818, hit: 0.116, recover: 0.267, altRecover: 0.251, finish: 1.067, hitstop: 0.232},
    {label: 'Primary A3', windup: 1.133, hit: 0.113, altRecover: 0.353, finish: 1.02, hitstop: 0.23},
   ]},
  // ────────────────────────────────────────
  {name: 'Hand Cannon', cat: 'Firearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 35, dmgMax: 47, dmgType: 'Physical', movespd: -30,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.4, hit: 0.15},
   ]},
  // ────────────────────────────────────────
  {name: 'Haze Blade', cat: 'Dagger', slot: 'Main 1H', hand: 'one',
   dmgMin: 20, dmgMax: 20, dmgType: 'Physical', movespd: -10,
   comboMult: [100, 100, 100],
   attacks: [
    {label: 'Primary A1', windup: 0.319, hit: 0.365, recover: 0.115, altRecover: 0.093, finish: 0.582, hitstop: 0.08},
    {label: 'Primary A2', windup: 0.3, hit: 0.1, recover: 0.23, altRecover: 0.336, finish: 0.867, hitstop: 0.08},
    {label: 'Primary A3', windup: 0.396, hit: 0.186, recover: 0.191, altRecover: 0.173, finish: 0.618, hitstop: 0.08},
   ]},
  // ────────────────────────────────────────
  {name: "Horseman's Axe", cat: 'Axe', slot: 'Main 1H', hand: 'one',
   dmgMin: 28, dmgMax: 34, dmgType: 'Physical', movespd: -22,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.595, hit: 0.133, recover: 0.224, altRecover: 0.094, finish: 0.705, hitstop: 0.166},
    {label: 'Primary A2', windup: 0.669, hit: 0.156, recover: 0.154, altRecover: 0.067, finish: 0.675, hitstop: 0.166},
    {label: 'Primary A3', windup: 0.714, hit: 0.134, finish: 0.786, hitstop: 0.166},
   ]},
  // ────────────────────────────────────────
  {name: 'Illusory', cat: 'MagicStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 37, dmgMax: 37, dmgType: 'Phys+Magic', movespd: -20,
   dmgMagMin: 11, dmgMagMax: 11,
   comboMult: [100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.545, hit: 0.108, recover: 0.286, altRecover: 0.34, finish: 0.776, hitstop: 0.3},
    {label: 'Primary A2', windup: 0.934, hit: 0.157, altRecover: 0.215, finish: 0.809, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Kris Dagger', cat: 'Dagger', slot: 'Main 1H', hand: 'one',
   dmgMin: 16, dmgMax: 22, dmgType: 'Physical', movespd: -10,
   comboMult: [100, 105, 110, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.495, hit: 0.141, recover: 0.114, altRecover: 0.163, finish: 0.664, hitstop: 0.08},
    {label: 'Primary A2', windup: 0.579, hit: 0.155, recover: 0.06, altRecover: 0.168, finish: 0.599, hitstop: 0.08},
    {label: 'Primary A3', windup: 0.611, hit: 0.165, recover: 0.025, altRecover: 0.209, finish: 0.724, hitstop: 0.08},
    {label: 'Primary A4', windup: 0.14, hit: 0.152, altRecover: 0.472, finish: 0.841, hitstop: 0.08},
   ]},
  // ────────────────────────────────────────
  {name: "Kuma's Claw", cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 35, dmgMax: 35, dmgType: 'Physical', movespd: -20,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.399, hit: 0.205, recover: 0.234, altRecover: 0.171, finish: 1.197, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.4, hit: 0.157, recover: 0.376, altRecover: 0.309, finish: 1.043, hitstop: 0.235},
    {label: 'Primary A3', windup: 0.6, hit: 0.154, altRecover: 0.313, finish: 1.213, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: "Kuma's Fang", cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 41, dmgMax: 41, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.65, hit: 0.166, recover: 0.384, altRecover: 0.321, finish: 1.05, hitstop: 0.23},
    {label: 'Primary A2', windup: 0.615, hit: 0.127, recover: 0.404, altRecover: 0.31, finish: 1.024, hitstop: 0.23},
    {label: 'Primary A3', windup: 0.767, hit: 0.119, altRecover: 0.181, finish: 1.115, hitstop: 0.23},
   ]},
  // ────────────────────────────────────────
  {name: 'Leviathan', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 56, dmgMax: 56, dmgType: 'Physical', movespd: -50,
   comboMult: [100, 110, 110],
   attacks: [
    {label: 'Primary A1', windup: 1.033, hit: 0.3, recover: 0.033, altRecover: 0.445, finish: 1.067, hitstop: 0.196},
    {label: 'Primary A2', windup: 0.867, hit: 0.333, recover: 0.267, altRecover: 0.467, finish: 1.3, hitstop: 0.196},
    {label: 'Primary A3', windup: 0.833, hit: 0.367, recover: 0.033, altRecover: 0.5, finish: 1, hitstop: 0.196},
   ]},
  // ────────────────────────────────────────
  {name: 'Life after Death', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 59, dmgMax: 59, dmgType: 'Physical', movespd: -35,
   comboMult: [100, 110, 120],
   attacks: [
    {label: 'Primary A1', windup: 1, hit: 0.122, recover: 0.245, altRecover: 0.611, finish: 1.245, hitstop: 0.235},
    {label: 'Primary A2', windup: 1.033, hit: 0.167, recover: 0.267, altRecover: 0.386, finish: 1.2, hitstop: 0.235},
    {label: 'Primary A3', windup: 1.133, hit: 0.134, altRecover: 0.566, finish: 1.2, hitstop: 0.235},
   ]},
  // ────────────────────────────────────────
  {name: 'Light Bringer', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 36, dmgMax: 36, dmgType: 'Physical', movespd: -20,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.717, hit: 0.15, recover: 0.14, altRecover: 0.116, finish: 0.863, hitstop: 0.136},
    {label: 'Primary A2', windup: 0.749, hit: 0.172, recover: 0.146, altRecover: 0.111, finish: 0.846, hitstop: 0.137},
    {label: 'Primary A3', windup: 0.77, hit: 0.257, altRecover: 0.257, finish: 0.906, hitstop: 0.137},
   ]},
  // ────────────────────────────────────────
  {name: 'Longbow', cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 30, dmgMax: 36, dmgType: 'Physical', movespd: -50,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 2, hit: 0.15, finish: 0.933},
   ]},
  // ────────────────────────────────────────
  {name: 'Longsword', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 36, dmgMax: 42, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.932, hit: 0.229, recover: 0.283, altRecover: 0.339, finish: 1.005, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.679, hit: 0.233, recover: 0.054, altRecover: 0.146, finish: 0.954, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.757, hit: 0.233, altRecover: 0.443, finish: 0.976, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Lute', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 20, dmgMax: 26, dmgType: 'Physical', movespd: 0,
   comboMult: [100, 100],
   attacks: [
    {label: 'Primary A1', windup: 0.98, hit: 0.208, recover: 0.002, altRecover: 0.013, finish: 1.045, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.963, hit: 0.342, altRecover: 0.928, finish: 0.928, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Magic Staff', cat: 'MagicStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 29, dmgMax: 35, dmgType: 'Phys+Magic', movespd: -20,
   dmgMagMin: 4, dmgMagMax: 10,
   comboMult: [100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.545, hit: 0.108, recover: 0.286, altRecover: 0.34, finish: 0.776, hitstop: 0.3},
    {label: 'Primary A2', windup: 0.934, hit: 0.157, altRecover: 0.215, finish: 0.809, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Morning Star', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 32, dmgMax: 38, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.665, hit: 0.171, recover: 0.171, altRecover: 0.159, finish: 0.847, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.812, hit: 0.179, recover: 0.2, altRecover: 0.166, finish: 0.742, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.761, hit: 0.167, altRecover: 0.419, finish: 0.806, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Nipalan', cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 38, dmgMax: 38, dmgType: 'Physical', movespd: -50,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 2, hit: 0.15, finish: 0.933},
   ]},
  // ────────────────────────────────────────
  {name: 'Obsidian Bardiche', cat: 'Polearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 52, dmgMax: 52, dmgType: 'Physical', movespd: -45,
   comboMult: [100, 100, 110],
   attacks: [
    {label: 'Primary A1', windup: 1.033, hit: 0.183, recover: 0.317, altRecover: 0.543, finish: 1.35, hitstop: 0.235},
    {label: 'Primary A2', windup: 0.657, hit: 0.2, recover: 0.443, altRecover: 0.335, finish: 1.143, hitstop: 0.235},
    {label: 'Primary A3', windup: 1.123, hit: 0.21, altRecover: 0.358, finish: 1.233, hitstop: 0.235},
   ]},
  // ────────────────────────────────────────
  {name: 'Obsidian Cutlass', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 33, dmgMax: 33, dmgType: 'Physical', movespd: -23,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.522, hit: 0.225, recover: 0.186, altRecover: 0.161, finish: 0.886, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.6, hit: 0.158, recover: 0.375, altRecover: 0.305, finish: 0.876, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.522, hit: 0.204, recover: 0.316, altRecover: 0.277, finish: 0.907, hitstop: 0.202},
    {label: 'Primary A4', windup: 0.63, hit: 0.11, altRecover: 0.245, finish: 1.06, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Obsidian Morningstar', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 36, dmgMax: 36, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.665, hit: 0.171, recover: 0.171, altRecover: 0.159, finish: 0.847, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.812, hit: 0.179, recover: 0.2, altRecover: 0.166, finish: 0.742, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.761, hit: 0.167, altRecover: 0.419, finish: 0.806, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Obsidian War Hammer', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 37, dmgMax: 37, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.617, hit: 0.193, recover: 0.11, altRecover: 0.097, finish: 0.69, hitstop: 0.137},
    {label: 'Primary A2', windup: 0.763, hit: 0.195, recover: 0.147, altRecover: 0.14, finish: 0.675, hitstop: 0.137},
    {label: 'Primary A3', windup: 0.734, hit: 0.241, recover: 0.092, altRecover: 0.058, finish: 0.725, hitstop: 0.137},
    {label: 'Primary A4', windup: 0.935, hit: 0.215, altRecover: 0.367, finish: 0.85, hitstop: 0.136},
   ]},
  // ────────────────────────────────────────
  {name: 'Pestilence', cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 33, dmgMax: 33, dmgType: 'Physical', movespd: -40,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 1.5, hit: 0.15, finish: 1.167},
   ]},
  // ────────────────────────────────────────
  {name: 'Pulverizing Prayer', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 40, dmgMax: 40, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.665, hit: 0.171, recover: 0.171, altRecover: 0.159, finish: 0.847, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.812, hit: 0.179, recover: 0.2, altRecover: 0.166, finish: 0.742, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.761, hit: 0.167, altRecover: 0.419, finish: 0.806, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Quarterstaff', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 35, dmgMax: 41, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.737, hit: 0.096, recover: 0.2, altRecover: 0.271, finish: 0.967, hitstop: 0.22},
    {label: 'Primary A2', windup: 0.732, hit: 0.168, recover: 0.3, altRecover: 0.357, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A3', windup: 0.612, hit: 0.188, recover: 0.3, altRecover: 0.358, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A4', windup: 0.733, hit: 0.133, altRecover: 0.467, finish: 1.033, hitstop: 0.22},
   ]},
  // ────────────────────────────────────────
  {name: 'Rapier', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 22, dmgMax: 28, dmgType: 'Physical', movespd: -15,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.433, hit: 0.069, recover: 0.112, altRecover: 0.153, finish: 0.565, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.669, hit: 0.079, recover: 0.18, altRecover: 0.152, finish: 0.652, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.651, hit: 0.081, recover: 0.239, altRecover: 0.28, finish: 0.769, hitstop: 0.202},
    {label: 'Primary A4', windup: 0.596, hit: 0.083, finish: 0.688, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Recurve Bow', cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 25, dmgMax: 31, dmgType: 'Physical', movespd: -40,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 1.5, hit: 0.15, finish: 1.167},
   ]},
  // ────────────────────────────────────────
  {name: 'Requiem of the Fairy', cat: 'MagicStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 22, dmgMax: 22, dmgType: 'Phys+Magic', movespd: -10,
   dmgMagMin: 5, dmgMagMax: 5,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.793, hit: 0.163, finish: 0.944, hitstop: 0.15},
   ]},
  // ────────────────────────────────────────
  {name: 'Rod of Righteousness', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 34, dmgMax: 34, dmgType: 'Physical', movespd: -20,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.717, hit: 0.15, recover: 0.14, altRecover: 0.116, finish: 0.863, hitstop: 0.136},
    {label: 'Primary A2', windup: 0.749, hit: 0.172, recover: 0.146, altRecover: 0.111, finish: 0.846, hitstop: 0.137},
    {label: 'Primary A3', windup: 0.77, hit: 0.257, altRecover: 0.257, finish: 0.906, hitstop: 0.137},
   ]},
  // ────────────────────────────────────────
  {name: 'Rondel Dagger', cat: 'Dagger', slot: 'Main 1H', hand: 'one',
   dmgMin: 16, dmgMax: 22, dmgType: 'Physical', movespd: -10,
   comboMult: [100, 100, 100],
   attacks: [
    {label: 'Primary A1', windup: 0.319, hit: 0.365, recover: 0.115, altRecover: 0.093, finish: 0.582, hitstop: 0.08},
    {label: 'Primary A2', windup: 0.3, hit: 0.1, recover: 0.23, altRecover: 0.336, finish: 0.867, hitstop: 0.08},
    {label: 'Primary A3', windup: 0.396, hit: 0.186, recover: 0.191, altRecover: 0.173, finish: 0.618, hitstop: 0.08},
   ]},
  // ────────────────────────────────────────
  {name: 'Rubysilver Halberd', cat: 'Polearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 54, dmgMax: 54, dmgType: 'Physical', movespd: -50,
   comboMult: [100, 100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.974, hit: 0.096, recover: 0.179, altRecover: 0.702, finish: 1.063, hitstop: 0.233},
    {label: 'Primary A2', windup: 0.818, hit: 0.116, recover: 0.267, altRecover: 0.251, finish: 1.067, hitstop: 0.232},
    {label: 'Primary A3', windup: 1.133, hit: 0.113, altRecover: 0.353, finish: 1.02, hitstop: 0.23},
   ]},
  // ────────────────────────────────────────
  {name: 'Soulscraper', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 53, dmgMax: 53, dmgType: 'Physical', movespd: -30,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.7, hit: 0.156, altRecover: 0.809, finish: 1.844},
   ]},
  // ────────────────────────────────────────
  {name: "Sovereign's Ghostblade", cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 17, dmgMax: 17, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.692, hit: 0.188, recover: 0.224, altRecover: 0.333, finish: 0.987, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.735, hit: 0.21, recover: 0.183, altRecover: 0.296, finish: 0.921, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.787, hit: 0.165, finish: 1.115, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Spear of Rot', cat: 'Polearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 38, dmgMax: 38, dmgType: 'Physical', movespd: -40,
   comboMult: [100, 100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.706, hit: 0.098, recover: 0.279, altRecover: 0.349, finish: 0.996, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.748, hit: 0.098, recover: 0.319, altRecover: 0.407, finish: 1.554, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.824, hit: 0.115, altRecover: 0.409, finish: 0.821, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Spear', cat: 'Polearm', slot: 'Main 2H', hand: 'two',
   dmgMin: 34, dmgMax: 40, dmgType: 'Physical', movespd: -40,
   comboMult: [100, 100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.706, hit: 0.098, recover: 0.279, altRecover: 0.349, finish: 0.996, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.748, hit: 0.098, recover: 0.319, altRecover: 0.407, finish: 1.554, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.824, hit: 0.115, altRecover: 0.409, finish: 0.821, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Spectral Blade', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 40, dmgMax: 40, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.932, hit: 0.229, recover: 0.283, altRecover: 0.339, finish: 1.005, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.679, hit: 0.233, recover: 0.054, altRecover: 0.146, finish: 0.954, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.757, hit: 0.233, altRecover: 0.443, finish: 0.976, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Spellbook', cat: 'MagicStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 18, dmgMax: 24, dmgType: 'Phys+Magic', movespd: -10,
   dmgMagMin: 1, dmgMagMax: 7,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.793, hit: 0.163, finish: 0.944, hitstop: 0.15},
   ]},
  // ────────────────────────────────────────
  {name: 'Spellplunder Rod', cat: 'MagicStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 33, dmgMax: 33, dmgType: 'Phys+Magic', movespd: -20,
   dmgMagMin: 8, dmgMagMax: 8,
   comboMult: [100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.545, hit: 0.108, recover: 0.286, altRecover: 0.34, finish: 0.776, hitstop: 0.3},
    {label: 'Primary A2', windup: 0.934, hit: 0.157, altRecover: 0.215, finish: 0.809, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Spellweaver', cat: 'MagicStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 26, dmgMax: 26, dmgType: 'Phys+Magic', movespd: -10,
   dmgMagMin: 8, dmgMagMax: 8,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.793, hit: 0.163, finish: 0.944, hitstop: 0.15},
   ]},
  // ────────────────────────────────────────
  {name: 'Staff of Gluttony', cat: 'MagicStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 30, dmgMax: 30, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.637, hit: 0.168, recover: 0.064, altRecover: 0.151, finish: 0.828, hitstop: 0.3},
    {label: 'Primary A2', windup: 0.676, hit: 0.234, altRecover: 0.321, finish: 0.89, hitstop: 0.2},
   ]},
  // ────────────────────────────────────────
  {name: 'Staff of Righteousness', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 37, dmgMax: 37, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.737, hit: 0.096, recover: 0.2, altRecover: 0.271, finish: 0.967, hitstop: 0.22},
    {label: 'Primary A2', windup: 0.732, hit: 0.168, recover: 0.3, altRecover: 0.357, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A3', windup: 0.612, hit: 0.188, recover: 0.3, altRecover: 0.358, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A4', windup: 0.733, hit: 0.133, altRecover: 0.467, finish: 1.033, hitstop: 0.22},
   ]},
  // ────────────────────────────────────────
  {name: 'Sterling Axe', cat: 'Axe', slot: 'Main 2H', hand: 'two',
   dmgMin: 46, dmgMax: 46, dmgType: 'Physical', movespd: -35,
   comboMult: [100, 110, 120],
   attacks: [
    {label: 'Primary A1', windup: 1, hit: 0.122, recover: 0.245, altRecover: 0.611, finish: 1.245, hitstop: 0.235},
    {label: 'Primary A2', windup: 1.033, hit: 0.167, recover: 0.267, altRecover: 0.386, finish: 1.2, hitstop: 0.235},
    {label: 'Primary A3', windup: 1.133, hit: 0.134, altRecover: 0.566, finish: 1.2, hitstop: 0.235},
   ]},
  // ────────────────────────────────────────
  {name: 'Sterling Blade', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 37, dmgMax: 37, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.932, hit: 0.229, recover: 0.283, altRecover: 0.339, finish: 1.005, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.679, hit: 0.233, recover: 0.054, altRecover: 0.146, finish: 0.954, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.757, hit: 0.233, altRecover: 0.443, finish: 0.976, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Sterling Bow', cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 26, dmgMax: 26, dmgType: 'Physical', movespd: -40,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 1.5, hit: 0.15, finish: 1.167},
   ]},
  // ────────────────────────────────────────
  {name: 'Sterling Dagger', cat: 'Dagger', slot: 'Main 1H', hand: 'one',
   dmgMin: 17, dmgMax: 17, dmgType: 'Physical', movespd: -10,
   comboMult: [100, 100, 100],
   attacks: [
    {label: 'Primary A1', windup: 0.319, hit: 0.365, recover: 0.115, altRecover: 0.093, finish: 0.582, hitstop: 0.08},
    {label: 'Primary A2', windup: 0.3, hit: 0.1, recover: 0.23, altRecover: 0.336, finish: 0.867, hitstop: 0.08},
    {label: 'Primary A3', windup: 0.396, hit: 0.186, recover: 0.191, altRecover: 0.173, finish: 0.618, hitstop: 0.08},
   ]},
  // ────────────────────────────────────────
  {name: 'Sterling Rod', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 33, dmgMax: 33, dmgType: 'Physical', movespd: -20,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.717, hit: 0.15, recover: 0.14, altRecover: 0.116, finish: 0.863, hitstop: 0.136},
    {label: 'Primary A2', windup: 0.749, hit: 0.172, recover: 0.146, altRecover: 0.111, finish: 0.846, hitstop: 0.137},
    {label: 'Primary A3', windup: 0.77, hit: 0.257, altRecover: 0.257, finish: 0.906, hitstop: 0.137},
   ]},
  // ────────────────────────────────────────
  {name: 'Sterling Staff', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 36, dmgMax: 36, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.737, hit: 0.096, recover: 0.2, altRecover: 0.271, finish: 0.967, hitstop: 0.22},
    {label: 'Primary A2', windup: 0.732, hit: 0.168, recover: 0.3, altRecover: 0.357, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A3', windup: 0.612, hit: 0.188, recover: 0.3, altRecover: 0.358, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A4', windup: 0.733, hit: 0.133, altRecover: 0.467, finish: 1.033, hitstop: 0.22},
   ]},
  // ────────────────────────────────────────
  {name: 'Stinky Stick', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 44, dmgMax: 44, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.737, hit: 0.096, recover: 0.2, altRecover: 0.271, finish: 0.967, hitstop: 0.22},
    {label: 'Primary A2', windup: 0.732, hit: 0.168, recover: 0.3, altRecover: 0.357, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A3', windup: 0.612, hit: 0.188, recover: 0.3, altRecover: 0.358, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A4', windup: 0.733, hit: 0.133, altRecover: 0.467, finish: 1.033, hitstop: 0.22},
   ]},
  // ────────────────────────────────────────
  {name: 'Survival Bow', cat: 'Bow', slot: 'Main 2H', hand: 'two',
   dmgMin: 17, dmgMax: 23, dmgType: 'Physical', movespd: -30,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 1.2, hit: 0.15, finish: 1.6},
   ]},
  // ────────────────────────────────────────
  {name: 'Throwing Knife', cat: 'Dagger', slot: 'Main 2H', hand: 'two',
   dmgMin: 10, dmgMax: 22, dmgType: 'Physical', movespd: -10,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.4, hit: 0.15},
   ]},
  // ────────────────────────────────────────
  {name: 'Tidal Falchion', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 37, dmgMax: 37, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.65, hit: 0.166, recover: 0.384, altRecover: 0.321, finish: 1.05, hitstop: 0.23},
    {label: 'Primary A2', windup: 0.615, hit: 0.127, recover: 0.404, altRecover: 0.31, finish: 1.024, hitstop: 0.23},
    {label: 'Primary A3', windup: 0.767, hit: 0.119, altRecover: 0.181, finish: 1.115, hitstop: 0.23},
   ]},
  // ────────────────────────────────────────
  {name: 'Tidal Kris Dagger', cat: 'Dagger', slot: 'Main 1H', hand: 'one',
   dmgMin: 20, dmgMax: 20, dmgType: 'Physical', movespd: -10,
   comboMult: [100, 105, 110, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.495, hit: 0.141, recover: 0.114, altRecover: 0.163, finish: 0.664, hitstop: 0.08},
    {label: 'Primary A2', windup: 0.579, hit: 0.155, recover: 0.06, altRecover: 0.168, finish: 0.599, hitstop: 0.08},
    {label: 'Primary A3', windup: 0.611, hit: 0.165, recover: 0.025, altRecover: 0.209, finish: 0.724, hitstop: 0.08},
    {label: 'Primary A4', windup: 0.14, hit: 0.152, altRecover: 0.472, finish: 0.841, hitstop: 0.08},
   ]},
  // ────────────────────────────────────────
  {name: 'Tome of Sheol', cat: 'MagicStuff', slot: 'Main 2H', hand: 'two',
   dmgMin: 22, dmgMax: 22, dmgType: 'Phys+Magic', movespd: -10,
   dmgMagMin: 5, dmgMagMax: 5,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.793, hit: 0.163, finish: 0.944, hitstop: 0.15},
   ]},
  // ────────────────────────────────────────
  {name: 'Torch', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 9, dmgMax: 9, dmgType: 'Physical', movespd: 0,
   comboMult: [100, 100],
   attacks: [
    {label: 'Primary A1', windup: 0.584, hit: 0.182, recover: 0.349, altRecover: 0.324, finish: 0.833},
    {label: 'Primary A2', windup: 0.726, hit: 0.187, finish: 0.72},
   ]},
  // ────────────────────────────────────────
  {name: "Troll's Bane", cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 39, dmgMax: 39, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.737, hit: 0.096, recover: 0.2, altRecover: 0.271, finish: 0.967, hitstop: 0.22},
    {label: 'Primary A2', windup: 0.732, hit: 0.168, recover: 0.3, altRecover: 0.357, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A3', windup: 0.612, hit: 0.188, recover: 0.3, altRecover: 0.358, finish: 0.933, hitstop: 0.22},
    {label: 'Primary A4', windup: 0.733, hit: 0.133, altRecover: 0.467, finish: 1.033, hitstop: 0.22},
   ]},
  // ────────────────────────────────────────
  {name: 'Viking Sword', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 29, dmgMax: 35, dmgType: 'Physical', movespd: -20,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.636, hit: 0.165, recover: 0.231, altRecover: 0.228, finish: 0.765, hitstop: 0.166},
    {label: 'Primary A2', windup: 0.699, hit: 0.175, recover: 0.157, altRecover: 0.257, finish: 0.726, hitstop: 0.188},
    {label: 'Primary A3', windup: 0.779, hit: 0.145, altRecover: 0.224, finish: 0.809, hitstop: 0.166},
   ]},
  // ────────────────────────────────────────
  {name: 'Viola', cat: 'Sword', slot: 'Main 1H', hand: 'one',
   dmgMin: 30, dmgMax: 30, dmgType: 'Physical', movespd: -15,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.433, hit: 0.069, recover: 0.112, altRecover: 0.153, finish: 0.565, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.669, hit: 0.079, recover: 0.18, altRecover: 0.152, finish: 0.652, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.651, hit: 0.081, recover: 0.239, altRecover: 0.28, finish: 0.769, hitstop: 0.202},
    {label: 'Primary A4', windup: 0.596, hit: 0.083, finish: 0.688, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'Void Blade', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 41, dmgMax: 41, dmgType: 'Physical', movespd: -30,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.932, hit: 0.229, recover: 0.283, altRecover: 0.339, finish: 1.005, hitstop: 0.202},
    {label: 'Primary A2', windup: 0.679, hit: 0.233, recover: 0.054, altRecover: 0.146, finish: 0.954, hitstop: 0.202},
    {label: 'Primary A3', windup: 0.757, hit: 0.233, altRecover: 0.443, finish: 0.976, hitstop: 0.202},
   ]},
  // ────────────────────────────────────────
  {name: 'War Hammer', cat: 'Mace', slot: 'Main 1H', hand: 'one',
   dmgMin: 33, dmgMax: 39, dmgType: 'Physical', movespd: -25,
   comboMult: [100, 105, 110, 115],
   attacks: [
    {label: 'Primary A1', windup: 0.617, hit: 0.193, recover: 0.11, altRecover: 0.097, finish: 0.69, hitstop: 0.137},
    {label: 'Primary A2', windup: 0.763, hit: 0.195, recover: 0.147, altRecover: 0.14, finish: 0.675, hitstop: 0.137},
    {label: 'Primary A3', windup: 0.734, hit: 0.241, recover: 0.092, altRecover: 0.058, finish: 0.725, hitstop: 0.137},
    {label: 'Primary A4', windup: 0.935, hit: 0.215, altRecover: 0.367, finish: 0.85, hitstop: 0.136},
   ]},
  // ────────────────────────────────────────
  {name: 'War Maul', cat: 'Mace', slot: 'Main 2H', hand: 'two',
   dmgMin: 42, dmgMax: 54, dmgType: 'Physical', movespd: -50,
   comboMult: [100, 110, 110],
   attacks: [
    {label: 'Primary A1', windup: 1.033, hit: 0.3, recover: 0.033, altRecover: 0.445, finish: 1.067, hitstop: 0.196},
    {label: 'Primary A2', windup: 0.867, hit: 0.333, recover: 0.267, altRecover: 0.467, finish: 1.3, hitstop: 0.196},
    {label: 'Primary A3', windup: 0.833, hit: 0.367, recover: 0.033, altRecover: 0.5, finish: 1, hitstop: 0.196},
   ]},
  // ────────────────────────────────────────
  {name: 'Windlass Crossbow', cat: 'Crossbow', slot: 'Main 2H', hand: 'two',
   dmgMin: 37, dmgMax: 49, dmgType: 'Physical', movespd: -50,
   comboMult: [100],
   attacks: [
    {label: 'Primary A1', windup: 0.4, hit: 0.15, finish: 1},
   ]},
  // ────────────────────────────────────────
  {name: 'Zweihander', cat: 'Sword', slot: 'Main 2H', hand: 'two',
   dmgMin: 39, dmgMax: 51, dmgType: 'Physical', movespd: -40,
   comboMult: [100, 105, 110],
   attacks: [
    {label: 'Primary A1', windup: 0.929, hit: 0.242, recover: 0.334, altRecover: 0.47, finish: 1.028, hitstop: 0.2},
    {label: 'Primary A2', windup: 0.795, hit: 0.238, recover: 0.567, altRecover: 0.478, finish: 1.1, hitstop: 0.2},
    {label: 'Primary A3', windup: 0.967, hit: 0.233, altRecover: 0.518, finish: 0.967, hitstop: 0.2},
   ]},
];

export const RARITIES = ["Poor", "Common", "Uncommon", "Rare", "Epic", "Legendary", "Unique"];

export function rarityDmg(w: Weapon, rarityIdx: number): number {
  const t = rarityIdx / 6;
  return Math.round(w.dmgMin + t * (w.dmgMax - w.dmgMin));
}

export function rarityMagDmg(w: Weapon, rarityIdx: number): number {
  if (!w.dmgMagMin) return 0;
  const t = rarityIdx / 6;
  return Math.round(w.dmgMagMin + t * (w.dmgMagMax! - w.dmgMagMin));
}