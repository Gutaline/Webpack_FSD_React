import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return <div style={{ height: "100%" }}>{t("Заголовок")}</div>;
};

export default AboutPage;
