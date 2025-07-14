import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProdutosStore = defineStore('produtos', () => {
  const produtos = ref([
    {
      id: 1,
      nome: 'Sanduíche Vegetariano',
      imagem: '/imagens/sanduiches-veg-vegetariano.jpg',
      preco: 34.00,
    },
    {
      id: 2,
      nome: 'Sanduíche Frango Teriyaki',
      imagem: '/imagens/sanduiches-frango-teriyaki.jpg',
      preco: 34.00,
    },
    {
      id: 3,
      nome: 'Sanduíche de Presunto',
      imagem: '/imagens/sanduiches-embutidos-presunto.jpg',
      preco: 34.00,
    },
    {
      id: 4,
      nome: 'Sanduíche Italiano',
      imagem: '/imagens/sanduiches-embutidos-bmt-italiano.jpg',
      preco: 34.00,
    },
    {
      id: 5,
      nome: 'Sanduíche Carne Suprema',
      imagem: '/imagens/sanduiches-carne-supreme.jpg',
      preco: 34.00,
    },
    {
      id: 6,
      nome: 'Sanduíche Carne Seca c/ Cream Cheese',
      imagem: '/imagens/sanduiches-carne-seca-com-cream-cheese.jpg',
      preco: 34.00,
    },
  ]);

  return { produtos };
});
