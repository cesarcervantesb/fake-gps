import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Button, Card } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function PrivacySection() {
  const t = useTranslations("privacy");

  return (
    <div
      style={{
        padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)",
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <Card
        style={{
          borderColor: "#E94E77",
          borderWidth: 1,
        }}
      >
        <LockOutlined style={{ fontSize: 40, color: "#E94E77" }} />
        <Title level={3} style={{ color: "#3B2A82", marginTop: 12 }}>
          {t("heading")}
        </Title>
        <Paragraph>{t("description")}</Paragraph>
        <Link href="/privacy">
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#E94E77",
              borderColor: "#E94E77",
              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            {t("link")}
          </Button>
        </Link>
      </Card>
    </div>
  );
}
