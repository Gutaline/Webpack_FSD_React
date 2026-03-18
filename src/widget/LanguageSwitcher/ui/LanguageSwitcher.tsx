import { useTranslation } from "react-i18next";

import { Button } from "shared/ui/Button/Button";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "ru") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  };

  return <Button onClick={changeLanguage}>{t("Язык")}</Button>;
};
