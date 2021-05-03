import React from "react";
import styles from "./SocialMedia.module.scss";
import Icon from "./Icon/Icon";

import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
} from "../../../resources/imgs/utilityIcons/index";

const SocialMedia = () => (
  <div className={styles.socialMediaContainer}>
    <h4 className={styles.sectionTitle}>{">"} Siga-nos</h4>
    <div className={styles.iconsContainer}>
      <Icon
        imgData={{ alt: "Logo do Facebook", imgSrc: facebookIcon }}
        link="http://www.facebook.com"
        alt=""
      />
      <Icon
        imgData={{ alt: "Logo do Twitter", imgSrc: twitterIcon }}
        link="http://www.twitter.com"
        alt=""
      />
      <Icon
        imgData={{ alt: "Logo do Instagram", imgSrc: instagramIcon }}
        link="http://www.instagram.com"
        alt=""
      />
      <Icon
        imgData={{ alt: "Logo do Linkedin", imgSrc: linkedinIcon }}
        link="http://www.linkedin.co"
        alt=""
      />
    </div>
  </div>
);

export default SocialMedia;
