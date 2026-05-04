const homeController = (req, res) => {
    res.send('Welcome to the Home Page!');
};

const aboutController = (req, res) => {
    res.send('This is the About Page.');
};

const contactController = (req, res) => {
    res.send('Contact us at example@email.com');
};

module.exports = {
    homeController,
    aboutController,
    contactController
};
