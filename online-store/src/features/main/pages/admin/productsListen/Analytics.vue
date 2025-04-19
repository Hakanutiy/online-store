<template>
  <div class="analytics-container">
    <h1>Аналитика просмотров</h1>

    <div class="stats-grid">
      <div class="stat-card">
        <h3>Всего просмотров</h3>
        <div class="stat-value">{{ totalViews }}</div>
      </div>
      <div class="stat-card">
        <h3>Уникальные посетители</h3>
        <div class="stat-value">{{ uniqueVisitors }}</div>
      </div>
      <div class="stat-card">
        <h3>Среднее время</h3>
        <div class="stat-value">{{ averageTime }} мин</div>
      </div>
    </div>

    <div class="chart-container">
      <h2>Посещаемость по дням</h2>
      <apexchart
          type="line"
          height="350"
          :options="viewsChart.options"
          :series="viewsChart.series"
      ></apexchart>
    </div>

    <div class="charts-grid">
      <div class="chart-card">
        <h2>Популярные страницы</h2>
        <apexchart
            type="bar"
            height="300"
            :options="pagesChart.options"
            :series="pagesChart.series"
        ></apexchart>
      </div>

      <div class="chart-card">
        <h2>Устройства</h2>
        <apexchart
            type="donut"
            height="300"
            :options="devicesChart.options"
            :series="devicesChart.series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Моковые данные
    const generateViewsData = () => {
      const data = [];
      for(let i = 0; i < 14; i++) {
        data.push({
          date: `2024-02-${i+1}`,
          views: Math.floor(Math.random() * 1000) + 500,
          visitors: Math.floor(Math.random() * 800) + 300
        });
      }
      return data;
    };

    const viewsData = generateViewsData();

    // Общая статистика
    const totalViews = ref(viewsData.reduce((acc, curr) => acc + curr.views, 0));
    const uniqueVisitors = ref(viewsData.reduce((acc, curr) => acc + curr.visitors, 0));
    const averageTime = ref((Math.random() * 8 + 2).toFixed(1));

    // График просмотров
    const viewsChart = {
      series: [{
        name: 'Просмотры',
        data: viewsData.map(item => item.views)
      }],
      options: {
        chart: {
          type: 'line',
          height: 350,
          zoom: { enabled: false }
        },
        xaxis: {
          categories: viewsData.map(item => item.date),
          labels: { rotate: -45 }
        },
        colors: ['#4CAF50'],
        stroke: { curve: 'smooth' }
      }
    };

    // График популярных страниц
    const pagesChart = {
      series: [{
        data: [
          { x: 'Главная', y: 4567 },
          { x: 'О нас', y: 2345 },
          { x: 'Блог', y: 3456 },
          { x: 'Контакты', y: 1234 },
          { x: 'Помощь', y: 789 },
          { x: 'Главная (Магазин)', y: 12 },
        ]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 300
        },
        plotOptions: {
          bar: { horizontal: true }
        },
        colors: ['#2196F3']
      }
    };

    // График устройств
    const devicesChart = {
      series: [44, 55, 13],
      options: {
        chart: {
          type: 'donut'
        },
        labels: ['Desktop', 'Mobile', 'Tablet'],
        colors: ['#FF9800', '#E91E63', '#9C27B0'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: { width: 200 },
            legend: { position: 'bottom' }
          }
        }]
      }
    };

    return {
      totalViews,
      uniqueVisitors,
      averageTime,
      viewsChart,
      pagesChart,
      devicesChart
    };
  }
}
</script>

<style scoped>
.analytics-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 0.5rem;
}

.chart-container, .chart-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  margin: 2rem 0;
}

.charts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  color: #34495e;
  margin-bottom: 1rem;
}
</style>