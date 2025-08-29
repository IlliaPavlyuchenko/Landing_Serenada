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
          <!-- Дата -->
          <div class="form-group">
            <label>Дата отправления</label>
            <div class="input-icon">
              <input type="date" v-model="date" />
              <span class="icon"
                ><svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_189)">
                    <path
                      d="M8.37987 12.689C8.37987 12.4009 8.14619 12.1675 7.85782 12.1675H6.03605C5.74805 12.1675 5.51428 12.4009 5.51428 12.689V14.5105C5.51428 14.799 5.74805 15.0325 6.03605 15.0325H7.85782C8.14619 15.0325 8.37987 14.799 8.37987 14.5105V12.689Z"
                      fill="#2F2F2F"
                      fill-opacity="1"
                    />
                    <path
                      d="M12.9326 12.689C12.9326 12.4009 12.6989 12.1675 12.4111 12.1675H10.5891C10.3011 12.1675 10.0674 12.4009 10.0674 12.689V14.5105C10.0674 14.799 10.3011 15.0325 10.5891 15.0325H12.4111C12.6989 15.0325 12.9326 14.799 12.9326 14.5105V12.689Z"
                      fill="#2F2F2F"
                      fill-opacity="1"
                    />
                    <path
                      d="M17.4857 12.689C17.4857 12.4009 17.252 12.1675 16.964 12.1675H15.1422C14.8539 12.1675 14.6201 12.4009 14.6201 12.689V14.5105C14.6201 14.799 14.8539 15.0325 15.1422 15.0325H16.964C17.252 15.0325 17.4857 14.799 17.4857 14.5105V12.689Z"
                      fill="#2F2F2F"
                      fill-opacity="1"
                    />
                    <path
                      d="M8.37987 17.2423C8.37987 16.9537 8.14619 16.7205 7.85782 16.7205H6.03605C5.74805 16.7205 5.51428 16.9537 5.51428 17.2423V19.0634C5.51428 19.3518 5.74805 19.5853 6.03605 19.5853H7.85782C8.14619 19.5853 8.37987 19.3517 8.37987 19.0634V17.2423Z"
                      fill="#2F2F2F"
                      fill-opacity="1"
                    />
                    <path
                      d="M12.9326 17.2423C12.9326 16.9537 12.6989 16.7205 12.4111 16.7205H10.5891C10.3011 16.7205 10.0674 16.9537 10.0674 17.2423V19.0634C10.0674 19.3518 10.3011 19.5853 10.5891 19.5853H12.4111C12.6989 19.5853 12.9326 19.3517 12.9326 19.0634V17.2423Z"
                      fill="#2F2F2F"
                      fill-opacity="1"
                    />
                    <path
                      d="M17.4857 17.2423C17.4857 16.9537 17.252 16.7205 16.9642 16.7205H15.1422C14.8539 16.7205 14.6201 16.9537 14.6201 17.2423V19.0634C14.6201 19.3518 14.8539 19.5853 15.1422 19.5853H16.9642C17.252 19.5853 17.4857 19.3517 17.4857 19.0634V17.2423Z"
                      fill="#2F2F2F"
                      fill-opacity="1"
                    />
                    <path
                      d="M20.7432 2.56102V5.34326C20.7432 6.60077 19.723 7.61415 18.4657 7.61415H17.029C15.7715 7.61415 14.7378 6.60077 14.7378 5.34326V2.55103H8.26217V5.34326C8.26217 6.60077 7.22851 7.61415 5.97125 7.61415H4.53425C3.27695 7.61415 2.25683 6.60077 2.25683 5.34326V2.56102C1.15793 2.59414 0.254944 3.50344 0.254944 4.6211V20.9263C0.254944 22.0649 1.17786 23.0001 2.31653 23.0001H20.6835C21.8204 23.0001 22.7451 22.063 22.7451 20.9263V4.6211C22.7451 3.50344 21.8421 2.59414 20.7432 2.56102ZM20.0759 19.9109C20.0759 20.403 19.6769 20.8022 19.1847 20.8022H3.7761C3.28383 20.8022 2.88484 20.403 2.88484 19.9109V11.4887C2.88484 10.9964 3.28378 10.5972 3.7761 10.5972H19.1846C19.6769 10.5972 20.0758 10.9964 20.0758 11.4887L20.0759 19.9109Z"
                      fill="#2F2F2F"
                      fill-opacity="1"
                    />
                    <path
                      d="M4.52919 6.12256H5.95034C6.3817 6.12256 6.73142 5.77333 6.73142 5.34198V0.780862C6.73142 0.349463 6.3817 0 5.95034 0H4.52919C4.09781 0 3.74811 0.349463 3.74811 0.780862V5.34198C3.74811 5.77333 4.09781 6.12256 4.52919 6.12256Z"
                      fill="#2F2F2F"
                      fill-opacity="1"
                    />
                    <path
                      d="M17.0107 6.12256H18.4318C18.8629 6.12256 19.2126 5.77333 19.2126 5.34198V0.780862C19.2127 0.349463 18.8629 0 18.4318 0H17.0107C16.5794 0 16.2296 0.349463 16.2296 0.780862V5.34198C16.2296 5.77333 16.5794 6.12256 17.0107 6.12256Z"
                      fill="#2F2F2F"
                      fill-opacity="1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_189">
                      <rect width="23" height="23" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
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
                ><input type="checkbox" v-model="services" value="cabinView" />
                каюта с видом</label
              >
              <label
                ><input type="checkbox" v-model="services" value="tickets" />
                авиабилеты до Одессы</label
              >
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
    flex-wrap: wrap;
    gap: 2rem;

    flex-direction: row;
    align-items: flex-end;
    // display: grid;
    // grid-template-columns: repeat(4, minmax(18rem, 1fr)) minmax(28rem, 2fr);
    // grid-template-rows: auto auto;
    // gap: 2rem;
    // align-items: center;
    // justify-content: center;
    box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.1);
    @media (max-width: 1024px) {
      //grid-template-columns: 1fr;
      //top: 15rem;
    }
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 1.4rem;
  text-align: left;
  flex: 1 1 auto;
  min-width: 18rem;
  justify-content: center;

  &.form-group--full {
    // grid-column: 1 / span 5;
    // grid-row: 2;
    // @media (max-width: 1024px) {
    //   grid-column: auto;
    // }
    flex: 1 1 100%;
  }
}

.counter {
  display: flex;
  align-items: center;
  gap: 0.8rem;

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
  //   grid-column: 5 / 6;
  //   grid-row: 1;
  flex: 1 1 28rem;
  margin-left: auto;

  @media (max-width: 1024px) {
    //     grid-column: auto;
    //     grid-row: auto;
    //     padding-top: 2rem;
    flex-basis: 100%;
    margin: 0;
  }
}
.info-link {
  color: #a8afc3;
  text-decoration: none;
  font-size: 1.4rem;
}
.select-wrap {
  position: relative;
  //   @media (max-width: 1024px) {
  //     max-width: 20rem;
  //   }
}

.select-wrap select {
  appearance: none;
  //   -webkit-appearance: none;
  //   -moz-appearance: none;
  background: transparent;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 100%;
  border-radius: 0.5rem;
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
  }

  .icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
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
      font-size: 1.4rem;
    }
  }
}
label {
    text-align: center;
}
</style>
