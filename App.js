import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//importing Root Drawer Screen (Home Tab at the bottom left)
import MainTabScreen from "./src/BottomScreens/MainTabScreen";
//importing Screens from the Drawer
import CommunityTracker from "./src/DrawerScreens/CommunityTracker";
import VaccineFinder from "./src/DrawerScreens/VaccineFinder";
import Survey from "./src/DrawerScreens/Survey";
import PrivacyandLegal from "./src/DrawerScreens/PrivacyandLegal";
import SOP from "./src/DrawerScreens/SOP";
import VaccineConversation from "./src/DrawerScreens/VaccineConversation";
import VaccineVirus from "./src/DrawerScreens/VaccineVirus";
//MainTabScreen is Homescreen that includes the bottom tab navigation
//The other components after MainTabScreen are componenets in the drawer
const Drawer = createDrawerNavigator();
function App({ navigation }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          marginTop: -10,
          activeTintColor: "white",
          activeBackgroundColor: "#990000",
          // classic red: #990000
          //grey: #5f5359
          inactiveTintColor: "black",
          inactiveBackgroundColor: "white",
          labelStyle: {
            fontSize: 15,
            marginLeft: 5,
          },
        }}
      >
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Take Our Survey" component={Survey} />
        <Drawer.Screen name="Student Outreach Program" component={SOP} />
        <Drawer.Screen name="Community Tracker" component={CommunityTracker} />
        <Drawer.Screen
          name="The Vaccine Conversation"
          component={VaccineConversation}
        />
        <Drawer.Screen name="Vaccine & Virus FAQs" component={VaccineVirus} />
        <Drawer.Screen name="Vaccine Finder" component={VaccineFinder} />
        <Drawer.Screen name="Privacy & Legal" component={PrivacyandLegal} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
