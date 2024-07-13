const submitForm = async (data) => {
    try {
        const response = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            if (response.status === 400) {
                const err = await response.json();
                throw new Error(`Validation failed: ${JSON.stringify(err.errors)}`);
            }
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        if (responseData.status === 'success') {
            console.log(responseData);
            return { success: true, data: responseData };
        } else {
            console.error("Unexpected response status:", responseData.status);
            return { success: false, error: "Wystąpił nieoczekiwany błąd." };
        }
    } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
        return { success: false, error: error.message };
    }
};

export { submitForm }