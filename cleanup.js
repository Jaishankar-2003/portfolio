const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove useContext(StyleContext)
    content = content.replace(/const \{isDark\} = useContext\(StyleContext\);\n?/g, '');
    content = content.replace(/import StyleContext from "\.\.\/\.\.\/contexts\/StyleContext";\n?/g, '');
    content = content.replace(/import StyleContext from "\.\.\/contexts\/StyleContext";\n?/g, '');
    content = content.replace(/import \{StyleProvider\} from "\.\.\/contexts\/StyleContext";\n?/g, '');
    content = content.replace(/import \{ useContext \} from "react";\n?/g, '');
    content = content.replace(/import React, \{useContext\} from "react";/g, 'import React from "react";');
    content = content.replace(/import React, \{useState, useEffect, useContext\} from "react";/g, 'import React, {useState, useEffect} from "react";');

    // Fix destructuring
    content = content.replace(/isDark, /g, '');
    content = content.replace(/, isDark/g, '');
    content = content.replace(/isDark={isDark}/g, '');

    // Replace ternaries like isDark ? "dark-mode card" : "card"
    content = content.replace(/isDark \? "[^"]*" : "([^"]*)"/g, '"$1"');
    content = content.replace(/isDark \? '[^']*' : '([^']*)'/g, '"$1"');
    
    // Replace complex className concatenations
    // className={isDark ? "dark-mode-text" : ""}
    content = content.replace(/isDark \? "[^"]*" : ""/g, '""');
    
    // Remove StyleProvider wrappers if any, though Main.js has it.
    // In Main.js: <StyleProvider value={{isDark: false, changeTheme: () => {}}}>
    
    fs.writeFileSync(file, content);
});
console.log("Cleanup complete");
