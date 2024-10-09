import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { BasketContext } from "../BasketContext";

export default function App({ navigation }) {
  const route = useRoute();

  const { data, updateQuantity, decrementQuantity, resetQuantities } =
    useContext(BasketContext);

  const showPaymentSuccessAlert = (total) => {
    Alert.alert(
      "Payment Successful",
      `Your payment of $${total} has been processed successfully.`,
      [
        {
          text: "OK",
          onPress: () => {
            resetQuantities();
            navigation.navigate("Screen_02");
          },
        },
      ],
      { cancelable: false }
    );
  };

  const calculateTotal = () => {
    if (!Array.isArray(data) || data.length === 0) {
      return "0.00";
    }

    return data
      .reduce((total, item) => {
        const quantity = parseFloat(item.sl);
        const price = parseFloat(item.price);

        if (isNaN(quantity) || isNaN(price)) {
          return total;
        }

        const itemTotal = quantity * price;
        return total + itemTotal;
      }, 0)
      .toFixed(2);
  };

  const { key } = !route.params ? 0 : route.params;
  useEffect(() => {
    if (key) {
      updateQuantity(key);
    }
  }, [key]);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={style.tabBar}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen_02")}>
            <Image
              style={style.tabBarImage}
              source={require("../assets/Data/Image_183.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            height: 50,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 25, color: "green", fontWeight: "bold" }}>
            My Basket
          </Text>
        </View>
      </View>
      <FlatList
        data={data.filter((item) => item.sl > 0)}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={style.flatItem}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "center" }}
              >
                <Image
                  source={item.image}
                  style={style.flatItemImage}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "green",
                    }}
                  >
                    ${item.price}
                  </Text>
                  <Text
                    style={{ fontSize: 18, color: "gray", marginBottom: 7 }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/Data/Image_180.png")}
                      style={style.startIcon}
                    />
                    <Image
                      source={require("../assets/Data/Image_180.png")}
                      style={style.startIcon}
                    />
                    <Image
                      source={require("../assets/Data/Image_180.png")}
                      style={style.startIcon}
                    />
                    <Image
                      source={require("../assets/Data/Image_180.png")}
                      style={style.startIcon}
                    />
                    <Image
                      source={require("../assets/Data/Image_180.png")}
                      style={style.startIcon}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPress={() => decrementQuantity(item.key)}>
                  <Image
                    source={require("../assets/Data/Image_176.png")}
                    style={style.subAddIcon}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 5,
                  }}
                >
                  {item.sl}
                </Text>
                <TouchableOpacity onPress={() => updateQuantity(item.key)}>
                  <Image
                    source={require("../assets/Data/Image_175.png")}
                    style={style.subAddIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20, fontWeight: 'bold', fontSize: '20' }}>
            Your Basket is empty
          </Text>
        }
        style={{ marginBottom: 200 }}
      />

      <View
        style={{
          justifyContent: "center",
          padding: 10,
          marginTop: 20,
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "purple" }}>
            Total
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "purple" }}>
            ${calculateTotal()}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            borderRadius: 40,
            width: 240,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
            alignSelf: "center",
            width: "100%",
          }}
          onPress={() => showPaymentSuccessAlert(calculateTotal())}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  flatItem: {
    marginHorizontal: "2.5%",
    padding: 15,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderStyle: "dashed",
    backgroundColor: "white",
  },
  flatItemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  startIcon: {
    width: 15,
    height: 15,
  },
  subAddIcon: {
    width: 20,
    height: 20,
  },
});