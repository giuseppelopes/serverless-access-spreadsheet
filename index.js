const { google } = require('googleapis');
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Api Listening on port', port);
});

app.get('/university/:id', async(req, res) => {
    const id = req.params.id;
    const university = await getUniversity(id); // TODO

    if (!university) {
        res.status(404).json({status: `University with id ${id} not found!`});
        return;
    }
    res.json({
        status: 'sucess',
        data: {university: university}
    });
});

async function getUniversity(id) {
    return null;
}