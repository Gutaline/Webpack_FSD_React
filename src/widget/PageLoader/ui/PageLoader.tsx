import { Loader } from "shared/ui/Loader/Loader";

import * as styles from "./PageLoader.module.scss";

export const PageLoader = () => {
  return (
    <div className={styles.wrapper}>
      <Loader />
    </div>
  );
};
