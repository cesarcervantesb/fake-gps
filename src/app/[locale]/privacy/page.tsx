import type { Metadata } from "next";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy_page" });

  return {
    title: t("title"),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy_page" });

  const sections = [
    { title: t("section_1_title"), text: t("section_1_text") },
    {
      title: t("section_2_title"),
      content: (
        <>
          <Paragraph>{t("section_2_text_1")}</Paragraph>
          <Paragraph>{t("section_2_text_2")}</Paragraph>
        </>
      ),
    },
    {
      title: t("section_3_title"),
      content: (
        <>
          <Paragraph>{t("section_3_text_1")}</Paragraph>
          <ul>
            <li>{t("section_3_item_1")}</li>
            <li>{t("section_3_item_2")}</li>
          </ul>
          <Paragraph>{t("section_3_text_2")}</Paragraph>
        </>
      ),
    },
    { title: t("section_4_title"), text: t("section_4_text") },
    { title: t("section_5_title"), text: t("section_5_text") },
    { title: t("section_6_title"), text: t("section_6_text") },
    { title: t("section_7_title"), text: t("section_7_text") },
    { title: t("section_8_title"), text: t("section_8_text") },
    {
      title: t("section_9_title"),
      content: (
        <>
          <Paragraph>{t("section_9_text")}</Paragraph>
          <Paragraph>
            <strong>
              <Text copyable>{t("contact_email")}</Text>
            </strong>
          </Paragraph>
        </>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)",
        }}
      >
        <Title level={1} style={{ color: "#3B2A82", textAlign: "center" }}>
          {t("heading")}
        </Title>
        <Paragraph
          style={{ textAlign: "center", color: "#666666", marginBottom: 32 }}
        >
          <strong>{t("last_updated")}</strong>
        </Paragraph>

        {sections.map((section, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <Title level={3} style={{ color: "#3B2A82", fontSize: "1.1rem" }}>
              {section.title}
            </Title>
            {"text" in section ? (
              <Paragraph>{section.text as string}</Paragraph>
            ) : (
              section.content
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
