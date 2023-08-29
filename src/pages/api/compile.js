import cppRunner from "../../utils/cppRunner";
// const cppRunner = require('./cppRunner'); 


export default  function handler(req, res) {
    if (req.method === 'POST') {
        const { code, input } = req.body;
        
        const { stdout, stderr, error } =  cppRunner(code, input);

        if (error) {
            return res.status(500).json({ error: 'Execution error' });
        }
        else {
            return res.status(200).json({ stdout, stderr });

        }
    } else {
        res.status(405).end();
    }
}
