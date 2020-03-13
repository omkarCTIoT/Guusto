import React from 'react';
import { Scene, Router, Actions, Stack, Tabs, Drawer } from 'react-native-router-flux';
import HomeScreen from './screens/HomeScreen';
import MerchantList from './screens/MerchantList';




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
                    <Scene
                    hideNavBar
                    //initial={true}
                        key='linksScreen'
                        component={MerchantList}
                        title='Merchant List'
                    />

                </Stack>
                </Scene>
        </Router>
    );
};

export default RouterComponent;
