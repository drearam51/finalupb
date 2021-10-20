const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/products');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadImg = multer({storage: storage}).single('image');

const newProduct = new Product({
    name:req.body.name,
    image: req.file.path,  //update this
    description: req.body.description,
    keywords: req.body.keywords,
    origin: req.body.origin,
    brew_time: req.body.brew_time,
    temperature: req.body.temperature,
});

module.exports = {
    getAllProduct,
    uploadImg,  //include the new guy
    newProduct,
    deleteAllProduct,
    getOneProduct,
    newComment,
    deleteOneProduct
};