import React from "react";
import { Card } from "@/Components/atoms/card";

const Cardlist = ({ card }) => {

    return (
        <div>
            {card.map((item, index) => (<Card key={index} image={item.image} name={item.name} />))}
            {}
        </div>
    );
};

export default Cardlist;
