"use client";
import React from "react";
import LogoSlider from "./LogoSlider"; // Import the LogoSlider component

const DualLogoSlider = () => {
  // Define the images arrays
  const allImages = [
    "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/Cynergy-Logo-1.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/STAAMP-Logo-2.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/002.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/015.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/004.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/Cynergy-Logo-1.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/STAAMP-Logo-2.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/002.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/015.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/004.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/Cynergy-Logo-1.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/STAAMP-Logo-2.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/002.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/015.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/004.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/001.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/005.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/007.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/027.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/009.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/010.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/011.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/012.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/013.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/014.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/003.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/016.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/017.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/021.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/020.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/022.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/023.png",
     "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/016.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/017.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/021.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/020.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/022.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/023.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/021.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/020.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/022.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/023.png",
  ];

  // Split the images into two arrays
  const leftImages = allImages.slice(0, allImages.length / 2);
  const rightImages = allImages.slice(allImages.length / 2);

  return (
    <div className="lg:space-y-5 space-y-3 mt-20">
      <LogoSlider direction="left" images={leftImages} />
      <LogoSlider direction="right" images={rightImages} />
    </div>
  );
};

export default DualLogoSlider;