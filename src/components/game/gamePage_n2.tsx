import React from "react";
import { connect } from "react-redux";
import { IState, findThisLevel } from "../../reducers/initialState";
import { ILevel } from "../../reducers/levels";

import "./gamePage_n2.css";

interface IStateProps {
    level?: ILevel;
}

/*const tableStyle: any = {
    width: "100%",
    border: "1px solid black"
};

const tdStyle: any = {
    border: "1px solid lightgray",
    padding: "10px"
};*/

class GamePageN2 extends React.Component<IStateProps, any> {

    randomNumber = (n: number) => Math.floor(Math.random() * n);

    makeSquar = (n:number) => {
        let numbers: Array<number> = new Array(n);
        for (let i: number = 0; i < n; i++) {
            numbers[i] = i;
        }

        const sqrt: number = Math.sqrt(n);

        var arr: Array<Array<number>> = new Array(sqrt);
        for (let i: number = 0; i < sqrt; i++) {
            arr[i] = new Array(sqrt);
        }

        for (let row: number = 0; row < sqrt; row++) {
            for (let col: number = 0; col < sqrt; col++) {
                const thisNum: number = numbers.splice(this.randomNumber(numbers.length), 1)[0];
                arr[row][col] = thisNum;
                numbers = numbers.filter(numb=>numb!==thisNum);
            }
        }
    }

    makeMainSudokuNumber = (n: number) => {
        var arr: Array<Array<number>> = new Array(n);
        for (let i: number = 0; i < arr.length; i++) {
            arr[i] = new Array(n);
        }

        let numbers: Array<number> = new Array(n);
        for (let i: number = 0; i < n; i++) {
            numbers[i] = i;
        }

        const sqrt: number = Math.sqrt(n);

        for (let mainRow: number = 0; mainRow < sqrt; mainRow++) {
            // const element = array[row];
            for (let MainCol: number = 0; MainCol < sqrt; MainCol++) {

                let thisBoxNumbers = [...numbers];
                // make little squere
                for (let subRow: number = 0; subRow < sqrt; subRow++) {
                    for (let subCol: number = 0; subCol < sqrt; subCol++) {

                        let validNums = [...thisBoxNumbers]
                        // Todo: check row
                        if(mainRow>0){
                            // validNums.filter
                        }
                        // Todo: check col
                        if(mainRow>0){
                            // validNums.filter
                        }
                        if(validNums.length===0) {
                            // problem happen Do again from beggining
                        }

                        const thisNum: number = validNum.splice(this.randomNumber(validNum.length), 1)[0];
                        const thisRow = mainRow*sqrt+subRow;
                        const thisCol = mainCol*sqrt+subCol;

                        arr[thisRow][thisCol] = thisNum;
                        thisBoxNumbers = thisBoxNumbers.filter(numb=>numb!==thisNum);
                    }
                }



            }
        }
    }


    makeNumberSudoku = (n: number) => {

        var arr: Array<Array<number>> = new Array(n);
        for (let i: number = 0; i < arr.length; i++) {
            arr[i] = new Array(n);
        }

        let numbers: Array<number> = new Array(n);
        for (let i: number = 0; i < n; i++) {
            numbers[i] = i;
        }

        let finish: boolean = false;

        while (!finish) {
            finish = true;

            for (let row: number = 0; row < n; row++) {

                let rowNumbers: Array<number> = [...numbers];

                for (let col: number = 0; col < n; col++) {
                    let colNumbers: Array<number> = [...rowNumbers];

                    for (let i: number = 0; i < row; i++) {
                        const element: number = arr[i][col];
                        colNumbers = colNumbers.filter(value => value !== element);
                    }
                    if (colNumbers.length === 0) {
                        finish = false;
                        break;
                    }

                    // check square
                    let colNumbers2: Array<number> = [...colNumbers];
                    const sqrt: number = Math.sqrt(n);
                    const boxRowStart: number = row - (row % sqrt);
                    const boxColStart: number = col - (col % sqrt);
                    for (let boxRow: number = boxRowStart; boxRow < boxRowStart + sqrt; boxRow++) {
                        for (let boxCol: number = boxColStart; boxCol < boxColStart + sqrt; boxCol++) {
                            const element: number = arr[boxRow][boxCol];
                            colNumbers2 = colNumbers2.filter(value => value !== element);
                        }
                    }
                    if (colNumbers2.length === 0) {
                        console.log("check square false",row,col);
                        // finish = false;
                        // break;
                    }

                    const thisNum: number = colNumbers.splice(this.randomNumber(colNumbers.length), 1)[0];

                    if (thisNum === undefined) {
                        finish = false;
                        break;
                    }

                    arr[row][col] = thisNum;
                    rowNumbers = rowNumbers.filter(value => value !== thisNum);
                }
                if (!finish) {
                    break;
                }
            }

        }

        return arr;
    }

    makeWordSudoku = (wordArray: Array<string>) => {
        const length: number = wordArray.length;
        const numArray: Array<Array<number>> = this.makeNumberSudoku(length);
        console.log(numArray);

        var arr: Array<Array<string>> = new Array(length);
        for (let i: number = 0; i < arr.length; i++) {
            arr[i] = new Array(length);
        }

        for (let row: number = 0; row < length; row++) {
            for (let col: number = 0; col < length; col++) {
                const num: number = numArray[row][col];
                arr[row][col] = wordArray[num];
            }
        }

        return arr;
    }

    render(): JSX.Element {
        const words: Array<string> = this.props.level ? this.props.level.levelWords : [];
        const arr: Array<Array<string>> = this.makeWordSudoku(words);
        const arrLenght: number = words.length;
        const sqrt: number = Math.sqrt(arrLenght);
        console.log(arr);
        return (
            <div className="container">
                <h4>this is game page</h4>

                <table className="game-table">
                    {arr.map((row, index) =>
                        <tr id={"row_" + index} key={"row_" + index}>
                            {row.map((ele, index2) => {
                                let className:string = "all-td";
                                if(index===0) {
                                    className+=" top-border";
                                } else if(index%sqrt===sqrt-1) {
                                    className+=" bottom-border";
                                }
                                if(index2===0) {
                                    className+=" left-border";
                                } else if(index2%sqrt===sqrt-1) {
                                    className+=" right-border";
                                }
                                return <td className={className}
                                            id={"col_"+index + "_" + index2}
                                            key={"col_"+index + "_" + index2}>
                                            {ele}
                                        </td>;
                            }
                            )}
                        </tr>
                    )}
                </table>

            </div>
        );
    }
}
const mapStateToProps: any = (allState: { gameState: IState }) => ({
    level: findThisLevel(allState.gameState)
});

export default connect(mapStateToProps)(GamePageN2);
