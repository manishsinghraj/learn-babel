const fileData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = response.json();
        console.log("data", data);
    } catch (error) {
        console.log("error".error);
    }
}