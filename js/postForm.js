document.addEventListener("DOMContentLoaded", function () {
    const formEl = document.getElementById("inputForm"); // Use correct ID from HTML

    formEl.addEventListener("submit", async event => {
        event.preventDefault();
        
        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData);

        // Validate input fields
        if (!data.name || !data.city || !data.state || !data.type) {
            //$.toaster({ priority: 'danger', title: 'Error', message: 'Please fill in all fields before submitting.' });
            return;
        }

        try {
            const response = await fetch('https://paspirits-app.onrender.com/api/accounts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            const result = await response.json();
            console.log(result);

            //$.toaster({ priority: 'success', title: 'Spirits', message: 'Item Added to Inventory' });

        } catch (error) {
            console.error(error);
            //$.toaster({ priority: 'danger', title: 'Error', message: 'Oops, something went wrong and the form did not save.' });
        }
    });
});
