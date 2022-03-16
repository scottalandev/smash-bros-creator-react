export enum JabEndType {
    Standard = 'Standard',
    Choosable = 'Choosable',
    Infinite = 'Infinite'
}

export enum FinalTargType {
    Projectile = 'Projectile',
    Area = 'Area',
    Reticle = 'Reticle'
}

type Jab = {
    name: string,
    stages: number,
    endType: JabEndType,
    desc: string
}

type BasicPair = {
    name: string,
    desc: string
}

type FinalSmash = {
    name: string,
    targetStyle: FinalTargType,
    desc: string
}

export interface Character {
    name: string,
    phrase: string,
    jumps: number,
    weight: number,
    specPerk: string,
    wallJump: boolean,
    jab: Jab,
    dash: BasicPair,
    tiltUp: BasicPair,
    tiltSd: BasicPair,
    tiltDn: BasicPair,
    smashUp: BasicPair,
    smashSd: BasicPair,
    smashDn: BasicPair,
    specNt: BasicPair,
    specUp: BasicPair,
    specSd: BasicPair,
    specDn: BasicPair,
    airNt: BasicPair,
    airUp: BasicPair,
    airFw: BasicPair,
    airDn: BasicPair,
    airBk: BasicPair,
    grab: BasicPair,
    pummel: BasicPair,
    thrUp: BasicPair,
    thrFw: BasicPair,
    thrDn: BasicPair,
    thrBk: BasicPair,
    tauntSd: BasicPair,
    tauntUp: BasicPair,
    tauntDn: BasicPair,
    finalSmash: FinalSmash    
}