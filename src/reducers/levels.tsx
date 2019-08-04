
export interface ILevel {
    levelId: number;
    levelName: string;
    levelWords: Array<string>;
    worldsCount: number;
    displayWordsCount: number;
    locked: boolean;
}

export const Levels:ILevel[] = [
    {
        levelId: 1,
        levelName: "مرحله تستی کوچک",
        levelWords: ["brave","clever","cruel"],
        worldsCount:3,
        displayWordsCount:2,
        locked:false
    },
    {
        levelId: 2,
        levelName: "مرحله تستی بزرگ",
        levelWords: ["brave","clever","cruel","funny","selfish","lazy","person","kind","shy"],
        worldsCount:9,
        displayWordsCount:20,
        locked:false
    }
];
