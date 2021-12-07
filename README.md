<div align="center">
 <img src="/assets/" width="100" alt="NOssa Logo"/>
 
 <h1>Projetão Receita de Geladeira</h1>
</div>
Repositório o aplicativo para a gerência o Projetão Receita de Geladeira em parceria com o IFAL através das Disciplinas Programação Movel e Programação Web II<br/>
Aplicativo será desenvolvido em [React Native](http://reactnative.dev). Siga as intruções a baixo para instalar, configurar e executar o aplicativo do projeto.

## Instalação e Configuração
Siga o passo a passo descrito [neste link](https://www.notion.so/Configura-es-do-ambiente-79e0e4c3e992462a9b11f2745b0f2785).<br/>

## Como Executar

Realize esses comandos em um terminal aparte, ou no próprio terminal integrado do VS Code.
1. Faça um clone desse repositório na sua máquina:
``` sh
 $ git clone https://github.com/italo1033/Projetao-IFAL-2021.git
``` 
2. Instale as dependências do projeto, com o seguinte comando:
``` sh
 $ yarn
```

  **Observação:** **_não utilize_** os comandos com NPM, vamos utilizar desde o início o Yarn. 
  Caso você rode algum comando com o NPM vai aparecer um arquivo chamado **package-look.json**. 
  Dentro deste arquivo vão estar os pacotes que foram instalados com o NPM. 
  Copie os nomes dos pacotes, apague o arquivo e instale usando o Yarn. 
  

## Patterns
Padrões definidos em reunião:
1. Sempre dar um pull quando for começar a trabalhar.
2. Sempre dar um pull quando for dar um push na sua branch de trabalho.
3. Sempre utilizar o Yarn ao invés do NPM. Quando vir um npm install .... pode substituir por yarn add … que geralmente dá certo. Se não der certo é sinal que o nome do pacote no yarn pode está diferente.
4. Nome de `variáveis`, `funções`, `arquivos` e `componentes` sempre em inglês e corretamente escritos.
5. Componentes como constantes:
```tsx
import React from 'react';
import {
   View,
} from 'react-native'

import { styles } from './styles';

interface Props {
   
}
export const Component = ({}: Props) => {
  
  return (
    <View>

    </View>
  );
}
```
6. Pages como funções:
```tsx
import React from 'react';
import {
   View,
} from 'react-native'

import { styles } from './styles';

export function Screen() {
  
  return (
    <View>

    </View>
  );
}
```
7. Styles como objeto StyleSheet:
```tsx
import { StyleSheet } from 'react-native';
 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
```

8. Variáveis booleanas em forma de pergunta: 
```tsx
const [isNotKnow, setIsNotKnow] = useState(false);
```
9. Todo componente/página deve ser criado com uma pasta separada, dentro dela há um arquivo **index.js** e um arquivo **style.js**.
<div>
 <img src="/assets/reamd.png" width="100" alt="NOssa Logo"/>
 
 
</div>
