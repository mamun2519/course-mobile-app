import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
const Cart = () => {
  const product = [
    {
      name: "Rathsallagh Golf & Country Club: 2 Green Fees",
      price: "230",
      category: "+8801965069886",
      url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17305046/2022/2/26/d3e17ae1-f482-42d1-bc3b-a46afb1a25c01645858426508KillerMenNavyBlueSlip-OnSneakers1.jpg",
      quantity: "1",
    },
    {
      name: "Rathsallagh Golf & Country Club: 2 Green Fees",
      price: "200",
      category: "+8801965069886",
      url: "https://nikotbazar.com.bd/wp-content/uploads/2021/07/Black-Punjabi-Collection-Nikot-Bazar.jpg",
      quantity: "1",
    },
    {
      name: "Rathsallagh Golf & Country Club: 2 Green Fees",
      price: "170",
      category: "+8801965069886",
      url: "https://media.istockphoto.com/id/507867030/photo/beautiful-muslim-woman-wearing-a-burka.jpg?s=612x612&w=0&k=20&c=ag-QQ2atUc0h9HI-hlYf206XQcMn-WvD0SzPBYLIK7U=",
      quantity: "1",
    },
    {
      name: "Rathsallagh Golf & Country Club: 2 Green Fees",
      price: "200",
      category: "+8801965069886",
      url: "https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg",
      quantity: "1",
    },
    {
      name: "Rathsallagh Golf & Country Club: 2 Green Fees",
      price: "230",
      category: "+8801965069886",
      url: "https://aws-obg-image-lb-1.tcl.com/content/dam/brandsite/region/south-korea/blog/TCL-smart-TV.png",
      quantity: "1",
    },
  ];
  return (
    <ScrollView className="mt-3 ">
      <View className="flex gap-3 pl-4 pr-6">
        {product.map(({ name, url, price, quantity, category }) => (
          <View
            className="w-full h-24 bg-white rounded-3xl flex flex-row gap-3 p-1  "
            key={url}
          >
            <View className="w-[33.33vw]">
              {/* <Image
                className="w-16 h-16 rounded-full  border-2 border-gray-800 "
                // style={{ width: 10, height: 50 }}
                source={{ uri: url }}
                  <Text className=" text-gray-800 font-medium">{name} </Text>
              /> */}
              <Text className=" text-gray-800 font-medium mt-2">{name} </Text>
            </View>

            <View className="w-[33.33vw] pt-1">
              <Text className="text-[16px]  text-orange-600 font-medium">
                {category}
              </Text>
              <Text className=" text-gray-800 ">Active </Text>
              <Text className="text-[16px] font-medium">{quantity} limit</Text>
            </View>
            <View className="w-[33.33vw] flex pt-1">
              {/* <Text className="text-[16px] font-medium">{quantity} limit</Text> */}

              <View className="w-12 h-12 rounded-full bg-slate-200 flex  items-center justify-center">
                <Ionicons name="trash" size={22} color={"#ea580c"}></Ionicons>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Cart;
