import { lazy } from "react";

const AboutPageAsync = lazy(async () => {
  await new Promise((res) => setTimeout(res, 2000));
  const module = await import("./AboutPage");
  return module;
});

export default AboutPageAsync;
