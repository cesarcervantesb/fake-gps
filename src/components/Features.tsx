import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Row, Col, Card } from "antd";
import {
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { useTranslations } from "next-intl";

const iconStyle: React.CSSProperties = {
  fontSize: 48,
  color: "#3B2A82",
  marginBottom: 8,
};

const features = [
  {
    key: "simulated_location",
    icon: <EnvironmentOutlined style={iconStyle} />,
    titleKey: "simulated_location",
    descKey: "simulated_location_desc",
  },
  {
    key: "privacy_guaranteed",
    icon: <SafetyCertificateOutlined style={iconStyle} />,
    titleKey: "privacy_guaranteed",
    descKey: "privacy_guaranteed_desc",
  },
  {
    key: "modern_interface",
    icon: <AppstoreOutlined style={iconStyle} />,
    titleKey: "modern_interface",
    descKey: "modern_interface_desc",
  },
];

export default function Features() {
  const t = useTranslations("features");

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)",
        textAlign: "center",
      }}
    >
      <Title level={2} style={{ color: "#3B2A82", marginBottom: 8 }}>
        {t("heading")}
      </Title>
      <Paragraph
        style={{
          maxWidth: 600,
          margin: "0 auto 32px",
          fontSize: "1rem",
        }}
      >
        {t("description")}
      </Paragraph>

      <Row gutter={[24, 24]}>
        {features.map((f) => (
          <Col key={f.key} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{
                textAlign: "center",
                height: "100%",
              }}
            >
              {f.icon}
              <Title level={4} style={{ color: "#3B2A82", marginBottom: 8 }}>
                {t(f.titleKey as never)}
              </Title>
              <Paragraph style={{ color: "#666666", marginBottom: 0 }}>
                {t(f.descKey as never)}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
