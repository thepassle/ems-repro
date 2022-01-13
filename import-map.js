console.log('import-map.js')
const script = document.createElement('script');
script.setAttribute('type', 'importmap');
script.innerHTML = `
  {
    "imports": {
      "foo":"./foo.js"
    }
  }
`;

document.head.appendChild(script);