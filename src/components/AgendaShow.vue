<template lang="html">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header bg-success text-white">
                <p class="card-title">Daftar Agenda</p>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Hari</th>
                                <th>Agenda</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in agenda" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ row.hari }}</td>
                                <td>{{ row.kegiatan }}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
