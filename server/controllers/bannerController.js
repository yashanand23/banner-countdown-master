const db = require('../config/db');

exports.getBanner = (req, res) => {
    db.query('SELECT * FROM banners WHERE id = 1', (error, results) => {
        if (error) throw error;
        res.json(results[0]);
    });
};

exports.updateBanner = (req, res) => {
    const { description, timer, link, is_visible } = req.body;
    db.query(
        'UPDATE banners SET description = ?, timer = ?, link = ?, is_visible = ? WHERE id = 1',
        [description, timer, link, is_visible],
        (error) => {
            if (error) throw error;
            res.json({ message: 'Banner updated successfully!' });
        }
    );
};
