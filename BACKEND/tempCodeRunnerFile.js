app.use(express.json());
const mongoURI = "mongodb+srv://ishitachandel71:667871@Hey@cluster0.xviqu.mongodb.net/MERN_STACK_EVENT_MESSAGE"

//mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
.then(() => console.log(" Connected to MongoDB Atlas"))
.catch(err => console.error(" MongoDB Atlas connection error:", err));
