import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Carousel, Image } from "antd";
import { useTranslations } from "next-intl";

const screenshots = [
  "Screenshot_1.png",
  "Screenshot_2.png",
  "Screenshot_3.png",
  "Screenshot_5.png",
  "Screenshot_6.png",
  "Screenshot_4.png",
];

export default function Gallery() {
  const t = useTranslations("gallery");

  return (
    <div
      style={{
        background: "#fff",
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

      <div style={{ maxWidth: 360, margin: "0 auto" }}>
        <Carousel autoplay autoplaySpeed={2000} dotPosition="bottom" effect="fade" swipeToSlide infinite>
          {screenshots.map((src, i) => (
            <div key={i}>
              <Image
                src={`/images/${src}`}
                alt={`Screenshot ${i + 1}`}
                style={{
                  borderRadius: 16,
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
