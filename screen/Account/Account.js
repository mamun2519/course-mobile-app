import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { TouchableOpacity } from "react-native";
import { AsyncStorage } from "react-native";
import { useEffect } from "react";
import useAdviser from "../CustomHook/useAdviser";
import useAdmin from "../CustomHook/useAdmin";
import { useDisclose } from "native-base";
import ForgatePass from "../Authentication/ForgatePass";
import Loading from "../Utilits/Loading";
const Account = ({ navigation }) => {
  const [user, loading] = useAuthState(auth);
  const [viewAll, setViewAll] = useState(false);
  const [token, setToken] = useState("");

  const [adviser] = useAdviser(user);
  const [admin] = useAdmin(user);
  const { isOpen, onOpen, onClose } = useDisclose();
  if (loading) return <Loading />;

  return (
    <>
      {user && (
        <View>
          <View className="pb-4">
            <View className=" flex items-center  bg-white pt-5">
              <Image
                className="w-32 h-32 rounded-full  border-2 border-gray-800 "
                // style={{ width: 10, height: 50 }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                }}
              />
              <Text className="text-lg  font-medium mt-1">
                {user?.displayName}
              </Text>
              <Text className=" text-gray-500">{user?.email}</Text>
            </View>

            <View className="pt-4 pb-4 px-6  bg-white">
              {(adviser || admin) && (
                <TouchableOpacity onPress={() => setViewAll(!viewAll)}>
                  <View className="flex flex-row justify-end">
                    <Text className="text-right font-medium text-orange-600 uppercase">
                      View All
                    </Text>
                    <View className="px-1">
                      {viewAll ? (
                        <Ionicons
                          name="chevron-down-outline"
                          size={22}
                          color={"#ea580c"}
                        ></Ionicons>
                      ) : (
                        <Ionicons
                          name="chevron-up-outline"
                          size={22}
                          color={"#ea580c"}
                        ></Ionicons>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              )}

              <View className="flex flex-row  justify-betwen pt-2">
                <View className="w-24 ">
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Payment Details")}
                      className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center"
                    >
                      <Ionicons
                        name="logo-usd"
                        size={22}
                        color={"#ea580c"}
                      ></Ionicons>
                    </TouchableOpacity>
                    <Text className="  text-gray-500 w-16 text-center">
                      Payment Details
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Contact Now")}
                  className="w-24 "
                >
                  <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                    <Ionicons
                      name="call-outline"
                      size={22}
                      color={"#ea580c"}
                    ></Ionicons>
                  </View>
                  <Text className=" text-center text-gray-500 w-16">
                    Contact
                  </Text>
                </TouchableOpacity>

                <View className="w-24">
                  <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                    <Ionicons
                      name="navigate"
                      size={22}
                      color={"#ea580c"}
                    ></Ionicons>
                  </View>
                  <Text className=" text-center text-gray-500 w-16">
                    Address
                  </Text>
                </View>

                <View className="w-24">
                  <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                    <Ionicons
                      name="chatbubbles"
                      size={22}
                      color={"#ea580c"}
                    ></Ionicons>
                  </View>
                  <Text className=" text-center text-gray-500 w-16">
                    Message
                  </Text>
                </View>
              </View>
            </View>

            {viewAll && (
              <View>
                <View className=" pb-4 px-6 flex flex-row  justify-betwee bg-white">
                  <TouchableOpacity
                    onPress={() => navigation.navigate("My Active Courses")}
                    className="w-24 "
                  >
                    <View>
                      <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                        <Ionicons
                          name="document"
                          size={22}
                          color={"#ea580c"}
                        ></Ionicons>
                      </View>
                      <Text className="  text-gray-500 w-16 text-center">
                        Active Courses
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {admin && (
                    <>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Pending Courses")}
                        className="w-24 "
                      >
                        <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                          <Ionicons
                            name="person"
                            size={22}
                            color={"#ea580c"}
                          ></Ionicons>
                        </View>
                        <Text className=" text-center text-gray-500 w-16">
                          Pending Course
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("Manage Active Course")
                        }
                        className="w-24"
                      >
                        <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                          <Ionicons
                            name="navigate"
                            size={22}
                            color={"#ea580c"}
                          ></Ionicons>
                        </View>
                        <Text className=" text-center text-gray-500 w-16">
                          Manage Course
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => navigation.navigate("Manage User")}
                        className="w-24"
                      >
                        <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                          <Ionicons
                            name="chatbubbles"
                            size={22}
                            color={"#ea580c"}
                          ></Ionicons>
                        </View>
                        <Text className=" text-center text-gray-500 w-16">
                          Manage User
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
                {admin && (
                  <View className=" pb-4 px-6 flex flex-row  justify-betwe bg-white">
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Generate Promo Code")}
                      className="w-24 "
                    >
                      <View>
                        <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                          <Ionicons
                            name="code-working"
                            size={22}
                            color={"#ea580c"}
                          ></Ionicons>
                        </View>
                        <Text className="  text-gray-500 w-16 text-center">
                          Promo Code
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Manage Payment List")}
                      className="w-24 "
                    >
                      <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                        <Ionicons
                          name="logo-usd"
                          size={22}
                          color={"#ea580c"}
                        ></Ionicons>
                      </View>
                      <Text className=" text-center text-gray-500 w-16">
                        Payment List
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Manage Contect List")}
                      className="w-24 "
                    >
                      <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
                        <Ionicons
                          name="logo-usd"
                          size={22}
                          color={"#ea580c"}
                        ></Ionicons>
                      </View>
                      <Text className=" text-center text-gray-500 w-16">
                        Contect List
                      </Text>
                    </TouchableOpacity>
                    {/* 
          <View className="w-24">
            <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
              <Ionicons name="navigate" size={22} color={"#ea580c"}></Ionicons>
            </View>
            <Text className=" text-center text-gray-500 w-16">Manage Course</Text>
          </View>

          <View className="w-24">
            <View className="w-16 h-16 rounded-full bg-slate-200 flex  items-center justify-center">
              <Ionicons
                name="chatbubbles"
                size={22}
                color={"#ea580c"}
              ></Ionicons>
            </View>
            <Text className=" text-center text-gray-500 w-16">Manage User</Text>
          </View> */}
                  </View>
                )}
              </View>
            )}
          </View>

          <ScrollView className="bg-white  h-screen">
            <View className="p-4">
              <View className=" h-10 border-b border-gray-200  flex flex-row justify-between ">
                <Text className="text-lg ">Faq</Text>
                <View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={22}
                    color={"#ea580c"}
                  ></Ionicons>
                </View>
              </View>
              <View className=" h-10 border-b border-gray-200  flex flex-row justify-between ">
                <Text className="text-lg ">Terms of service</Text>
                <View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={22}
                    color={"#ea580c"}
                  ></Ionicons>
                </View>
              </View>
              <View className=" h-10 border-b border-gray-200  flex flex-row justify-between ">
                <Text className="text-lg ">Privacy Statement</Text>
                <View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={22}
                    color={"#ea580c"}
                  ></Ionicons>
                </View>
              </View>
              <View className=" h-10 border-b border-gray-200  flex flex-row justify-between ">
                <Text className="text-lg ">About Us</Text>
                <View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={22}
                    color={"#ea580c"}
                  ></Ionicons>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => onOpen()}
                className=" h-10 border-b border-gray-200  flex flex-row justify-between "
              >
                <Text className="text-lg ">Change Password</Text>
                <View>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={22}
                    color={"#ea580c"}
                  ></Ionicons>
                </View>
              </TouchableOpacity>

              {/* subcribe route is here  */}
              {/* <View className=" h-10 border-b border-gray-200  flex flex-row justify-between ">
            <Text className="text-lg ">Subcribe Now</Text>
            <View>
              <Ionicons
                name="chevron-forward-outline"
                size={22}
                color={"#ea580c"}
              ></Ionicons>
            </View>
          </View> */}

              <Text onPress={() => signOut(auth)} className="text-lg">
                Singout
                {token}
              </Text>
            </View>
          </ScrollView>

          {/* forgate model open is here  */}
          {isOpen && <ForgatePass isOpen={isOpen} onClose={onClose} />}
        </View>
      )}
    </>
  );
};

export default Account;
