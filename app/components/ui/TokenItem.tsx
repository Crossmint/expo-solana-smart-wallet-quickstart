import React from "react";
import { View, Text, StyleSheet } from "react-native";
import type { Token } from "../../types/wallet";

type TokenItemProps = {
  token: Token;
};

export default function TokenItem({ token }: TokenItemProps) {
  return (
    <View style={styles.tokenRow}>
      <View style={styles.tokenInfo}>
        <View style={styles.tokenLogoContainer}>
          <Text style={styles.tokenLogo}>{token.logo}</Text>
        </View>
        <Text style={styles.tokenName}>{token.name}</Text>
      </View>
      <Text style={styles.tokenBalance}>{token.balance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tokenRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  tokenInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  tokenLogoContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  tokenLogo: {
    fontSize: 20,
  },
  tokenName: {
    fontSize: 16,
    fontWeight: "500",
  },
  tokenBalance: {
    fontSize: 16,
    fontWeight: "600",
  },
});
