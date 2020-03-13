import React from 'react';
import { Scene, Router, Actions, Stack} from 'react-native-router-flux';
import HomeScreen from './screens/HomeScreen';

const RouterComponent = () => {

    console.log(Actions.currentScene);

    return (
        <Router>
            <Scene key='root' gesturesEnabled={false} hideNavBar >

                <Stack key='auth' initial={true}>

                    <Scene
                        hideNavBar
                        initial={true}
                        key='homeScreen'
                        component={HomeScreen}
                        title='Home'
                    />
                </Stack>
                </Scene>
        </Router>
    );
};

export default RouterComponent;
