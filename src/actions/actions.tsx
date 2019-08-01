import { ActionTypes } from "./actionTypes";
import { Dispatch } from "redux";
import { AppPages } from "../reducers/pages";

// export const scorePage = () => dispatch => {
//     //...
//     dispatch({
//         type: SCORE_PAGE,
//         payload: []
//     })
// }

export const changePage: Function =
    (event: React.MouseEvent<HTMLButtonElement>, newPage: AppPages, levelId: number) => (dispatch: Dispatch) => {

    event.stopPropagation();
    dispatch({
        type: ActionTypes.CHANGE_PAGE,
        payload: { levelId, newPage },
    });
};

/*
export const changeStage =
    (event: React.MouseEvent<HTMLButtonElement>,stageId:string, score:number, backgroundPic:string) => (dispatch:Dispatch) => {

    event.stopPropagation();
    // console.log('changeStage actions', event, stageId, score,backgroundPic);
    dispatch({
        type: ActionTypes.CHANGE_STAGE,
        payload: { stageId, score,backgroundPic }
    })
}
/*
/*
export const pauseGame = (event:React.MouseEvent<HTMLButtonElement>, show:boolean = true) => (dispatch:Dispatch) => {

    event.stopPropagation();
    dispatch({
        type: show ? ActionTypes.PAUSE_GAME : ActionTypes.RESUME_PAGE,
        payload: { isPaused: show }
    })
}
*/