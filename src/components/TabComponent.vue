<template>
  <div class="table-container">
    <h1>НАВІЩО ТОБІ СИСТЕМА <br />БЕЗ ЗУСИЛЬ?</h1>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th class="left-align">Причина</th>
            <th>Класичний трейдинг</th>
            <th>Класичне інвестування</th>
            <th>
              Система <br />
              "Без Зусиль"
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tableData" :key="index">
            <td class="left-align">{{ row.reason }}</td>
            <td>
              <span :class="getClass(row.trading)">{{ row.trading }}</span>
            </td>
            <td>
              <span :class="getClass(row.investing)">{{ row.investing }}</span>
            </td>
            <td>
              <span :class="getClass(row.system)">{{ row.system }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { reason: 'Не потрібно сидіти за графіками 24/7', trading: '-', investing: '+', system: '+' },
        { reason: 'Зрозумілі точки купівлі та продажу', trading: '+', investing: '-', system: '+' },
        { reason: 'Готова стратегія замість хаотичних рішень', trading: '-', investing: '-', system: '+' },
        { reason: 'Захист капіталу та управління ризиками', trading: '+', investing: '-', system: '+' },
        { reason: 'Уникнення періодів падіння на ринку', trading: '-', investing: '-', system: '+' },
        {
          reason: 'Налаштована система заробітку без складних стратегій',
          trading: '-',
          investing: '+',
          system: '+',
        },
        { reason: 'Використання перевірених інструментів', trading: '-', investing: '-', system: '+' },
        { reason: 'Можливість створити пасивний дохід', trading: '-', investing: '+', system: '+' },
        { reason: 'Автоматизовані стратегії без емоцій', trading: '-', investing: '-', system: '+' },
        {
          reason: 'Не залежиш від одного джерела доходу / підходу',
          trading: '-',
          investing: '-',
          system: '+',
        },
      ],
    }
  },
  methods: {
    getClass(value) {
      return value === '+' ? 'plus' : value === '-' ? 'minus' : ''
    },
  },
}
</script>

<style lang="scss" scoped>
$table-border: 1px solid #ddd;

h1 {
  color: $text-grey;
  font-family: 'Gilroy-Bold';
  text-align: center;
  margin: 40px 0;
  line-height: normal;
}

.table-container {
  width: 100%;
  // overflow-x: auto;
  max-width: 1050px;
  margin-bottom: 80px;
}

.table-wrapper {
  width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  color: white;
  font-family: 'Gilroy-Reg';
  font-size: clamp(16px, 1.5vw, 24px);
}

thead {
  background-color: $yellow;
  height: 50px;
  color: $black;
}

thead th {
  padding: 10px;
  // border-bottom: $table-border;
  text-align: center;
  font-family: 'Gilroy-Reg';
  font-size: clamp(12px, 2vw, 32px) !important;
  border-right: 1px solid black;
  border-bottom: none;
}

thead th:last-child {
  border-right: none;
  white-space: nowrap;
}
thead th:first-child {
  text-align: center;
}
td {
  padding: 12px;
  border-bottom: 1px solid #dddddd8f;
  // border-bottom: 0.1px solid rgba(221, 221, 221, 0.6); /* Тонка лінія */
  // box-shadow: inset 0 -1px 0 rgba(221, 221, 221, 0.6);

  vertical-align: middle;
  word-wrap: break-word;
}
// tr {
//   box-shadow: inset 0 -1px 0 rgba(221, 221, 221, 0.6);
// }

.left-align {
  text-align: left;
  min-width: 120px;
  font-size: clamp(12px, 2vw, 28px);
}

/* "+" і "-" виділені */
.plus,
.minus {
  font-size: clamp(24px, 3vw, 52px);
}
.plus {
  color: $yellow;
}
/* 📱 Адаптивність для маленьких екранів */
@media (max-width: 1000px) {
  .table-container {
    width: 93%;
  }

  thead th,
  td {
    font-size: 14px;
    padding: 2px;
  }

  .left-align {
    min-width: 100px;
    padding: 4px 0px;
  }
}
</style>
