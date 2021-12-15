const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const cookbook = new Cookbook();
      cookbook.addRecipe('tacos', ['tortilla', 'meat', 'cheese']);
      expect(cookbook.recipes).toEqual({ tacos: ['tortilla', 'meat', 'cheese'] });
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const cookbook = new Cookbook();
      cookbook.addRecipe('torta', ['bolillo', 'meat', 'vegetables']);
      expect(cookbook.listRecipes()).toEqual(['torta']);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
