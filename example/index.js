const { Posts, PostsWithIndex } = require('./models/posts');
const { connect, set } = require('mongoose');

const generationLength = 100000;

const main = async () => {
    set('strictQuery', true);
    return connect('mongodb://0.0.0.0:27017/fastestMongoose', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

function init() {
    main().then(async () => {
        console.log('Connected to database');
        console.time('insert');
        await generateData(generationLength);
        console.timeEnd('insert');

        console.log("------------------------", "WITHOUT INDEX", "------------------------");
        const results = await findOperations(Posts, 'find_without_');

        while (!results) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        console.log("------------------------", "WITH INDEX", "------------------------");
        await findOperations(PostsWithIndex, 'find_with_');

    }).catch(err => {
        console.log(err);
    });
}

async function findOperations(data, prefix) {
    let results = 0;
    let query = {
        "likes.50": {
            "$exists": true
        }
    }
    
    console.time(prefix + 'index');
    data.find().then(() => {
        console.timeEnd(prefix + 'index');
        results++;
    });

    console.time(prefix + 'index_with_lean');
    data.find().lean().then(() => {
        console.timeEnd(prefix + 'index_with_lean');
        results++;
    });

    console.time(prefix + 'index_with_lean_and_limit');
    data.find().limit(100).lean().then(() => {
        console.timeEnd(prefix + 'index_with_lean_and_limit');
        results++;
    });

    console.time(prefix + 'index_with_lean_and_select');
    data.find().select('id').lean().then(() => {
        console.timeEnd(prefix + 'index_with_lean_and_select');
        results++;
    });

    console.time(prefix + 'index_with_lean_and_select_and_limit');
    data.find().select('id').limit(100).lean().then(() => {
        console.timeEnd(prefix + 'index_with_lean_and_select_and_limit');
        results++;
    });

    console.time(prefix + 'index_with_lean_and_query');
    data.find(query).lean().then((data) => {
        console.timeEnd(prefix + 'index_with_lean_and_query');
        results++;
    });

    console.time(prefix + 'index_with_lean_and_query_and_limit');
    data.find(query).limit(100).lean().then((data) => {
        console.timeEnd(prefix + 'index_with_lean_and_query_and_limit');
        results++;
    });

    console.time(prefix + 'index_with_lean_and_query_and_select');
    data.find(query).select('id').lean().then((data) => {
        console.timeEnd(prefix + 'index_with_lean_and_query_and_select');
        results++;
    });

    console.time(prefix + 'index_with_lean_and_query_and_select_and_limit');
    data.find(query).select('id').limit(100).lean().then((data) => {
        console.timeEnd(prefix + 'index_with_lean_and_query_and_select_and_limit');
        results++;
    });


    while (results < 9) {
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return true;
}

async function generateData(length) {
    const collection = await PostsWithIndex.countDocuments();
    if (collection !== length) {
        let remain = length - collection;
        if (remain === length) dropCollection();

        console.log('Generating data... ', remain.toLocaleString() + ' datas.');
        for (var i = 0; i < remain; i++) {
            const post = {
                id: Math.floor(Math.random() * 1000000).toString() + remain,
                title: 'title',
                content: 'content',
                author: 'author name',
                comments: [{
                    id: '1',
                    content: 'comment content'
                }],
                tags: ['tag1', 'tag2'],
                likes: Array.from({ length: Math.floor(Math.random() * 100) }, () => Math.floor(Math.random() * 1000000).toString()).map((item, i) => {
                    return {
                        id: item,
                        name: 'name' + i
                    }
                }),
                dislikes: ['user3', 'user4']
            };

            Promise.all([Posts.insertMany(post), PostsWithIndex.insertMany(post)]);
        }
    }

    return true;
}

function dropCollection() {
    return Promise.all([Posts.deleteMany({}), PostsWithIndex.deleteMany({})]);
}

init();