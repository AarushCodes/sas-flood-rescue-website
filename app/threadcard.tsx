"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Software
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          The Software used to create this project
          <br />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Custom trained object detection model
          <br />
          OpenCV
          <br />
          Ultralytics
          <br />
          Roboflow
          <br />
          Tensorflow
          <br />
          Python
          <br />
          ONNX
          <br />
          RPIO
          </CardItem>
        
       
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        Hardware
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
      >
        The Hardware used to create this project
        <br />
      </CardItem>
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-neutral-600 dark:text-white"
      >
        Raspberry Pi Model 3 B+
        <br />
        Ultrasonic sensors
        <br />
        L298N Motor Driver
        <br />
        DC Motors
        <br />
        Rechargable Battery
        <br />
        Raspberry Pi Camera Module
        </CardItem>
      
     
    </CardBody>
  </CardContainer>
  </>
  );
}
