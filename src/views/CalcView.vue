<template>
  <div class="container">
    <h1>Скільки я зароблю? 💸</h1>

    <div class="input-block" data-suffix="▼">
      <label for="currency">Валюта</label>
      <select v-model="currency">
        <option value="₴">Гривня</option>
        <option value="$">Долар</option>
        <option value="€">Євро</option>
      </select>
    </div>

    <div class="input-block" data-suffix="₴">
      <label for="deposit">Сума депозиту</label>
      <input v-model.number="deposit" type="number" />
    </div>

    <div class="input-block" data-suffix="▼">
      <label for="term">Термін (кількість років)</label>
      <select v-model.number="term">
        <option v-for="year in 100" :key="year" :value="year">{{ year }}</option>
      </select>
    </div>

    <div class="input-block" data-suffix="%">
      <label for="rate">Річна прибутковість (%)</label>
      <input v-model.number="rate" type="number" />
    </div>

    <div class="input-block" data-suffix="₴">
      <label for="monthly">Щомісячне поповнення (необов’язково)</label>
      <input v-model.number="monthly" type="number" />
    </div>

    <div class="result">
      Ви отримаєте 🚀<br />
      <p id="result">
        <strong>{{ formatCurrency(balance) }}</strong>
      </p>
    </div>

    <div class="subinfo">
      Вклали
      <p id="subinfo">
        <strong>{{ formatCurrency(totalInvested) }}</strong>
      </p>
    </div>

    <button class="toggle-btn" @click="toggleTable">
      {{ showTable ? 'Сховати детальні розрахунки' : 'Показати детальні розрахунки' }}
    </button>

    <div class="divider"></div>

    <div v-if="showTable">
      <table>
        <thead>
          <tr>
            <th>Рік</th>
            <th>Поповнення за рік</th>
            <th>Прибуток за рік</th>
            <th>Загальна сума вкладень</th>
            <th>Баланс</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in breakdown" :key="index">
            <td>{{ row.year }}</td>
            <td>{{ row.added }}</td>
            <td>{{ row.profit }}</td>
            <td>{{ row.total }}</td>
            <td>{{ row.balance }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="description">
      <p><strong>Калькулятор складних відсотків 📈</strong><br /></p>
      Це простий інструмент для розрахунку прибутку з інвестицій у криптовалюту, акції чи інші активи.<br /><br />
      Введи початкову суму, річну прибутковість (%) та строк – і дізнайся, як зростатиме твій капітал завдяки
      ефекту компаундингу.<br /><br />
      Працює для щомісячного або річного нарахування. Ідеально підходить для довгострокового інвестування.<br /><br />
      Навчися заробляти на крипті з цим мінікурсом →
      <router-link :to="{ path: '/', query: { utm_source: 'calculator' } }"> сайт </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deposit: 1000,
      rate: 0,
      monthly: 0,
      term: 1,
      currency: '₴',
      showTable: false,
      breakdown: [],
      balance: 0,
      totalInvested: 0,
    }
  },
  watch: {
    deposit: 'calculate',
    rate: 'calculate',
    monthly: 'calculate',
    term: 'calculate',
    currency: 'calculate',
  },
  mounted() {
    this.calculate()
  },
  methods: {
    formatCurrency(value) {
      return `${Math.round(value).toLocaleString('uk-UA')} ${this.currency}`
    },
    toggleTable() {
      this.showTable = !this.showTable
    },
    calculate() {
      const annualRate = this.rate / 100
      let balance = this.deposit
      let totalInvested = this.deposit
      const breakdown = []

      for (let y = 1; y <= this.term; y++) {
        let additionsGrowth = 0
        let addedThisYear = 0

        for (let m = 0; m < 12; m++) {
          const monthsLeft = 12 - m
          additionsGrowth += this.monthly * Math.pow(1 + annualRate, monthsLeft / 12)
          totalInvested += this.monthly
          addedThisYear += this.monthly
        }

        const prevBalance = balance
        balance = balance * (1 + annualRate) + additionsGrowth
        const profitThisYear = balance - prevBalance - addedThisYear

        breakdown.push({
          year: y,
          added: Math.round(addedThisYear).toLocaleString('uk-UA'),
          profit: Math.round(profitThisYear).toLocaleString('uk-UA'),
          total: Math.round(totalInvested).toLocaleString('uk-UA'),
          balance: Math.round(balance).toLocaleString('uk-UA'),
        })
      }

      this.breakdown = breakdown
      this.balance = balance
      this.totalInvested = totalInvested
    },
  },
}
</script>

<style lang="scss" scoped>
select {
  border: none;
  outline: none;
  color: inherit;
}
.container {
  background-color: #fff;
  max-width: 450px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Gilroy-reg';
}
h1 {
  font-size: 45px;
  font-weight: 900;
  margin-bottom: 20px;
  font-family: 'Gilroy-Black';
  line-height: 1;
  color: #323232;
}
.input-block {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 14px 12px 8px;
  margin-bottom: 16px;
  position: relative;
}
.input-block label {
  font-size: 13px;
  color: #888;
  margin-bottom: 6px;
  display: block;
}
.input-block input,
.input-block select {
  width: 100%;
  font-size: 18px;
  border: none;
  background: #fff;
  font-weight: 500;
  outline: none;
}
.toggle-btn {
  display: inline-block;
  margin: 20px 0;
  padding: 10px 16px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
}
.divider {
  height: 1px;
  background: #eaeaea;
  margin: 30px 0;
}
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  font-size: 14px;
}
th,
td {
  border: 1px solid #ccc;
  padding: 6px;
  text-align: center;
}
th {
  background: #f0f0f0;
}
.description {
  margin-top: 30px;
  font-size: 16px;
  color: #333;
  p {
    font-size: 24px;
    font-family: 'Gilroy-Semibold';
    margin-bottom: 10px;
  }
}
.description a {
  color: #3a6df0;
  text-decoration: none;
}
.result {
  font-family: 'Gilroy-Semibold';
  margin-top: 25px;
}
#result {
  font-size: 44px;
  font-weight: bold;
  text-align: left;
  // margin-top: 40px;
  font-family: 'Gilroy-Bold';
  color: #323232;
}
#subinfo {
  font-family: 'Gilroy-Bold';
  color: #323232;
}
.subinfo {
  color: #888;
  font-size: 14px;
  margin-top: 10px;
  line-height: 1;
}
</style>
