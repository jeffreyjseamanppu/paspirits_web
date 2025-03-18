// Replace this with the actual API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/users';

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        // Format data for Grid.js (Assumes an array of objects)
        const formattedData = data.map(user => [
            user.id,
            user.name,
            user.username,
            user.email,
            user.phone,
            user.website
        ]);

        new gridjs.Grid({
            columns: ["ID", "Name", "Username", "Email", "Phone", "Website"],
            data: formattedData,
            search: true,
            sort: true,
            pagination: {
                enabled: true,
                limit: 5
            },
            resizable: true,
            style: {
                table: {
                    border: "1px solid #ccc"
                },
                th: {
                    "background-color": "#f4f4f4",
                    "text-align": "left"
                },
                td: {
                    "padding": "8px",
                    "border-bottom": "1px solid #ddd"
                }
            }
        }).render(document.getElementById("grid-container"));
    })
    .catch(error => console.error('Error fetching data:', error));