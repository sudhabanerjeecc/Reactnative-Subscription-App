import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1  bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <View className="flex flex-col gap-5">
        <Link className="bg-black px-10 py-3 text-white" href="/onboarding">
          Go to onboarding
        </Link>
        <Link className="bg-black px-10 py-3 text-white" href="/(auth)/sign-in">
          Go to Signin page
        </Link>
        <Link className="bg-black px-10 py-3 text-white" href="/(auth)/sign-up">
          Go to Sign up page
        </Link>

        <Link
          className="bg-black px-10 py-3 text-white"
          href="/subscriptions/cahtGPT"
        >
          Go to cahtGPT Subscription
        </Link>
        <Link
          className="bg-black px-10 py-3 text-white"
          href={{
            pathname: "/subscriptions/[id]",
            params: { id: "claude" },
          }}
        >
          Go to Claude Subscription
        </Link>
      </View>
    </SafeAreaView>
  );
}
