<template>
    <VCard max-width="900" class="bg-background pa-5 mx-auto text-center" flat>
        <VCardTitle class="pa-5">
            <h1>Sorteie as Equipes com o app #FutSagrado!</h1>
        </VCardTitle>
        <VImg src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        cover
        max-width="600"
        class="mx-auto"
        >
        </VImg>
        <VCardText class="w-auto">
            <h3 class="font-weight-light" >Quem nunca passou perregue na hora de sortear os times daquela
                pelada de fim de semana? É baralho, tampinhas de garrafa,
                fora as panelinhas que se formam. Com o #FutSagrado você escolhe as opções,
                insere o nome dos boleiros e nós sorteamos as equipes pra você.
            </h3>
        </VCardText>
        <VCardTitle class="pa-5 w-auto">
            <h2>Como funciona o app #FutSagrado ?</h2>
        </VCardTitle>
        <VCardText class="w-auto">
            <h3 class="font-weight-light">Você cria as equipes de forma aleatória apenas seguindo estes passos 
                simples:
            </h3>
        </VCardText>
        <VCardText class="text-left w-75 mx-auto">
            <div class="d-flex flex-row align-center">
                <VIcon icon="mdi-numeric-1-circle-outline" size="large"></VIcon>
                <h3 class="font-weight-light pa-2">Escolhas as opções disponíveis e a 
                    quantidade de jogadores por equipe.
                </h3>
            </div>
            <div class="d-flex flex-row align-center">
                <VIcon icon="mdi-numeric-2-circle-outline" size="large"></VIcon>            
                <h3 class="font-weight-light pa-2">Insira o nome dos jogadores.</h3>
            </div>
            <div class="d-flex flex-row align-center">
                <VIcon icon="mdi-numeric-3-circle-outline" size="large"> </VIcon>
                <h3 class="font-weight-light pa-2">Aperte o botão para sortear e o App #FutSagrado organiza as 
                equipes pra você !
                </h3>
            </div>
        </VCardText>
        <VCardActions class="justify-center">
            <VBtn variant="outlined" 
            elevation="4" 
            prepend-icon="mdi-dice-multiple-outline"
            size="large"
            >
            Bora sortear as equipes !
            </VBtn>
        </VCardActions>
    </VCard>
</template>

<script>

export default{
    name: 'HomeCard'
}
</script>