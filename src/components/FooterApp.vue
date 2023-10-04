<script>
export default {
    data() {
        return {
            contatti:[
                {
                    nome:'Mail',
                    contenuto: 'boolfolio.info@mail.com'
                },
                {
                    nome:'Cellulare',
                    contenuto: 'numero di telefono falso'
                },
                {
                    nome:'Segreteria',
                    contenuto: 'numero di telefono falso'
                }
            ]
        }
    },
}
</script>

<template>
<div>
    <div class="container p-5 text-light">
        <div class="row">
            <div class="col-6">
                <h2>Contatti</h2>
                <ul class="list-group">
                    <li v-for="(contatto, index) in contatti" :key="index">
                        {{ contatto.nome }}: {{ contatto.contenuto }}
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-6">
                        <h2>Contatti</h2>
                        <ul class="list-group">
                            <li v-for="(contatto, index) in contatti" :key="index">
                                {{ contatto.nome }}: {{ contatto.contenuto }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <h2>Contatti</h2>
                        <ul class="list-group">
                            <li v-for="(contatto, index) in contatti" :key="index">
                                {{ contatto.nome }}: {{ contatto.contenuto }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
*{
    background-color: #212529;
    li{
        list-style: none;
    }
}

    
</style>