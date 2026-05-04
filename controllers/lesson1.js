const homeController = (req, res) => {
    res.send('Welcome to the Home Page!');
};

const aboutController = (req, res) => {
    res.send('This is the About Page.');
};

module.exports = {
    homeController,
    aboutController
};
