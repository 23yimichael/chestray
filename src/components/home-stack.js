import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home.js";
import Patient from "../screens/patient.js";
import PastScans from "../screens/past-scans.js";
import ViewScan from "../screens/view-scan.js";
import Results from "../screens/results.js";

const Stack = createStackNavigator();

export default function LandingStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Patient" component={Patient} />
      <Stack.Screen name="Past Scans" component={PastScans} />
      <Stack.Screen name="View Scan" component={ViewScan} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}
