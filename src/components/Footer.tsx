import Text from "antd/es/typography/Text";
import { Space } from "antd";
import { useTranslations } from "next-intl";

export default function FooterSection() {
  const t = useTranslations("footer");

  return (
    <div
      style={{
        background: "#3B2A82",
        textAlign: "center",
        padding: "2rem 1rem",
      }}
    >
      <Space direction="vertical" size={4}>
        <Text style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" }}>
          {t("copyright")}
        </Text>
        <Text style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>
          {t("developer")}
        </Text>
      </Space>
    </div>
  );
}
