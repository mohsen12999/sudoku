
export interface ILevel {
    levelId: number;
    levelName: String;
    levelWords: Array<String>;
    Worlds: Number;
    hiddenWords: Number;
    locked: Boolean;
}

export const Levels:ILevel[] = [
    {
        levelId: 1,
        levelName: "مرحله تستی",
        levelWords: ["brave","clever","cruel","funny","selfish","lazy","person","kind","shy"],
        Worlds:9,
        hiddenWords:20,
        locked:false
    }
];