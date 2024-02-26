"use client";
import { Button, Form } from "@/Components";
import Cardlist from "@/Components/atoms/card/Cardlist";
import React, { useState } from "react";
const page = () => {

  const [cards, setCards] = useState([
    {
      name: "porhai",
      image: "/mypic2.jpg",
    },
    {
      name: "ouknha",
      image: "/ouknha.jpg",
    },
    {
      name: "leeminhai",
      image: "/kk.webp",
    },
  ]);

  // const handleFormSubmit = (data) => {
  //   // Do whatever you want with the form data
  //   console.log("Form data:", data);
  //   // You can also set the form data to state if needed
  //   setFormData(data);
  // };


  return (
    <div>
      <Cardlist card={cards} />
      <Button buttonClassName="top-left"><Form setCard={setCards} /></Button>
    </div>
  );
};

export default page;
