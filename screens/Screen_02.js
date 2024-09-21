import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    { key: "1", type: 'Vegetable', name: 'Apple', price: '28.00', image: require('../assets/Data/Image 101.png') },
    { key: "2", type: 'Vegetable', name: 'Pearl', price: '28.00', image: require('../assets/Data/Image 107.png') },
    { key: "3", type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image 105.png') },
    { key: "4", type: 'Vegetable', name: 'Orange', price: '28.00', image: require('../assets/Data/Image 106.png') },
    { key: "5", type: 'Vegetable', name: 'Apricot', price: '28.00', image: require('../assets/Data/Image 102.png') },
    { key: "6", type: 'Vegetable', name: 'Avocado', price: '28.00', image: require('../assets/Data/Image 103.png') },

    { key: "7", type: 'Seafood', name: 'Lobster Alaska', price: '28.00', image: require('../assets/Data/lobster-alaska.png') },
    { key: "8", type: 'Seafood', name: 'King Crab', price: '28.00', image: require('../assets/Data/kingcrab.png') },
    { key: "9", type: 'Seafood', name: 'Shrimp', price: '28.00', image: require('../assets/Data/Image 95.png') },
    { key: "10", type: 'Seafood', name: 'Squid', price: '28.00', image: require('../assets/Data/squid.png') },
    { key: "11", type: 'Seafood', name: 'Octopus', price: '28.00', image: require('../assets/Data/octopus.png') },
    { key: "12", type: 'Seafood', name: 'Oyster', price: '28.00', image: require('../assets/Data/oyster.png') },

    { key: "13", type: 'Drink', name: 'Orange Juice', price: '28.00', image: require('../assets/Data/Image_96.png') },
    { key: "14", type: 'Drink', name: 'Watermelon Juice', price: '28.00', image: require('../assets/Data/watermelon-juice.png') },
    { key: "15", type: 'Drink', name: 'Tomato Juice', price: '28.00', image: require('../assets/Data/tomato-juice.png') },
    { key: "16", type: 'Drink', name: 'Lemon Juice', price: '28.00', image: require('../assets/Data/lemon-juice.png') },
    { key: "17", type: 'Drink', name: 'Mango Juice', price: '28.00', image: require('../assets/Data/mango-juice.png') },
    { key: "18", type: 'Drink', name: 'Cranberry Juice', price: '28.00', image: require('../assets/Data/cranberry-juice.png') },
  ]);

  const navigation = useNavigation();

  const [type, setType] = useState("Vegetable");
  const [selectedBtn, setSelectedBtn] = useState("");
  const [initialItemCount, setInitTialItemCount] = useState(6);
  const [showAll, isShowAll] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeeAll, isSelectedSeeAll] = useState(true);

  return (
    <View>
      <StatusBar hidden='True' />
      <View>
        <View style={styles.tabBar}>
          <TouchableOpacity onPress={() => navigation.navigate("Screen_01")}>
            <Image
              style={styles.tabBarImage}
              source={require("../assets/Data/Image 183.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Screen_03")}>
            <Image
              style={styles.tabBarImage}
              source={require("../assets/Data/Image 182.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TextInput
          style={[styles.tabBarIcon, { color: "black" }]}
          placeholder="Search"
          placeholderTextColor="gray"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>

      <View style={styles.groupFilterBtn}>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            {
              backgroundColor: selectedBtn === "Vegetable" ? "green" : "white",
            },
          ]}
          onPress={() => {
            setType("Vegetable");
            setSelectedBtn("Vegetable");
            isShowAll(false);
            isSelectedSeeAll(false);
            setInitTialItemCount(6);
          }}
        >
          <Text style={{ color: selectedBtn === 'Vegetable' ? 'white' : '#44ccde' }}>Vegetable</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            { backgroundColor: selectedBtn === "Seafood" ? "green" : "white" },
          ]}
          onPress={() => {
            setType("Seafood");
            setSelectedBtn("Seafood");
            isShowAll(false);
            isSelectedSeeAll(false);
            setInitTialItemCount(5);
          }}
        >
          <Text style={{ color: type === 'Seafood' ? 'white' : '#44ccde' }}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            { backgroundColor: selectedBtn === "Drink" ? "green" : "white" },
          ]}
          onPress={() => {
            setType("Drink");
            setSelectedBtn("Drink");
            isShowAll(false);
            isSelectedSeeAll(false);
            setInitTialItemCount(5);
          }}
        >
          <Text style={{ color: type === 'Drink' ? 'white' : '#44ccde' }}>Drink</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>Order your favorite!</Text>
        <TouchableOpacity
          onPress={() => {
            isShowAll(true);
            isSelectedSeeAll(true);
            setSelectedBtn("");
          }}
        >
          <Text
            style={[
              styles.seeAllText,
              { color: selectedSeeAll ? "red" : "pink" },
            ]}
          >
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {searchQuery.length !== 0 ? (
          <FlatList
            data={data.filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <View style={styles.flatItem}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Screen_03")}
                >
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.image}
                  />
                </TouchableOpacity>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            )}
            numColumns={2}
          />
        ) : (
          <FlatList
            data={showAll ? data : data.filter((item) => item.type === type)}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <View style={styles.flatItem}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Screen_03", { key: item.key })
                  }
                >
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.image}
                  />
                </TouchableOpacity>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            )}
            numColumns={2}
            style={{ marginBottom: 250 }}
            contentContainerStyle={{ paddingBottom: 300 }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  tabBarIcon: {
    borderWidth: 1,
    borderColor: "gray",
    width: "90%",
    borderRadius: 10,
    height: 50,
    alignSelf: "center",
    marginTop: 20,
    fontSize: 20,
    paddingLeft: 20,
  },
  tabBarImage: {
    width: 25,
    height: 25,
  },
  groupFilterBtn: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  filterBtn: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 25,
    color: "green",
  },
  seeAllText: {
    fontSize: 25,
  },
  scrollView: {
    marginBottom: 250,
  },
  flatItem: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    marginHorizontal: "2.5%",
    marginVertical: "2.5%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
