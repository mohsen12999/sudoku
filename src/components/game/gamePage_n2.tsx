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

    makeSquar = (n: number) => {
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
                numbers = numbers.filter(numb => numb !== thisNum);
            }
        }
    }

    makeMainSudokuNumber = (n: number) => {
        // return this._makeMainSudokuNumber(n);
        do {
            var arr: number[][]|null = this._makeMainSudokuNumber(n);
        }while(arr==null);

        return arr;
    }
    _makeMainSudokuNumber = (n: number) => {

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
            for (let mainCol: number = 0; mainCol < sqrt; mainCol++) {

                let thisBoxNumbers: Array<number> = [...numbers];
                // make little squere
                for (let subRow: number = 0; subRow < sqrt; subRow++) {
                    for (let subCol: number = 0; subCol < sqrt; subCol++) {

                        let validNums: Array<number> = [...thisBoxNumbers];
                        const thisRow: number = mainRow * sqrt + subRow;
                        const thisCol: number = mainCol * sqrt + subCol;
                        if (mainRow > 0) {
                            for (let i: number = 0; i < thisRow; i++) {
                                validNums = validNums.filter(numb => numb !== arr[i][thisCol]);
                            }
                        }
                        if (mainCol > 0) {
                            for (let i: number = 0; i < thisCol; i++) {
                                validNums = validNums.filter(numb => numb !== arr[thisRow][i]);
                            }
                        }
                        if (validNums.length === 0) {
                            // problem happen Do again from beggining
                            console.log("problem",mainRow,mainCol,thisRow,thisCol);
                            return null;
                        }

                        const thisNum: number = validNums.splice(this.randomNumber(validNums.length), 1)[0];

                        arr[thisRow][thisCol] = thisNum;
                        thisBoxNumbers = thisBoxNumbers.filter(numb => numb !== thisNum);
                    }
                }

            }
        }
        return arr;
    }

    makeWordSudoku = (wordArray: Array<string>) => {
        const length: number = wordArray.length;
        // const numArray: Array<Array<number>> = this.makeNumberSudoku(length);
        const numArray: Array<Array<number>> = this.makeMainSudokuNumber(length);
        if(numArray.length===1) {
            return [[]];
        }


        // console.log(numArray);

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
        // console.log(arr);
        return (
            <div className="container">
                <h4>this is game page</h4>

                <table className="game-table">
                    {arr.map((row, index) =>
                        <tr id={"row_" + index} key={"row_" + index}>
                            {row.map((ele, index2) => {
                                let className: string = "all-td";
                                if (index === 0) {
                                    className += " top-border";
                                } else if (index % sqrt === sqrt - 1) {
                                    className += " bottom-border";
                                }
                                if (index2 === 0) {
                                    className += " left-border";
                                } else if (index2 % sqrt === sqrt - 1) {
                                    className += " right-border";
                                }
                                return <td className={className}
                                    id={"col_" + index + "_" + index2}
                                    key={"col_" + index + "_" + index2}>
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
