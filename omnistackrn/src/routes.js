import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';
import Login from './pages/Login';
import Timeline from './pages/TimeLine';
import New from './pages/New';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    App: createStackNavigator({
      Timeline,
      New
    })
  })
);

export default Routes;
