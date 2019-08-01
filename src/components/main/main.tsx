import React from "react";
import { connect } from "react-redux";
import { IState } from "../../reducers/initialState";
import { ILevel, Levels } from "../../reducers/levels";
import { changePage } from "../../actions/actions";
import { AppPages } from "../../reducers/pages";

interface IStateProps {
    levels?: ILevel[];
    changePage?: Function;
}

const tempStyle: any = {
    // width: "30%"
};

class MainPage extends React.Component<IStateProps, any> {

    render(): JSX.Element {
        return (
            <div className="container">
                <h5>صفحه اصلی</h5>
                this is main page
                <div className="row">
                    {Levels.map(level=>
                        <div key={ level.levelId } className="col">
                            <div className="card" style={tempStyle}>
                                <div className="card-body">
                                    <h5 className="card-title">{level.levelName} </h5>
                                    <p className="card-text">{level.worldsCount} * {level.worldsCount}</p>
                                    <button
                                        onClick={event => this.props.changePage!(event, AppPages.GAME_PAGE,level.levelId)}
                                        className="btn btn-primary">Play (not work yet)</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps: any = (allState: { gameState: IState }) => ({
    levels: allState.gameState.levels,
});

const mapDispatchToProps:any = ({
    changePage: changePage
});

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);


