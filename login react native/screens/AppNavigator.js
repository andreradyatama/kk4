// AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Dashboard from './Dashboard';
import Details from './Details';

const AppNavigator = createStackNavigator(
  {
    Dashboard: { screen: Dashboard },
    Details: { screen: Details },
  },
  {
    initialRouteName: 'Dashboard',
  }
);

export default createAppContainer(AppNavigator);
