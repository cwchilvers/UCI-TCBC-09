module.exports = (data) => {
    // Licenses
    const licenses = {
        apache: {
            name: 'APACHE 2.0',
            badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)',
            link: 'https://opensource.org/licenses/Apache-2.0'
        },
        gpl: {
            name: 'GPL 3.0',
            badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0)',
            link: 'https://www.gnu.org/licenses/gpl-3.0'
        },
        bsd: {
            name: 'BSD 3',
            badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=for-the-badge)](https://opensource.org/licenses/BSD-3-Clause)',
            link: 'https://opensource.org/licenses/BSD-3-Clause'
        }
    };

    const licenseData = licenses[data.license.toLowerCase()] || { name: '', badge: '', link: '' };
    const { name, badge, link } = licenseData;

    // Add Title
    let markdown = `# ${data.title}\n`;

    // TODO: Add License Badge
    if (data.license !== 'None') {
        markdown += `\n${badge}\n`;
    }
    
    // Table of Contents
    markdown += `\n## Table of Contents`;

    const sections = [
        { title: 'Description', key: 'description' },
        { title: 'Installation', key: 'installation' },
        { title: 'Usage', key: 'usage' },
        { title: 'License', key: 'license' },
        { title: 'Contributing', key: 'contributing' },
        { title: 'Tests', key: 'tests' },
        { title: 'Questions', key: 'questions' }
    ];
    
    // Add sections to table of contents
    sections.forEach(section => {
        if (data[section.key] !== '') {
            markdown += `\n* [${section.title}](${section.key})`;
        }
    });
    
    markdown += '\n';
    
    // Add sections to README
    sections.forEach(section => {
        if (data[section.key] !== '') {
            markdown += `\n## ${section.title}\n${data[section.key]}\n`;
        }
    });
    
    // Add contact information to README
    if (data.questions !== '') {
        markdown += `\n## Questions\nGitHub: ${data.username}\nEmail: ${data.email}`;
    }
    
    return markdown;
}