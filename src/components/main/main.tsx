import React from "react";
import { connect } from "react-redux";
import { IState } from "../../reducers/initialState";
import { ILevel, Levels } from "../../reducers/levels";

interface IStateProps {
    levels?: ILevel[];
}

const tempStyle: any = {
    width: "30%"
};

class MainPage extends React.Component<IStateProps, any> {
    render(): JSX.Element {
        return (
            <div className="container">
                <h5>صفحه اصلی</h5>
                this is main page
                    {
                    Levels.map(level=>
                        <div className="col">
                            <div className="card" style={tempStyle}>
                                <div className="card-body">
                                    <h5 className="card-title">{level.levelName} </h5>
                                    <p className="card-text">{level.Worlds} * {level.Worlds}</p>
                                    <a href="#" className="btn btn-primary">Play (not work yet)</a>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        );
    }
}

const mapStateToProps: any = (allState: { gameState: IState }) => ({
    levels: allState.gameState.levels,
});

export default connect(mapStateToProps)(MainPage);