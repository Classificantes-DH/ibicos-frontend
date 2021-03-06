import { useState, useEffect } from "react";

const useJobIconImportHook = (iconName) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const importImages = (r) => {
      return r.keys().map((item) => {
        return r(item);
      });
    };

    const importedIconsPaths = importImages(
      require.context("./../resources/imgs/jobIcons", false, /\.(svg)$/)
    );
    const requestedIcon = importedIconsPaths.filter((iconPath) =>
      iconPath.includes(iconName)
    );
    setImage(requestedIcon);
  }, [iconName]);

  return image;
};

export default useJobIconImportHook;
