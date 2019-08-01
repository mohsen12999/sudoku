import React from "react";
import { connect } from "react-redux";
import { IState } from "../../reducers/initialState";
import { ILevel } from "../../reducers/levels";

interface IStateProps {
    levels?:ILevel[];
  }

const tempStyle:any = {
    width: "30%"
  };

class MainPage extends React.Component<IStateProps, any> {
    render():JSX.Element {
        return (
            <div className="container">
                <h5>صفحه اصلی</h5>
                this is main page
                <div className="col">
                    <div className="card" style={tempStyle}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps:any = (allState: { gameState: IState }) => ({
    levels: allState.gameState.levels,
  });

  export default connect(mapStateToProps)(MainPage);