import { FC } from "react";

import * as styles from "./Loader.module.scss";

export const Loader: FC = () => {
  return (
    <div className={styles.ldsRipple}>
      <div></div>
      <div></div>
    </div>
  );
};
