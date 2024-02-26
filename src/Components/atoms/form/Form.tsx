import React, { FormEvent, useState } from 'react';

const Form = ({ setCard }) => {
    const [formData, setFormData] = useState({ name: "", img: "" });
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prevData => ({ ...prevData, image: reader.result }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setCard(pre => ([...pre, formData]))

    };
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     onSubmit(formData)
    //     // Pass form data to the parent component or perform any other action here
    // };


    return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Please input your name"
                        onChange={handleChange}
                        value={formData.name}
                        name="name"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        onChange={handleImageChange}
                        value={formData.img}

                    />
                </div>
                <div className='w-[70px] rounded-sm flex bg-black'>
                    <button className='ml-[5px]' type="submit" onClick={handleSubmit}>AddCard</button>
                </div>
            </form>
        </div>
    );
};

export default Form;


