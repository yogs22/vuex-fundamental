<template lang="html">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">List Agenda</h3>
            </div>
            <form @submit.prevent="simpan()" class="mb-4">
                <div class="card-body">
                    <div class="form-group">
                        <label class="float-left">Hari</label>
                        <input type="text" v-model="agenda.hari" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label class="float-left">Kegiatan</label>
                        <input type="text" v-model="agenda.kegiatan" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <button class="float-left btn btn-danger btn-sm" :disabled="isLoading">{{ isLoading ? 'Loading...' : 'Submit' }}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AgendaShow',
    data() {
        return {
            agenda: {
                hari: '',
                kegiatan: ''
            }
        }
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading
        }
    },
    
    methods: {
        simpan() {
            this.$store.dispatch('simpanAgenda', this.agenda)
            this.agenda = {
                hari: '',
                kegiatan: ''
            }
        }
    },

}
</script>
