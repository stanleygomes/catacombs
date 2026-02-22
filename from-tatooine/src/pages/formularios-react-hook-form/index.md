---
title: Formulários com React Hook Form
date: '2021-03-11'
spoiler: Conheça as principais funcionalidades deste arquivo para seu projeto
tags: javascript, packagejson
published: true
---

![](https://firebasestorage.googleapis.com/v0/b/from-tatooine.appspot.com/o/formularios-react-hook-form%2Fersu6rgih9aa00vndxtl.png?alt=media&token=948bff4e-5f28-496b-8b86-cec45e20e18a)

## O que é? O que faz? Pra que serve?

O [React Hook Form](https://react-hook-form.com/) é uma lib de gerenciamento de formulários que controla os dados dos componentes utilizando o conceito de REF de forma que não depende do estado do componente. Sendo assim, o componente é mais performático, pois não re-renderiza a toda mudança de valor dos inputs como em outras libs.

## Vantagens

Esta lib é relativamente recente, completando 2 anos desde seu surgimento, mas acumula uma série de benefícios como:

- A sua própria concepção (não re-renderizar a cada mudança no valor de um input);
- Tamanho da lib **9Kb** e zero (isto mesmo, zero) dependência de pacotes de outras libs no [NPM](https://www.npmjs.com/package/react-hook-form);
- Facilidade de implementação;
- Pouco código a escrever;
- Documentação no próprio site rica de exemplos (codesandbox, vídeos e forms interativos), inclusive tutoriais de integração com outras libs e também usando typescript.

> Em comparação com o [Formik](https://formik.org/), que é amplamente usado no mercado, a principal diferença (e vantagem) seria a utilização de referência para controle dos valores dos inputs e não de estado do componente *(+performance)*.

## Implementação

O React Hook Form exige pouco código para começar. Veja no exemplo abaixo a integração do hook no componente e como nos inputs você controla por referência.

```javascript
// ... code

import { useForm } from 'react-hook-form';

function App() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Example Required</label>

            <input
                name="exampleRequired"
                ref={register({ required: true, maxLength: 10 })}
            />

            {errors.exampleRequired && <p>This field is required</p>}

            <input type="submit" />
        </form>
    );
}

// ... more code

```

Veja [aqui](https://codesandbox.io/s/react-hook-form-basic-1z105) o exemplo completo e funcional no codesandbox.

Você pode conferir também [neste exemplo](https://codesandbox.io/s/react-hook-form-validation-8kcng), algumas validações de inputs providas pela própria lib com mais detalhes.

Neste último exemplo, uma abordagem de utilização do React Hook Form com uma lib de validação de schema (YUP). Veja como é simples integrar:


```javascript
// ... code

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const messageRequired = 'Por favor, preencha este campo';

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(messageRequired)
});

function App() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const onError = (errors) => {
        console.log(errors);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" ref={register} />
                
                {errors.firstName && <p>{errors.firstName.message}</p>}

                {/* more inputs */}
            </div>

            <input type="submit" />
        </form>
    );
}

// ... more code

```

Para acessar o código completo e funcional no codesandbox, clique [aqui](https://codesandbox.io/s/react-hook-form-validation-yup-mrv28).

## Enfim, devo usar?

Com certeza você deve usá-lo. Além das várias vantagens apresentadas anteriormente, essa lib tem grande aceitação na comunidade javascript, com mais de **19k** de stars no [github](https://github.com/react-hook-form/react-hook-form). É uma lib estável e constantemente mantida atualizada.

## V7

O pessoal responsável pelo projeto já está trabalhando na próxima versão e liberando algumas releases com excelentes features para deixar ainda mais simples a escrita de código.

Você pode acompanhar [aqui](https://github.com/react-hook-form/react-hook-form/releases).

---

Este post não seria possível sem o trabalho de pesquisa e discussão do time do capítulo de frontend do LuizaLabs.

Obrigado pela leitura! Espero que possa ter ajudado. 🚀

Até mais.
