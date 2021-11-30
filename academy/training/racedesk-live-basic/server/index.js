const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());//req.body


//ROUTES

//create a result
app.post("/results", async(req, res) => {
    try {
        const { result } = req.body;
        const newResult = await pool.query(
            "INSERT INTO results (result) VALUES($1) RETURNING *", 
            [result]
        );
        res.json(newResult.rows[0])

    } catch (err) {
        console.error(err.message)
    }

})
//get all results
app.get("/results", async(req, res)=> {
    try {
        const allResults = await pool.query("SELECT * FROM results")
        res.json(allResults.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//update result
app.put('/results/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { result } = req.body;
        const updateResult = await pool.query(
            "UPDATE results SET result = $1 WHERE result_id = $2", 
            [result, id]
            );
            res.json("result was updated")
    } catch (err) {
        console.error(err.message)
    }
})

//delete result
app.delete("/results/:id", async (req, res) => {
    try {
        const { id } = req.params;
        constdeleteResult = await pool.query(
            "DELETE FROM results WHERE result_id = $1", 
        [id]);
        res.json("result was deleted")
    } catch (err) {
        console.error(err.message)
        
    }
}
)

app.listen(5000, ()=> {
    console.log("server has started on port 5000")
})