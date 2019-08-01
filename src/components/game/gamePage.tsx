import React from "react";
import { connect } from "react-redux";
import { IState, findThisLevel } from "../../reducers/initialState";
import { ILevel } from "../../reducers/levels";

interface IStateProps {
    level?: ILevel;
}

const tableStyle: any = {
    width: "100%"
};

const tdStyle: any = {
    border: "1px solid black"
};

class GamePage extends React.Component<IStateProps, any> {

    randomNumber = (n: number) => Math.floor(Math.random() * n);

    makeNumberSudoku = (n: number) => {

        var arr: Array<Array<number>> = new Array(n);
        for (let i: number = 0; i < arr.length; i++) {
            arr[i] = new Array(n);
        }

        let numbers: Array<number> = new Array(n);
        for (let i: number = 0; i < n; i++) {
            numbers[i] = i;
        }

        let finish:boolean = false;

        while(!finish){
            finish = true;

            for (let row: number = 0; row < n; row++) {

                let rowNumbers: Array<number> = [...numbers];
                
                for (let col: number = 0; col < n; col++) {
                    let colNumbers: Array<number> = [...rowNumbers];
    
                    for (let i: number = 0; i < row; i++) {
                        const element: number = arr[i][col];
                        colNumbers = colNumbers.filter(value => value !== element);
                    }
                    const thisNum = colNumbers.splice(this.randomNumber(colNumbers.length), 1)[0];
                    if(thisNum == undefined){
                        finish=false;
                        break;
                    }
                    arr[row][col] = thisNum;
                    rowNumbers = rowNumbers.filter(value => value !== thisNum);
                }
                if(!finish){
                    break;
                }
            }

        }
        

        return arr;
    }

    makeWordSudoku = (wordArray: Array<string>) => {
        const length: number = wordArray.length;
        const numArray: Array<Array<number>> = this.makeNumberSudoku(length);
        console.log(numArray)

        var arr: Array<Array<string>> = new Array(length);
        for (let i: number = 0; i < arr.length; i++) {
            arr[i] = new Array(length);
        }

        for (let row: number = 0; row < length; row++) {
            for (let col: number = 0; col < length; col++) {
                const num:number = numArray[row][col];
                arr[row][col] = wordArray[num];
            }
        }

        return arr;
    }

    render(): JSX.Element {
        const words: Array<string> = this.props.level?this.props.level.levelWords:[];
        const arr: Array<Array<string>> = this.makeWordSudoku(words);
        console.log(arr)
        return (
            <div>
                <h4>this is game page</h4>

                <table style={tableStyle}>
                    {arr.map((row,index) =>
                        <tr id={"row_"+index} key={"row_"+index}>
                            {row.map((ele,index2) =>
                                <td id={index +"_" +index2+"_"+ele} key={index +"_" +index2+"_"+ele} style={tdStyle}>
                                    {ele}
                                </td>
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

export default connect(mapStateToProps)(GamePage);

/*

function make2dArray(n){
    var arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i]  = new Array(n);
    }
    return arr;
}

function showInTable(arr, htmlElementId){
    var table = '<table>';

    for (let i = 0; i < arr.length; i++) {

        table += '<tr>';
        const row = arr[i];

        for (let j = 0; j < row.length; j++) {
            const element = row[j];

            table += '<td>'+element+ '<td>';

        }

        table += '</tr>';
    }

    table += '</table>';

    var ele = document.getElementById(htmlElementId);
    if(ele){
        ele.innerHTML = table;
    }
}

// var a = make2dArray(2);
// a[0][0] = 1;
// a[0][1] = 2;
// a[1][0] = 3;
// a[1][1] = 4;
// console.log(a);
// showInTable(a,'table')

function makeNumberSudoku(n=3) {
    var arr = make2dArray(n);

    let numbers = new Array(n);
    for (let i = 0; i < n; i++) {
        numbers[i] = i;
    }

    for (let row = 0; row < n; row++) {

        let rowNumbers = [... numbers];

        for (let col = 0; col < n; col++) {
            let colNumbers = [... rowNumbers];

            for (let i = 0; i < row; i++) {
                const element = arr[i][col];
                colNumbers = colNumbers.filter(function(value){return value!=element;});
            }

            arr[row][col]= colNumbers.splice(randomNumber(colNumbers.length),1);
            rowNumbers = rowNumbers.filter(function(value){return value!=arr[row][col];})
        }
    }

    return arr;
}

const randomNumber = n => Math.floor(Math.random() * n);

// fillSudoku(5)

function makeWordSudoku(wordArray) {
    const length = wordArray.length;
    numArray = makeNumberSudoku(length);

    var arr = make2dArray(length);
    for (let row = 0; row < length; row++) {
        for (let col = 0; col < length; col++) {
            arr[row][col] = wordArray[numArray[row][col]];
        }
    }

    return arr;
}
*/