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
    
    // Replace multiline ternaries:
    // className={
    //   isDark
    //     ? "dark-mode greeting-text-p"
    //     : "greeting-text-p subTitle"
    // }
    content = content.replace(/className=\{\s*isDark\s*\?\s*["'][^"']*["']\s*:\s*(["'][^"']*["'])\s*\}/g, 'className=$1');
    
    fs.writeFileSync(file, content);
});

// Remove unused files
try {
    fs.rmSync('./src/components/ToggleSwitch', { recursive: true, force: true });
    fs.rmSync('./src/contexts/StyleContext.js', { force: true });
} catch (e) {
    console.error(e);
}
console.log("Cleanup multiline complete");
