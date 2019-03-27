import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
    Promise.all([
        Icon.getImageSource("person", 30),
        Icon.getImageSource("map", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "CodeZero.ProfileScreen",
                    title: "Profile",
                    label: "Profile",
                    icon: sources[0]
                },
                {
                    screen: "CodeZero.MapScreen",
                    title: "Map",
                    label: "Location",
                    icon: sources[1]
                },
            ]
        });
    });
};

export default startMainTabs;