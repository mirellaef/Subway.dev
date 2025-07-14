<li class="produto" v-for="produto in produtosStore.produtos" :key="produto.id">
  <img :src="produto.imagem" :alt="produto.nome" />
  <h2>{{ produto.nome }}</h2>
  <span class="preco-e-botao">
    <p class="produto-preco">R$ {{ produto.preco.toFixed(2) }}</p>
    <button>
      <span class="mdi mdi-cart"></span>Comprar
    </button>
  </span>
</li>
