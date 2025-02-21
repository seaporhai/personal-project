    import React from "react";
    import { Card } from "@/Components/atoms/card";
    import { CardlistProps } from "@/Components/type"

    const Cardlist: React.FC<CardlistProps> = ({ card, onDelete,handleUpdate }) => {
        return (
            <div>
                {card.map((item, index) => (
                    <Card
                        category={item.category}
                        joinedDate={item.joinedDate}
                        description={item.description}
                        key={item.id} // Use a unique id instead of index
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        ondelete={onDelete} // Pass the delete function
                        role={item.role} 
                        handleUpdate={handleUpdate} />

                ))}
            </div>
        );
    };

    export default Cardlist;
