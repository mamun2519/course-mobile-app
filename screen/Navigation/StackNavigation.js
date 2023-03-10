import { StyleSheet, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Authentication/Login";
import Registion from "../Authentication/Registion";

import BottomNavigation from "./BottomNavigation";
import ProductDetails from "../Home/ProductDetails";
import CMap from "../Home/CMap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Address from "../Home/Address";
import Payment from "../Home/Payment";
import PaymentDetails from "../Account/PaymentDetails";
import ActiveCourse from "../Account/ActiveCourse";
import Ionicons from "react-native-vector-icons/Ionicons";
import SallesList from "../Account/SallesList";
import PaymentList from "../Account/PaymentList";
import PendingCourse from "../Account/PendingCourse";
import ManageActiveCourse from "../Account/ManageActiveCourse";
import User from "../Account/User";
import AllPayment from "../Account/AllPayment";
import ContectList from "../Account/ContectList";
import ConfromPayment from "../Home/ConfromPayment";
import PaymentSuccess from "../Home/PaymentSuccess";
import PromoCode from "../Account/PromoCode";
import ContactNow from "../Account/ContactNow";
import Loading from "../Utilits/Loading";
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const [user , loading] = useAuthState(auth);

  if(loading) return <Loading/>
  return (
    <Stack.Navigator initialRouteName="Login">
      {!user ? (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Register"
            component={Registion}
            options={{ headerTitleAlign: "center" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Course Details"
            component={ProductDetails}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Course Location"
            component={CMap}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Personal Information"
            component={Address}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Confirm Payment"
            component={ConfromPayment}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Payment Success"
            component={PaymentSuccess}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Payment Details"
            component={PaymentDetails}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="My Active Courses"
            component={ActiveCourse}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Selles List"
            component={SallesList}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Payment List"
            component={PaymentList}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Pending Courses"
            component={PendingCourse}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Manage Active Course"
            component={ManageActiveCourse}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Manage User"
            component={User}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Manage Payment List"
            component={AllPayment}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Manage Contect List"
            component={ContectList}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Generate Promo Code"
            component={PromoCode}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Contact Now"
            component={ContactNow}
            options={{ headerTitleAlign: "center" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
