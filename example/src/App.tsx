import { EpicChip } from "epic-chip-react-native";
import * as React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const App = () => {
  return (
    // Main View
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View style={{ width: "100%", marginVertical: 20 }}>
              <Text style={{ fontSize: 25 }}>Outlined Chip</Text>
            </View>

            {/* Outlined Chips */}

            <EpicChip
              mode={"Outlined"}
              labelOptions={{
                label: "Unchecked",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              mode={"Outlined"}
              checkIcon
              isChecked
              labelOptions={{
                label: "Checked",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              mode={"Outlined"}
              checkIcon={false}
              isChecked
              labelOptions={{
                label: "Checked Without Check Icon",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              mode={"Outlined"}
              checkIcon
              isDisabled
              labelOptions={{
                label: "Disabled",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              type="Large"
              mode={"Outlined"}
              checkIcon
              labelOptions={{
                label: "Large",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              type="Mini"
              mode={"Outlined"}
              checkIcon
              labelOptions={{
                label: "Mini",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              type="Micro"
              mode={"Outlined"}
              checkIcon
              labelOptions={{
                label: "Micro",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View style={{ width: "100%", marginVertical: 20 }}>
              <Text style={{ fontSize: 25 }}>Solid Chip</Text>
            </View>

            {/* Solid Chips */}

            <EpicChip
              mode={"Solid"}
              labelOptions={{
                label: "Unchecked",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              mode={"Solid"}
              checkIcon
              isChecked
              labelOptions={{
                label: "Checked",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              mode={"Solid"}
              checkIcon={false}
              isChecked
              labelOptions={{
                label: "Checked Without Check Icon",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              mode={"Solid"}
              checkIcon
              isDisabled
              labelOptions={{
                label: "Disabled",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View style={{ width: "100%", marginVertical: 20 }}>
              <Text style={{ fontSize: 25 }}>Custom Chip</Text>
            </View>

            {/* Custom Chip */}

            <EpicChip
              mode={"Solid"}
              labelOptions={{
                label: "Unchecked",
              }}
              isChecked
              options={{
                chipStyles: { marginRight: 10, marginBottom: 10 },
                backgroundColor: {
                  focusColor: "#ff0000",
                  inActiveColor: "#ff4e4e",
                },
                labelColor: {
                  focusColor: "#fff",
                  inActiveColor: "#fff",
                },
              }}
            />
            <EpicChip
              mode={"Outlined"}
              labelOptions={{
                label: "Checked",
              }}
              options={{
                chipStyles: { marginRight: 10, marginBottom: 10 },
                backgroundColor: {
                  focusColor: "#000000",
                  inActiveColor: "#78c223",
                },
                labelColor: {
                  focusColor: "#fff",
                  inActiveColor: "#fff",
                },
              }}
            />
            <EpicChip
              mode={"Solid"}
              checkIcon={false}
              isChecked
              labelOptions={{
                label: "Checked Without Check Icon",
              }}
              options={{
                chipStyles: {
                  marginRight: 10,
                  marginBottom: 10,
                },
                backgroundColor: {
                  focusColor: "#9500ff",
                },
                labelColor: {
                  focusColor: "#fff",
                  inActiveColor: "#fff",
                },
              }}
            />
            <EpicChip
              mode={"Solid"}
              checkIcon
              labelOptions={{
                label: "Disabled",
                Icon: (
                  <Ionicons
                    name="person"
                    style={{ marginRight: 10 }}
                    color="white"
                    size={15}
                  />
                ),
              }}
              options={{
                chipStyles: {
                  marginRight: 10,
                  marginBottom: 10,
                },
                backgroundColor: {
                  focusColor: "#570094",
                  inActiveColor: "#94008f",
                },
                labelColor: {
                  focusColor: "#fff",
                  inActiveColor: "#fff",
                },
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <View style={{ width: "100%", marginVertical: 20 }}>
              <Text style={{ fontSize: 25 }}>Chip To Checkbox</Text>
            </View>

            {/* Chip Checkboxes */}

            <EpicChip
              mode={"Solid"}
              checkIcon
              labelOptions={{
                label: "",
                Icon: <Ionicons name="person" color="white" size={15} />,
              }}
              options={{
                chipStyles: {
                  marginRight: 10,
                  marginBottom: 10,
                },
                backgroundColor: {
                  focusColor: "#570094",
                  inActiveColor: "#94008f",
                },
                labelColor: {
                  focusColor: "#fff",
                  inActiveColor: "#fff",
                },
              }}
            />
            <EpicChip
              mode={"Solid"}
              checkIcon
              type="Mini"
              radius={50}
              labelOptions={{
                label: "",
                Icon: <Ionicons name="bulb" color="white" size={14} />,
              }}
              options={{
                chipStyles: {
                  marginRight: 10,
                  marginBottom: 10,
                },
                backgroundColor: {
                  focusColor: "#570094",
                  inActiveColor: "#000000",
                },
                labelColor: {
                  focusColor: "#fff",
                  inActiveColor: "#fff",
                },
              }}
            />
            <EpicChip
              mode={"Solid"}
              checkIcon
              type="Large"
              isChecked
              radius={50}
              labelOptions={{
                label: "",
              }}
              options={{
                chipStyles: {
                  marginRight: 10,
                  marginBottom: 10,
                },
              }}
            />
            <EpicChip
              mode={"Outlined"}
              radius={"Rounded-Full"}
              checkIcon
              isChecked
              isDisabled
              labelOptions={{
                label: "",
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              mode={"Outlined"}
              checkIcon
              labelOptions={{
                label: "",
                Icon: <Ionicons name="bulb" color="gray" size={14} />,
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
            <EpicChip
              mode={"Outlined"}
              type="Micro"
              checkIcon
              labelOptions={{
                label: "",
                Icon: <Ionicons name="bulb" color="gray" size={8} />,
              }}
              options={{ chipStyles: { marginRight: 10, marginBottom: 10 } }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
