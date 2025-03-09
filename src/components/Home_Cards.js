import React from 'react';
import cover from "../../src/assets/image/cover.png";

const Home_Cards = () => {
    const cardsData = [
        {
            id: 1,
            image: cover,
            title: 'Study websites of your competitors.',
            linkText: 'Site Explorer →',
            link: '#',
        },
        {
            id: 2,
            image: cover,
            title: 'Audit & optimize your website.',
            linkText: 'Site Audit →',
            link: '#',
        },
        {
            id: 3,
            image: cover,
            title: 'Learn what your customers are searching for.',
            linkText: 'Keywords Explorer →',
            link: '#',
        },
        {
            id: 4,
            image: cover,
            title: 'Track your web mentions & links.',
            linkText: 'Site Explorer →',
            link: '#',
        },
        {
            id: 5,
            image: cover,
            title: 'Improve your content with AI.',
            linkText: 'Ai Content Helper →',
            link: '#',
        },
        {
            id: 6,
            image: cover,
            title: 'Monitor your rankings in search engines.',
            linkText: 'Rank Tracker →',
            link: '#',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8 text-[#1a2a6c]">
                    All-in-one marketing intelligence platform
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cardsData.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-100"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                    {card.title}
                                </h2>
                                <a
                                    href={card.link}
                                    className="text-[#b21f1f] hover:text-[#fdbb2d] font-medium transition-colors duration-300"
                                >
                                    {card.linkText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home_Cards;