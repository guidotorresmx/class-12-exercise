const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  const cookbook = new Cookbook();
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const cookbookCli = new CookbookCli(cookbook);
      const message = cookbookCli.add('tacos', ['guisado', 'tortilla', 'salsa']);
      expect(message).toBe(`Successfully added the following recipe: tacos`);
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {

    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {

    });
  });
});
