"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
// load .env file
dotenv_1.default.config();
const PORT = (_a = process.env.PORT_NUMBER) !== null && _a !== void 0 ? _a : 3000;
// export const PATH_STYLES = path.join(__dirname, '/styles');
// export const PATH_ASSETS = path.join(__dirname, '/assets');
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // enable cors
// engine views
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app configuration
app.use(express_1.default.json()); // for parsing application/json - transform req.body to json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded - transform req.body to json
app.use(express_1.default.static('dist')); // for serving static files (css, js, images, etc.
// User Routes
app.use('/api/example', routes_1.routes.exampleRouter);
app.use('/api/users', routes_1.routes.userRouter);
app.get('/', (_req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', name: 'Gustavo' });
});
// start the Express server
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
