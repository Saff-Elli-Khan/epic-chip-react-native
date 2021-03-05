import { EpicChip } from "epic-chip-react-native";
import * as React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const App = () => {
  return (
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
        <EpicChip
          mode={"Outlined"}
          titleOptions={{
            label: "Unchecked",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          mode={"Outlined"}
          checkIcon
          isChecked
          titleOptions={{
            label: "Checked",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          mode={"Outlined"}
          checkIcon={false}
          isChecked
          titleOptions={{
            label: "Checked Without Check Icon",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          mode={"Outlined"}
          checkIcon
          isDisabled
          titleOptions={{
            label: "Disabled",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          type="Large"
          mode={"Outlined"}
          checkIcon
          titleOptions={{
            label: "Large",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          type="Mini"
          mode={"Outlined"}
          checkIcon
          titleOptions={{
            label: "Mini",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          type="Micro"
          mode={"Outlined"}
          checkIcon
          titleOptions={{
            label: "Micro",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
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
        <EpicChip
          mode={"Solid"}
          titleOptions={{
            label: "Unchecked",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          mode={"Solid"}
          checkIcon
          isChecked
          titleOptions={{
            label: "Checked",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          mode={"Solid"}
          checkIcon={false}
          isChecked
          titleOptions={{
            label: "Checked Without Check Icon",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          mode={"Solid"}
          checkIcon
          isDisabled
          titleOptions={{
            label: "Disabled",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
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
        <EpicChip
          mode={"Solid"}
          titleOptions={{
            label: "Unchecked",
          }}
          isChecked
          options={{
            pickerStyles: { marginRight: 10, marginBottom: 10 },
            backgroundColor: {
              focusColor: "#ff0000",
              inActiveColor: "#ff4e4e",
            },
            titleColor: {
              focusColor: "#fff",
              inActiveColor: "#fff",
            },
          }}
        />
        <EpicChip
          mode={"Outlined"}
          checkIcon
          isChecked
          titleOptions={{
            label: "Checked",
          }}
          options={{
            pickerStyles: {
              marginRight: 10,
              marginBottom: 10,
              borderColor: "#538a13",
              borderWidth: 1.2,
            },
            backgroundColor: {
              focusColor: "#000000",
              inActiveColor: "#78c223",
            },
            titleColor: {
              focusColor: "#fff",
              inActiveColor: "#fff",
            },
          }}
        />
        <EpicChip
          mode={"Solid"}
          checkIcon={false}
          isChecked
          titleOptions={{
            label: "Checked Without Check Icon",
          }}
          options={{
            pickerStyles: {
              marginRight: 10,
              marginBottom: 10,
            },
            backgroundColor: {
              focusColor: "#9500ff",
            },
            titleColor: {
              focusColor: "#fff",
              inActiveColor: "#fff",
            },
          }}
        />
        <EpicChip
          mode={"Solid"}
          checkIcon
          titleOptions={{
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
            pickerStyles: {
              marginRight: 10,
              marginBottom: 10,
            },
            backgroundColor: {
              focusColor: "#570094",
              inActiveColor: "#94008f",
            },
            titleColor: {
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
        <EpicChip
          mode={"Solid"}
          checkIcon
          titleOptions={{
            label: "",
            Icon: <Ionicons name="person" color="white" size={15} />,
          }}
          options={{
            pickerStyles: {
              marginRight: 10,
              marginBottom: 10,
            },
            backgroundColor: {
              focusColor: "#570094",
              inActiveColor: "#94008f",
            },
            titleColor: {
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
          titleOptions={{
            label: "",
            Icon: <Ionicons name="bulb" color="white" size={14} />,
          }}
          options={{
            pickerStyles: {
              marginRight: 10,
              marginBottom: 10,
            },
            backgroundColor: {
              focusColor: "#570094",
              inActiveColor: "#000000",
            },
            titleColor: {
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
          titleOptions={{
            label: "",
          }}
          options={{
            pickerStyles: {
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
          titleOptions={{
            label: "",
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
        <EpicChip
          mode={"Outlined"}
          checkIcon
          titleOptions={{
            label: "",
            Icon: <Ionicons name="bulb" color="gray" size={14} />,
          }}
          options={{ pickerStyles: { marginRight: 10, marginBottom: 10 } }}
        />
      </View>
    </View>
  );
};

export default App;
