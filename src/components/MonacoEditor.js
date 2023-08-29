import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios'; // Import axios for API requests
import styles from './MonacoEditor.module.css'; // Import module-specific CSS

const MonacoEditor = () => {
  const [language, setLanguage] = useState('cpp'); // Default language
  const [theme, setTheme] = useState('vs-dark'); // Default theme
  const [input, setInput] = useState(''); // Input for C++ code execution
  const [output, setOutput] = useState(''); // Output of C++ code execution
  const [error, setError] = useState(''); // Error message if C++ code has errors
  const [editorValue, setEditorValue] = useState(`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!" << endl;
  
  return 0;
}`);// Code in the Monaco Editor

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleRunClick = async () => {
    try {
      const response = await axios.post('/api/compile', {
        code: editorValue,
        input,
      });

      setOutput(response.data.stdout);
      setError(response.data.stderr);
    } catch (error) {
      setError('An error occurred during execution.');
    }
  };

  const handleClearClick = () => {
    setOutput('');
    setError('');
  };

  const languageOptions = [
    { value: 'cpp', label: 'C++' },
    // Add more language options here
  ];

  const themeOptions = [
    { value: 'vs', label: 'Light' },
    { value: 'vs-dark', label: 'Dark' },
    // Add more theme options here
  ];

  return (
    <div className={styles.editorContainer}>
      <div className={styles.dropdownContainer}>
        <div>
          <span className={styles.label}> Language: </span>
          <select className={styles.select} value={language} onChange={handleLanguageChange}>
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span className={styles.label}> Theme: </span>
          <select className={styles.select} value={theme} onChange={handleThemeChange}>
            {themeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.editor}>
        <Editor
          height="60vh"
          // width="100%"
          language={language}
          theme={theme}
          value={editorValue}
          onChange={handleEditorChange}
        />
      </div>
      <div className={styles.runButtonContainer}>
        <button className={styles.runButton} onClick={handleRunClick}>
          Compile & Run
        </button>
        <button className={styles.clearButton} onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className={styles.resultContainer}>
        <div className={styles.resultField}>
          <label>Input:</label>
          <textarea
            className={styles.resultTextarea}
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.resultField}>
          <label>Output:</label>
          <textarea
            className={styles.resultTextarea}
            value={output}
            readOnly
            wrap="off"
          />
        </div>
        <div className={styles.resultField}>
          <label>Error:</label>
          <textarea
            className={styles.resultTextarea}
            value={error}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default MonacoEditor;
