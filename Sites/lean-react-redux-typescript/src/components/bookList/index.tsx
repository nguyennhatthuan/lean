import { connect } from 'react-redux';
import { INumberCollectionState } from '../../reducers';
import { NumberViewerComponent } from './components';
import React, { Component } from 'react';
import { Dispatch } from 'redux';

export interface OwnProps {
}

interface StateProps {
    numberCollection: number[]
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps & OwnProps

export class NumberViewerContainer extends Component<Props> {
    handleOnClick = () => {
        console.log('Thuan');
    }

    render = () => {
        return <NumberViewerComponent
            onClickIncreaseButton={this.handleOnClick}
            numberCollection={this.props.numberCollection}
        />;
    }
}

const mapStateToProps = (state: INumberCollectionState, ownProps: OwnProps): StateProps => ({
    numberCollection: state.numberCollection,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({});

export default connect<StateProps, DispatchProps, OwnProps, INumberCollectionState>(
    mapStateToProps,
    mapDispatchToProps
)(NumberViewerContainer);