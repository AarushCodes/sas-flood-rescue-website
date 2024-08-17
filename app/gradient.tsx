"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
        
        <p className="text-base sm:text-4xl text-black mt-4 mb-2 dark:text-neutral-200 text-center">
          Working of our project
        </p>
        <br />

        <p className="text-xl text-neutral-600 dark:text-neutral-400    ">
          This project involves the development of a floor rescue rover designed to assist in emergency scenarios by detecting and locating humans in need of rescue. The rover is equipped with a custom-trained object detection model that identifies human presence in its environment. The core technology driving this capability includes a Raspberry Pi, which serves as the main processing unit, and Python, the programming language used to implement the model and control the rover's functions.
          </p> <br />
<p className="text-xl text-neutral-600 dark:text-neutral-400    ">OpenCV, a powerful open-source computer vision library, is utilized to process the video feed and perform real-time human detection. The custom object detection model is specifically trained to recognize humans, ensuring the rover can accurately and efficiently identify individuals in various positions and conditions on the floor.
</p> <br />
<p className="text-xl text-neutral-600 dark:text-neutral-400    ">The rover is designed to operate autonomously, navigating through its environment while continuously scanning for human presence. Once a human is detected, the rover stops so that the human can get on the raft to safety, contributing to faster and more efficient rescue operations. This project showcases the integration of machine learning, robotics, and computer vision to create a practical solution for emergency response scenarios.
</p><br />
        
        
      </BackgroundGradient>
    </div>
  );
}
