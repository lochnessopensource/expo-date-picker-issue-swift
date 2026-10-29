
import { Stack } from "expo-router";

import React from "react";



const RootLayout = () => {

  return (

      <Stack>
          <Stack.Screen name="/expense-details"  />
      </Stack>

  );
};

export default RootLayout;
