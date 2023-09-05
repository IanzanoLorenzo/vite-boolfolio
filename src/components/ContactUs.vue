<script>
import axios from 'axios'
import { store } from '../store';
export default {
    data() {
        return {
            store,
            axios,
            loadingRequest: false,
            name : '',
            surname : '',
            email : '',
            message : '',
            success : '',
            errors : {},
            doneMessage : false
        }
    },
    methods:{
        submitForm(){
            this.loadingRequest = true;
            const data = {
                name : this.name,
                surname : this.surname,
                email : this.email,
                message : this.message
            };
            this.errors = {}
            axios.post(`${store.basicUrl}/api/contact-us`, data).then((risp) => {
                this.success = risp.data.status; 
                if(!this.success){
                    this.errors = risp.data.errors
                }
                else{
                    this.doneMessage = true;
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.message = '';
                    setTimeout(() => {
                        this.doneMessage = false;
                    }, 3000)
                }
                this.loadingRequest = false
            });
        },
    }
}
</script>
<template>
    <div class="container mb-3" v-if="!store.loading">
        <h2 class="mb-3">Contattaci</h2>
        <p class="mb-3">Compila questo form per contattarci. <br> Ti risponderemo appena possibile.</p>
        <form @submit.prevent="submitForm()" method="POST">
            <div class="row">
                <div :class="doneMessage ? '' : 'hide'"  class="mb-3 col-12 text-success alert alert-success">!Messaggio inviato con successo. Ti ricontatteremo il prima possibile!</div>
                <div class="mb-3 col-12 col-md-6">
                    <label class="form-label">Nome</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Inserisci il tuo nome" v-model="name">
                    <div v-if="errors.name" class="text-danger">{{ errors.name[0] }}</div>
                </div>
                <div class="mb-3 col-12 col-md-6">
                    <label class="form-label">Cognome</label>
                    <input type="text" name="surname" id="surname" class="form-control" placeholder="Inserisci il tuo cognome" v-model="surname">
                    <div v-if="errors.surname" class="text-danger">{{ errors.surname[0] }}</div>
                </div>
                <div class="mb-3 col-12">
                    <label class="form-label">Email</label>
                    <input type="text" name="email" id="email" class="form-control" placeholder="Inserisci il tuo cognome" v-model="email">
                    <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
                </div>
                <div class="mb-3 col-12">
                    <label class="form-label">Messaggio</label>
                    <textarea name="message" id="message" rows="5" class="form-control" v-model="message" placeholder="Inserisci il tuo messaggio"></textarea>
                    <div v-if="errors.message" class="text-danger">{{ errors.message[0] }}</div>
                </div>
                <div class="col-12">
                    <button class="btn btn-success" type="submit" :class="loadingRequest ? 'disabled' : ''">{{loadingRequest ? 'Invio in corso' : 'Invia'}}</button>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
    .alert{
        height: 60px;
        transition: 0.25s linear;
        overflow: hidden;
        &.hide{
            height: 0;
            padding: 0;
            border: 0;
            transition: 0.25s linear;
        }
    }
</style>