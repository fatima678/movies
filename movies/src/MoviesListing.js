import React from 'react';
import Movie from './Movie';
import './Movie.css'; 

const data = [
    {
        "id": "tt5637536",
        "primaryImage": {
            "id": "rm1197290240",
            "width": 720,
            "height": 720,
            "url": "https://m.media-amazon.com/images/M/MV5BNmM1NmY4N2QtNmVkOS00MjMyLWI5ZGUtYWYxMDRjY2MzNDdiXkEyXkFqcGdeQXVyMTAwMDAwMA@@._V1_.jpg",
            "caption": {
                "plainText": "Avatar: The Way of Water (2022)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Avatar 5",
        "releaseYear": 2028
    },
    {
        "id": "tt27696374",
        "primaryImage": {
            "id": "rm2193304833",
            "width": 3300,
            "height": 5100,
            "url": "https://m.media-amazon.com/images/M/MV5BZjI3MTg1MzEtNWJlOC00MTJkLThkMTctZjEyMzZiZDBmOWQ3XkEyXkFqcGdeQXVyMTYzNTExOTQ2._V1_.jpg",
            "caption": {
                "plainText": "Agent Owen (2028)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Agent Owen",
        "releaseYear": 2028
    },
    {
        "id": "tt3095356",
        "primaryImage": {
            "id": "rm1197290240",
            "width": 720,
            "height": 720,
            "url": "https://m.media-amazon.com/images/M/MV5BNmM1NmY4N2QtNmVkOS00MjMyLWI5ZGUtYWYxMDRjY2MzNDdiXkEyXkFqcGdeQXVyMTAwMDAwMA@@._V1_.jpg",
            "caption": {
                "plainText": "Avatar: El sentido del agua (2022)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Avatar 4",
        "releaseYear": 2026
    },
    {
        "id": "tt21361444",
        "primaryImage": {
            "id": "rm3349350401",
            "width": 1920,
            "height": 2883,
            "url": "https://m.media-amazon.com/images/M/MV5BZWE0MjkyNGQtMjgwMS00NGIwLTg5YmEtYThlOTQ1NTZmNWFmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
            "caption": {
                "plainText": "Avengers: Secret Wars (2026)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Avengers: Secret Wars",
        "releaseYear": 2026
    },
    {
        "id": "tt12115482",
        "primaryImage": {
            "id": "rm1788672257",
            "width": 1169,
            "height": 1851,
            "url": "https://m.media-amazon.com/images/M/MV5BZGMzZmIwMTgtMzNlOC00ZDFiLWI5YWQtYTg3N2EzN2JmYzg5XkEyXkFqcGdeQXVyNTcxOTU4Njg@._V1_.jpg",
            "caption": {
                "plainText": "Kevin Lucero Less in Felt (2025)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Felt",
        "releaseYear": 2025
    },
    {
        "id": "tt13963798",
        "primaryImage": {
            "id": "rm1309004801",
            "width": 1000,
            "height": 1500,
            "url": "https://m.media-amazon.com/images/M/MV5BNTk3NzcwMTYtN2M1NS00MjFlLTk5ZDctMWRhMWIyMTgxZDE1XkEyXkFqcGdeQXVyMTE4NzQ3MjU3._V1_.jpg",
            "caption": {
                "plainText": "Stryd (2025)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Stryd",
        "releaseYear": 2025
    },
    {
        "id": "tt7890826",
        "primaryImage": {
            "id": "rm1199394816",
            "width": 2475,
            "height": 3494,
            "url": "https://m.media-amazon.com/images/M/MV5BOTVjODU5ODUtMzYyMy00NzgwLTgxNzMtNDFjNTM2NWNmODQxXkEyXkFqcGdeQXVyODMwMzY2NTM@._V1_.jpg",
            "caption": {
                "plainText": "Naya Legend of the Golden Dolphin (2025)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Naya Legend of the Golden Dolphin",
        "releaseYear": 2025
    },
    {
        "id": "tt15716018",
        "primaryImage": {
            "id": "rm2854745089",
            "width": 5400,
            "height": 7200,
            "url": "https://m.media-amazon.com/images/M/MV5BNjMyZTJlNmMtZDJkYS00YWFlLWE1NDEtZTUxYTU1MWU5NjU3XkEyXkFqcGdeQXVyNDMzNTI2NzI@._V1_.jpg",
            "caption": {
                "plainText": "Trail Blazers: The Aftermath (Part 2) (2025)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Trail Blazers: The Aftermath (Part 2)",
        "releaseYear": 2025
    },
    {
        "id": "tt19847976",
        "primaryImage": {
            "id": "rm2538941441",
            "width": 2000,
            "height": 3000,
            "url": "data:image/jpeg;base64,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zkICIiAiIgXuzNrijR6mtWsS9tVpLaXryNzqBqMsHByrA2oQR3SV0n6RprtPpR1e5qEs1D6llwK7rLup+ORc+AW6ollAC72SAN7A5iIHWWX6LXrU+o1D6LUV01U2407316haaxWlqENlbNxEBUjdJGd4ZwKvpFtKu80V0Ky6fT0dTV1njuDZZa9tgBIDM9rndBwBgZOMmniB1V/ShW2Yul3CdTkVPqDxzo67DfVRknIPXOTwA8GusccTV0P2lVSutrtvt0pv06ImoqRnNbLqabTwDA4IrI4HtnNRA6bTa+mnamlvbVXaymq+ix77K2DstbqzJuOxPDGBxkj/ANXKdC9ZrI1pFlCagY3Ro77TdbXzyH6zfUH9i+wHsnIxA7DU9INOdupr1DjT/DadQ43QGBBSy4Bc8cPv4493KY6T7bqs0lWmGp1G0Ll1Bt+F6qvcNCFN34PUWZnIY4ZskKCowCSxnIRA7jU7Y092k0qjaGp0r06HqX0yU2lLXFlz5LLYBhhYBkjlnzSL0N6WnZlGqNTMupe3StWAD1bpUbetrtwQd1g4GB9oIBnIxAs+kN1Vuptspe167G3x15ZrFLjeat2PjlSSN7PHAPDOBo2VXU91Y1Fj10b3xllab7BQMndXOCTjHHhxkOIHWdN9oafUdT8F1BNFQNdGiGnapNLVnIO+WPWWMSS7kZLeTAFmelVJ0zfKbyh2cNJ+iTVmkWCgINRvE7oAsHXBgN/fOOWWnARAsdPp6TprrHtIvFla00KoO+G3jZY5J8FVCgcOJLjsyZXREDstkajQ1aJkXW2afVXIw1Ng0j2HqyBu6Wpw43UYg77YycgeLvBoOw9dQ+ku0WptbTo+oqvrvWtrQr1121sliA72GW3II5FRwwSRzcQOg29tKrWaukb71aWurT6ZLXrDWLTTWtZtNYOCxwz7oPbjPbJvS7VaN6aa9FqH6mpiK9I2mZDhgS+putLYe1iqA4GMYC4VQJyUQOy6P67QaQ16tbtQbq9PYj6CyoOLrXqZOFoIUadi+SpG9gEYbIacbEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==",
            "caption": {
                "plainText": "Wicked: Part Two (2025)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Wicked: Part Two",
        "releaseYear": 2025
    },
    {
        "id": "tt21357150",
        "primaryImage": {
            "id": "rm4272097281",
            "width": 1920,
            "height": 2883,
            "url": "https://m.media-amazon.com/images/M/MV5BMTMyMTMwYTctMjExYi00NTc3LWEwYjAtZWJmODVkZDU1NTZiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
            "caption": {
                "plainText": "George Lorimer in Avengers: The Kang Dynasty (2025)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Avengers: The Kang Dynasty",
        "releaseYear": 2025
    },
    {
        "id": "tt23644356",
        "primaryImage": {
            "id": "rm1846819585",
            "width": 750,
            "height": 1066,
            "url": "https://m.media-amazon.com/images/M/MV5BYmFhYjBjYzctZDEzMy00N2JkLWEwZGItM2Y0YTU0MGFlZTE5XkEyXkFqcGdeQXVyMTc2NzgzODM@._V1_.jpg",
            "caption": {
                "plainText": "Spell Warriors: Shield and Shadow (2025)",
                "__typename": "Markdown"
            },
            "__typename": "Image"
        },
        "title": "Spell Warriors: Shield and Shadow",
        "releaseYear": 2025
    }
]


const MoviesListing = () => {
    return (
        <div className="movies-listing">
            {data.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    image={movie.primaryImage.url}
                    releaseYear={movie.releaseYear}
                />
            ))}
        </div>
    );
};

export default MoviesListing;