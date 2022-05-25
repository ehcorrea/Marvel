module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What you want?',
        choices: ['Components', 'Views'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{lowerCase type}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/{{type}}.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/{{lowerCase type}}/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/{{type}}Styles.ts.hbs',
      },
    ],
  });
};
