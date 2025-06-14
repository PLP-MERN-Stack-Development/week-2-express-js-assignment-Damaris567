module.exports = (req, res, next) => {
    console.log(`[${new Date().toString()}] ${req.method} ${req.originalUrl}`);
    next();
};