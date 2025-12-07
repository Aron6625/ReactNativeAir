import React from "react";
import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import { colors } from '../themes/colors';
import TextComponent from "./TextComponent";
import { MaterialIcons as MaterialIcon } from '@expo/vector-icons';

type Props = {
  name: string;
  icon: string;
  color: string;
  onPress: () => void;
  isActive?: boolean;
};
const CategoryButton = (props: Props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={[
              styles.chip, 
                { 
                  backgroundColor: props.isActive ? props.color : colors.lowlight,
                  borderColor: props.color,
                  borderWidth: props.isActive ? 0 : 2,
                }]}
    >
      <View style={styles.content}>
        <MaterialIcon
          name={props.icon as any}
          color={props.isActive ? colors.white  : props.color}
          size={18}
        />
        <TextComponent
          size="14"
          color="muted"
          weight="bold"
          customColor={props.isActive ? colors.white : props.color}
        >
          {props.name}
        </TextComponent>
      </View>
    </TouchableHighlight>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  
});
