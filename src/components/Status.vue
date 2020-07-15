<template>
    <div class="status">
        <h2>Status</h2>
        <div>Tests: {{ tests }}</div>
        <div>Cases: {{ cases }}</div>
        <div>Deaths: {{ deaths }}</div>
        <div>Recovered: {{ recovered }}</div>
        <div>Active: {{ active }} </div>
        <div>Critical: {{ critical }}</div>
    </div>
</template>

<script>
export default {
    name: 'Status',
    props: {
        tests: Number,
        cases: Number,
        deaths: Number,
        recovered: Number,
        active: Number,
        critical: Number,
    }
}
</script>