<template>
    <div class="per-million">
        <h2>Per Million</h2>
        <div>Tests: {{ testsPerOneMillion }}</div>
        <div>Cases: {{ casesPerOneMillion }}</div>
        <div>Deaths: {{ deathsPerOneMillion }}</div>
        <div>Recovered: {{ recoveredPerOneMillion }}</div>
        <div>Active: {{ activePerOneMillion }}</div>
        <div>Critical: {{ criticalPerOneMillion }}</div>
    </div>
</template>

<script>
export default {
    name: 'PerMillion',
    props: {
        testsPerOneMillion: Number,
        casesPerOneMillion: Number,
        deathsPerOneMillion: Number,
        recoveredPerOneMillion: Number,
        activePerOneMillion: Number,
        criticalPerOneMillion: Number,
    }
}
</script>