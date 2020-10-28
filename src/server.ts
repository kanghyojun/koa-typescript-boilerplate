import Koa from "koa";

const port = 9402;
const app = new Koa();
app.listen(port);
console.log(`Server running on port ${port}`);
