import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import i18n from "../i18n/i18n";
import { I18nextProvider } from "react-i18next";

import "../../../app/styles/index.scss";
const preview: Preview = {
  decorators: [
    (Story, context) => {
      return (
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <Story {...context} />
          </I18nextProvider>
        </MemoryRouter>
      );
    },
  ],
};

export default preview;
