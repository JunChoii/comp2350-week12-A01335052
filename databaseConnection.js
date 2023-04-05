const database = require("mongoose");
const is_qoddi = process.env.IS_QODDI || false;
const databaseName = "lab_example"

//Get the correct mongoDB Atlas connection string and put it here
const qoddiURI =
"mongodb+srv://Jun:jchoi2022@@cluster0.nuwaonv.mongodb.net/test"+databaseName+"?retryWrites=true&w=majority"
const localURI =
"mongodb://127.0.0.1/"+databaseName+"?authSource=admin&retryWrites=true"
if (is_qoddi) {
database.connect(qoddiURI, {useNewUrlParser: true, useUnifiedTopology: true});
}
else {
database.connect(localURI, {useNewUrlParser: true, useUnifiedTopology: true});
}
