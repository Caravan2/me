/* I created a stackNavigator for home page (which is itself in Tab navigator) and here I import all pages and
    this stackNavigator combines them. first time I made it in one js file but then I found out that this way is
    more clear and easy to change*/

import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Momo} from '../screens/Subjects/Homescreen';
    import {MiscellaneousScreen} from '../screens/Subjects/Miscellaneous/MiscellaneousScreen';
    import {LibraryScreen} from '../screens/Subjects/Library/LibraryScreen';
    import {GeorgianScreen} from '../screens/Subjects/Georgian/GeorgianScreen';
            import {_3_1Screen} from '../screens/Subjects/Georgian/_3_1/_3_1';
            import {_3_2Screen} from '../screens/Subjects/Georgian/_3_2/_3_2';
            import {_3_3Screen} from '../screens/Subjects/Georgian/_3_3/_3_3';
            import {_3_4Screen} from '../screens/Subjects/Georgian/_3_4/_3_4';
            import {_3_5Screen} from '../screens/Subjects/Georgian/_3_5/_3_5';
            import {_3_6Screen} from '../screens/Subjects/Georgian/_3_6/_3_6';
    import {EnglishScreen} from '../screens/Subjects/English/EnglishScreen';
            import {_4_1Screen} from '../screens/Subjects/English/_4_1/_4_1'
            import {_4_2Screen} from '../screens/Subjects/English/_4_2/_4_2'
            import {_4_3Screen} from '../screens/Subjects/English/_4_3/_4_3'
            import {_4_4Screen} from '../screens/Subjects/English/_4_4/_4_4'
            import {_4_5Screen} from '../screens/Subjects/English/_4_5/_4_5'
            import {_4_6Screen} from '../screens/Subjects/English/_4_6/_4_6'
    import {RussianScreen} from '../screens/Subjects/Russian/RussianScreen';
            import {_5_1Screen} from '../screens/Subjects/Russian/_5_1/_5_1'
            import {_5_2Screen} from '../screens/Subjects/Russian/_5_2/_5_2'
            import {_5_3Screen} from '../screens/Subjects/Russian/_5_3/_5_3'
            import {_5_4Screen} from '../screens/Subjects/Russian/_5_4/_5_4'
    import {MathScreen} from '../screens/Subjects/Math/MathScreen';
    import {HistoryScreen} from '../screens/Subjects/History/HistoryScreen';
    import {ScienceScreen} from '../screens/Subjects/Science/ScienceScreen';
    import {AMRScreen} from '../screens/Subjects/AMR/AMRScreen';
    import {ElectiveScreen} from '../screens/Subjects/Elective/ElectiveScreen';
    import {InterDScreen} from '../screens/Subjects/InterD/InterDScreen';

const HomeStack = createStackNavigator(
    {
      Subjects: {
        screen: Momo,
      },
            Miscellaneous: {
              screen: MiscellaneousScreen,
            },
            Library: {
                screen: LibraryScreen,
            },
            Georgian: {
              screen: GeorgianScreen,
            },
                              _3_1: {
                                  screen: _3_1Screen,
                              },
                              _3_2: {
                                  screen: _3_2Screen,
                              },
                              _3_3: {
                                  screen: _3_3Screen
                              },
                              _3_4: {
                                  screen: _3_4Screen
                              },
                              _3_5: {
                                  screen: _3_5Screen
                              },
                              _3_6: {
                                  screen: _3_6Screen
                              },
            English: {
                screen: EnglishScreen,
            },
                                _4_1: {
                                  screen: _4_1Screen,
                                },
                                _4_2: {
                                    screen: _4_2Screen,
                                },
                                _4_3: {
                                    screen: _4_3Screen
                                },
                                _4_4: {
                                    screen: _4_4Screen
                                },
                                _4_5: {
                                    screen: _4_5Screen
                                },
                                _4_6: {
                                    screen: _4_6Screen
                                },
            Russian: {
              screen: RussianScreen,
            },
                                _5_1: {
                                  screen: _5_1Screen
                                },
                                _5_2: {
                                  screen: _5_2Screen
                                },
                                _5_3: {
                                  screen: _5_3Screen
                                },
                                _5_4: {
                                  screen: _5_4Screen
                                },
            Math: {
              screen: MathScreen,
            },
        
        
            History: {
              screen: HistoryScreen,
            },
        
        
            Science: {
              screen: ScienceScreen,
            },
        
        
            AMR: {
              screen: AMRScreen,
            },
        
        
            Elective: {
              screen: ElectiveScreen,
            },
        
        
            InterD: {
              screen: InterDScreen,
            },
    


    },
    {
      initialRouteName: 'Subjects',
    }
  );

  export default createAppContainer(HomeStack);