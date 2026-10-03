import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CamaraScreen from "../screens/CamaraScreen";
import GaleriaScreen from "../screens/GaleriaScreen";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Camara" component={CamaraScreen}/>
            <Tab.Screen name="Galeria" component={GaleriaScreen}/>
        </Tab.Navigator>
    )
}