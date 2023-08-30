const { spawnSync } = require('child_process');
const fs = require('fs');

// Export a function that takes code and input as parameters
module.exports = function runCppCode(code, input) {
    // Write the C++ code to a temporary .cpp file
    fs.writeFileSync('temp.cpp', code);


    // Compile the C++ code using g++
    try {
        const { stderr } = spawnSync('g++', ['-std=c++17', 'temp.cpp', '-o', 'temp'], { stdio: 'pipe', encoding: 'utf-8' });

        if (stderr) {
            return {
                stdout: null,
                stderr: stderr,
                error: false
            }
        }
        // console.log('Compilation successful.');
    } catch (error) {
        console.error('Compilation failed.');
        process.exit(1);
    } finally {
        // Delete the temporary .cpp file
        fs.unlinkSync('temp.cpp');
    }

    // Run the compiled executable
    try {
        const childProcess = spawnSync('./temp', {
            input,
            timeout: 3000,
            encoding: 'utf-8',
            stdio: ['pipe', 'pipe', 'pipe'] // Capture stdout, stderr, and provide input
        });
        return {
            stdout: childProcess.stdout,
            stderr: childProcess.stderr,
            error: false
        };

    } catch (error) {
        console.error('Execution failed.');
        return {
            stdout: null,
            stderr: null,
            error: true
        };
    } finally {
        // Delete the compiled executable
        try {
            fs.unlinkSync(process.platform === 'win32' ? 'temp.exe' : 'temp');
        } catch (unlinkError) {
            console.error('Error deleting the temporary executable:', unlinkError);
        }
    }
};
