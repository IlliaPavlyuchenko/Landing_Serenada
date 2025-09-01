<script setup>
import { ref } from "vue";
import Button from "@/components/ui/Buttons.vue";

const date = ref("");
const adults = ref(1);
const children = ref(0);
const cabin = ref("polulux");
const services = ref([]);
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__head">
        <h2 class="section__title section__title--w">
          Выбери дату для путешествия
        </h2>
      </div>
      <div class="booking">
        <div class="booking__img"></div>
        <div class="booking__form">
          <div class="booking__row">
            <!-- Дата -->
            <div class="form-group">
              <label>Дата отправления</label>
              <div class="input-icon">
                <input type="date" v-model="date" />
              </div>
            </div>

            <!-- Взрослые -->
            <div class="form-group">
              <label>Кол-во взрослых</label>
              <div class="counter">
                <button @click="adults--" :disabled="adults <= 1">−</button>
                <span>{{ adults }}</span>
                <button @click="adults++">+</button>
              </div>
            </div>

            <!-- Дети -->
            <div class="form-group">
              <label>Кол-во детей</label>
              <div class="counter">
                <button @click="children--" :disabled="children <= 0">−</button>
                <span>{{ children }}</span>
                <button @click="children++">+</button>
              </div>
            </div>

            <!-- Категория каюты -->
            <div class="form-group">
              <label>Категория каюты</label>
              <div class="select-wrap">
                <select v-model="cabin">
                  <option value="standart">стандарт</option>
                  <option value="polulux">полулюкс</option>
                  <option value="lux">люкс</option>
                </select>
                <span class="arrow">▾</span>
              </div>
            </div>

            <!-- Доп. услуги -->
            <div class="form-group form-group--full">
              <label>Дополнительные услуги</label>
              <div class="checkboxes">
                <label
                  ><input type="checkbox" v-model="services" value="transfer" />
                  трансфер</label
                >
                <label
                  ><input
                    type="checkbox"
                    v-model="services"
                    value="cabinView"
                  />
                  каюта с видом</label
                >
                <label
                  ><input type="checkbox" v-model="services" value="tickets" />
                  авиабилеты до Одессы</label
                >
              </div>
            </div>
          </div>
          <!-- Кнопка -->
          <div class="booking__actions">
            <Button variant="primary" size="md">Забронировать</Button>
            <a href="#" class="info-link">Информация о каютах</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section__title--w {
  padding-top: 8rem;
}
.container {
  position: relative;
  min-height: 41.5rem;
  margin-bottom: 8rem;
  @media (max-width: 1024px) {
    margin-bottom: 34rem;
  }
}
.booking {
  &__img {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(@/assets/images/bookingbg.png);
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    z-index: -1;
  }
  &__form {
    background-color: $color-white;
    min-height: 28.3rem;
    width: 100%;
    max-width: 137.4rem;
    border-radius: 1.2rem;
    top: 20rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 4rem;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 2rem;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.1);
    @media (max-width: 1024px) {
      flex-wrap: wrap;
      flex-direction: column;
    }
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    flex-grow: 1;

    gap: 8rem 1rem;
    @media (max-width: 1300px) {
      gap: 1rem 1rem;
    }
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.4rem;
  text-align: left;
  flex: 1 1 18rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }

  &.form-group--full {
    flex: 1 1 100%;
    max-width: 54rem;
  }
}

.counter {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-bottom: 1.4rem;
  justify-content: center;

  & button {
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 50%;
    background: #e69a2f5d;
    cursor: pointer;
    border: none;
    font-size: 2.2rem;
  }
  & span {
    min-width: 2rem;
    text-align: center;
    font-weight: bold;
  }
}
.booking__actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex: 0 1 auto;
  margin-left: auto;

  @media (max-width: 1024px) {
    flex-basis: 100%;
    margin: 0;
  }
}
.info-link {
  color: #071C55;
  text-decoration: underline;
  font-size: 1.6rem;
}
.select-wrap {
  position: relative;
}

.select-wrap select {
  appearance: none;
  background: transparent;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  font-size: 1.8rem;
}

.select-wrap .arrow {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #333;
}

.input-icon {
  position: relative;

  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1.8rem;
  }
}
.form-group.form-group--full {
  .checkboxes {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
}
label {
  text-align: center;
  font-weight: 700;
  font-size: 1.6rem;
}
</style>
