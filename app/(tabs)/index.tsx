import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpComingSubscriptionCard from "@/components/UpComingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import image from "@/constants/image";
import "@/global.css";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { formatCurrency } from "../lib/utils";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1  bg-background p-5">
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-20"
        ListEmptyComponent={() => (
          <>
            <View className="home-header">
              <View className="home-user">
                <Image source={image.avatar} className="home-avatar" />
                <View className="flex flex-col">
                  <Text className="home-user-name">{HOME_USER.name}</Text>
                  <Text className="home-user-designation">
                    {HOME_USER?.designation}
                  </Text>
                </View>
              </View>
              <Image source={icons.add} className="home-add-icon" />
            </View>

            <View className="home-balance-card">
              <Text className="home-balance-label">Balance</Text>
              <View className="home-balance-row">
                <Text className="home-balance-amount">
                  {formatCurrency(HOME_BALANCE?.amount)}
                </Text>
                <Text className="home-balance-date">
                  {dayjs(HOME_BALANCE?.nextRenewalDate).format("MM/DD")}
                </Text>
              </View>
            </View>

            <View className="">
              <ListHeading title={"Upcoming"} />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => (
                  <UpComingSubscriptionCard {...item} />
                )}
                keyExtractor={(item) => item?.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <Text className="home-empty-state">
                    No upcoming Subscription yet...
                  </Text>
                }
              />
            </View>
            <View className="">
              <ListHeading title={"All Subscriptions"} />
              {/* <SubscriptionCard {...HOME_SUBSCRIPTIONS[0]} /> */}
              <FlatList
                data={HOME_SUBSCRIPTIONS}
                renderItem={({ item }) => <SubscriptionCard {...item} />}
                keyExtractor={(item) => item?.id}
                ListEmptyComponent={
                  <Text className="home-empty-state">
                    No Subscription found...
                  </Text>
                }
                ItemSeparatorComponent={() => <View className="h-4" />}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
}
