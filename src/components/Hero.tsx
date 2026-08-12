import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Row, Col, Image } from "antd";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #5E45B5 0%, #3B2A82 100%)",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      <Row justify="center" style={{ position: "relative", zIndex: 1 }}>
        <Col xs={24}>
          <Title
            level={1}
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginBottom: 0,
            }}
          >
            {t("title")}
          </Title>
        </Col>
        <Col xs={24}>
          <Paragraph
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              marginBottom: 12,
            }}
          >
            {t("tagline")}
          </Paragraph>
        </Col>
        <Col xs={24} style={{ marginTop: 16 }}>
          <Paragraph
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.1rem",
              marginBottom: 16,
            }}
          >
            {t("download")}:
          </Paragraph>
          <a
            href="https://play.google.com/store/apps/details?id=com.ccervantesb.fakegps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/googleplay-button.png"
              alt="Google Play"
              preview={false}
              style={{
                height: "clamp(40px, 8vw, 60px)",
                width: "auto",
              }}
            />
          </a>
        </Col>
      </Row>
    </div>
  );
}
