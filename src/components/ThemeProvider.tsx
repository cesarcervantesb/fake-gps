"use client";

import React from "react";
import {
  ConfigProvider,
  App as AntApp,
} from "antd";

const theme = {
  token: {
    colorPrimary: "#3B2A82",
    colorLink: "#E94E77",
    colorLinkHover: "#ff5e87",
    borderRadius: 8,
    fontFamily: "var(--font-poppins), Poppins, sans-serif",
    colorText: "#333333",
    colorBgContainer: "#ffffff",
    colorBgLayout: "#f9f9f9",
  },
  components: {
    Card: {
      borderRadiusLG: 16,
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    },
    Button: {
      borderRadius: 10,
      fontWeight: 600,
    },
  },
};

export default function ThemeProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <ConfigProvider theme={theme} direction={direction}>
      <AntApp>{children}</AntApp>
    </ConfigProvider>
  );
}
