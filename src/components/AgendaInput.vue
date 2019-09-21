<template lang="html">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header bg-success text-white">
                <p class="card-title">List Agenda</p>
            </div>
            <div class="card-body">
                <ul>
                    <li v-for="(row, index) in agenda" :key="index"><b>{{ row.hari }}</b> : {{ row.kegiatan }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AgendaShow',
    computed: {
        agenda() {
            return this.$store.state.listAgenda
        }
    }
}
</script>
