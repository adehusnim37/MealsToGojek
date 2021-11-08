import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Nasi Pecel" />
          <List.Item title="Nasi Rawon" />
          <List.Item title="Bubur Ayam" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        />

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        />

        <List.Accordion
          title="Drink"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinkExpanded}
          onPress={() => setDrinkExpanded(!drinkExpanded)}
        />
      </ScrollView>
    </SafeArea>
  );
};
