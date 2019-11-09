/* Node Modules */
import { connect } from 'react-redux';
/* Data Store */
import { currentPage_AC } from '../../data.store/actions';
/* Component Content */
import NavigationView from './navigation.view';

/**
 * @function mapStateToProps
 * @desc mapping the redux state to the props
 * @author Anselm Marie
 * @param {object} state - redux store
 * @return {object}
 */
const mapStateToProps = () => ({});

/**
 * @property mapDispatchToProps
 * @desc mapping the redux dispatch to the props
 * @author Anselm Marie
 */
const mapDispatchToProps = {
  currentPage_AC,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationView);
