const {
    addBookListHandler,
    getAllBookListHandler,
    getBookListIdHandler,
    editBookListIdHandler,
    deleteBookListIdHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookListHandler,
    },

    {
        method: 'GET',
        path: '/books',
        handler: getAllBookListHandler,
    },

    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookListIdHandler,
    },

    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookListIdHandler,
    },

    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookListIdHandler,
    },
];

module.exports = routes;
