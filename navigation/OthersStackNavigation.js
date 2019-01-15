import { createStackNavigator, createAppContainer } from 'react-navigation';
import {OthersScreen} from '../screens/ChatRooms/Others';
        import {ChatRoomScreen} from '../screens/ChatRooms/ChatRoom';
        import {CalendarScreen} from '../screens/ChatRooms/Calendar';
        import {_10th_GradeChatScreen} from '../screens/ChatRooms/_10th_grade';
        import {_11th_GradeChatScreen} from '../screens/ChatRooms/_11th_grade';
        import {_12th_GradeChatScreen} from '../screens/ChatRooms/_12th_grade';


const OthersStack = createStackNavigator(
        {
            Others: {
            screen: OthersScreen,
        },
                ChatRoom: {
                    screen: ChatRoomScreen,
                },
                Calendar: {
                    screen: CalendarScreen
                },
                _10th_Chat: {
                    screen: _10th_GradeChatScreen
                },
                _11th_Chat: {
                    screen: _11th_GradeChatScreen
                },
                _12th_Chat: {
                    screen: _12th_GradeChatScreen
                },       
            },
        {
                initialRouteName: 'Others',
        }
);

export default createAppContainer(OthersStack);