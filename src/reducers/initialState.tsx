import { AppPages } from "./pages";
import { ILevel,Levels } from "./levels";

/*
export class chapters {
  levelId: number;
  levelName: string;
  levelPic: string;

  constructor(levelId: number, levelName: string, levelPic: string) {
    this.levelId = levelId;
    this.levelName = levelName;
    this.levelPic = levelPic;
  }
}
*/

export interface IState {
  pageName: AppPages;
  levels: ILevel[];
  levelId: number;
  /*
  score: number,
  backgroundPic: string,

  music: string,
  // audio?: HTMLAudioElement,

  headerTitle: string,
  currentLevelId: number,// number
  currentStage?: stage,// number

  // gameData: any,
  achievment: any,
  saveChoise: any[],
  // thisLevelChoises:any[]

  pageName: string,
  pageSetting: appPage,

  isPaused: boolean,

  chaptersInfo: chapters[],
  */
}

// initialState
const init: IState = {
  pageName: AppPages.GAME_PAGE_N2,// aAppPages.MAIN_PAGE,
  levels: Levels,
  levelId: 2
/*
  score: 0,
  backgroundPic: gameData.startPage.backgroundPic,// ''

  music: gameData.startPage.music,//'',
  // restartMusic:true,
  // audio: undefined, // use component instead of that

  headerTitle:"",
  currentLevelId: 0,
  currentStage: undefined,

  // gameData: gameData, // can delete and import and use only on reducer
  achievment: {},
  saveChoise: [],

  pageName: "startPage",
  pageSetting: gameData.startPage,
  isPaused: false,
  // muteMusic: false,

  chaptersInfo: gameData.levels.map(level => new chapters(level.levelId, level.levelName, level.levelPic))
  */
};

export default init;

// export const allLevels:Function = (state: IState) => state.levels;
export const findThisLevel:Function = (state: IState) => state.levels.find(x=>x.levelId === state.levelId);
