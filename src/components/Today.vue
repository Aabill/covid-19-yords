<template>
    <div class="today">
        <h2>Today</h2>
        <div>Today's Cases: {{ todayCases }} </div>
        <div>Today's Deaths: {{ todayDeaths }}</div>
        <div>Today's Cases: {{ todayRecovered }}</div>
    </div>
</template>

<script>
export default {
    name: 'Today',
    props: {
        todayCases: Number,
        todayDeaths: Number,
        todayRecovered: Number
    }
}
</script>