"use client";
import React, { useEffect, useRef } from "react";

const allImages = [
  "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/Cynergy-Logo-1.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/002.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/013.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/022.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/005.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/009.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/021.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/020.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/029.png",
  "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/043.png",
];

// Split the images into two arrays
const leftImages = allImages.slice(0, allImages.length / 2);
const rightImages = allImages.slice(allImages.length / 2);

const LogoSlider = ({ direction = "left", images }) => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1; // Adjust scroll speed

  useEffect(() => {
    const track = trackRef.current;

    // Duplicate images for seamless looping
    const duplicatedImages = [...images, ...images];

    // Clear existing content
    track.innerHTML = "";

    // Append duplicated images to the track
    duplicatedImages.forEach((src, index) => {
      const imgContainer = document.createElement("div");
      imgContainer.className = "h-full w-60 flex items-center justify-center"; // Center the image
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Slide ${index}`;
      img.className = "w-48 h-24 object-cover"; // Use object-contain to fit the image within the container
      imgContainer.appendChild(img);
      track.appendChild(imgContainer);
    });

    const updateScroll = () => {
      const currentX =
        parseFloat(
          track.style.transform.replace("translateX(", "").replace("px)", "")
        ) || 0;

      // Move the track based on direction
      if (direction === "left") {
        track.style.transform = `translateX(${currentX - scrollSpeed}px)`;
      } else {
        track.style.transform = `translateX(${currentX + scrollSpeed}px)`;
      }

      // Reset the position when the first set of images has completely scrolled
      if (Math.abs(currentX) >= track.scrollWidth / 2) {
        track.style.transform = "translateX(0)";
      }

      animationRef.current = requestAnimationFrame(updateScroll);
    };

    animationRef.current = requestAnimationFrame(updateScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [direction, images]);

  return (
    <div className="overflow-hidden mx-auto">
      <div className="relative bg-white mt-16 lg:mt-2 w-full overflow-hidden h-24 flex items-center">
        <div
          ref={trackRef}
          className="flex gap-10 w-max"
          style={{ transition: "transform 0s linear" }}
        ></div>
      </div>
    </div>
  );
};
export default LogoSlider;