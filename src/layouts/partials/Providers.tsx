"use client";

import { ChakraProviders } from "@/app/chakraProviders";
import config from "@/config/config.json";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  const { default_theme } = config.settings;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={default_theme}
      enableColorScheme={false}
    >
      <ChakraProviders>
        {children}
      </ChakraProviders>
    </ThemeProvider>
  );
};

export default Providers;
