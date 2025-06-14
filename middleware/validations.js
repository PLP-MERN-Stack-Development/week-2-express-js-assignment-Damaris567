module.exports = (req, res, next) => {
    // Only validate POST and PUT requests
    if (req.method === 'POST' || req.method === 'PUT') {
        const {name, description, price, category, inStock} = req.body;
        if (!name || !description || price === undefined || !category || inStock === undefined){
            return res.status(400).json({message: 'All product fields are required'});
        }
    }
    next();
};