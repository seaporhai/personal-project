
export interface CardlistProps {
    card: CardItem[];
    onDelete: (id: string) => void;
    handleUpdate: (id: string) => void
};
export interface CardItem {
    id: string;
    name: string;
    image: string;
    description: string;
    category: string;
    joinedDate: string;
    role: string;
}