# Composition API

## Setup

O método setup permite a manipulação e retorno de objetos para o componente antes de sua criação. O que abre diversas possibilidades de manipulação de objetos e reaproveitamento de código. Por padrão esse método pode receber as `props` do componente:

```vue
<script>
export default {
    setup(props) { //ou somente setup()
    }
}
</script>
```

:::warning THIS
Como o objeto do Vue ainda não foi instanciado não faz sentido utilizar `this`
:::

## Hooks

O Vue 3 apresenta com a composition API uma maneira mais funcional de uso do código. Para podermos usar essas funcionalidades na prática podemos utilizar os seguintes hooks:

### ref

Permite a criação de atributos reativos no Vue 3. Por padrão ele retorna um wrapper com um atributo **value** para acesso da variável.

```vue
<script>
import { ref } from "@vue/reactivity";

export default {
    setup() {
        const atributoReativo = ref(0); //inicia o atributo com valor 0
        return { atributoReativo };
    }
}
</script>
```

### onMounted

```vue
<script>
import { onMounted } from "@vue/runtime-core";

export default {
    setup() {
        onMounted(() => console.log('Chamada do onMounted!'));
    }
}
</script>
```

:::tip Dica
A maioria dos métodos relacionados a ciclo de vida podem ser acessados usando o padrão `onMetodo`
:::