import app from "./main"

const port = process.env.PORT || 3000;

app.listen(
    port,
    () => {
        console.log(`Server is listening on htttp//localhost:${port}/api/v1`);
    });