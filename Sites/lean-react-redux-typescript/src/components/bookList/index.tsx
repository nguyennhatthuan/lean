import { connect } from 'react-redux';
import { State } from '../../reducers';
import { NumberViewerComponent } from './components';

const mapStateToProps = (state: State) => ({
    numberCollection: state.numberCollection,
});

const mapDispatchToProps = (dispatch: any) => ({});

export const NumberViewerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NumberViewerComponent);