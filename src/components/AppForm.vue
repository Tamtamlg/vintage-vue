<template>
  <section class="form" id="contactUs">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="form__heading">Contact Us</h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 form__col form__col--left">
          <form @submit.prevent="onSubmit">
            <div class="form-group" :class="{'is-invalid': errors.first('name')}">
              <input
                type="text"
                class="form-control"
                id="name"
                autocomplete="off"
                v-model="name"
                name="name"
                v-validate="'required'"
              >
              <label for="name" class="form-group__label">Name</label>
              <span class="invalid-text">{{ errors.first('name') }}</span>
            </div>
            <div class="form-group" :class="{'is-invalid': errors.first('phone')}">
              <input
                type="tel"
                class="form-control"
                id="phone"
                autocomplete="off"
                v-model="phone"
                name="phone"
                v-validate="'required|numeric'"
              >
              <label for="name" class="form-group__label">Phone</label>
              <span class="invalid-text">{{ errors.first('phone') }}</span>
            </div>
            <div class="form-group" :class="{'is-invalid': errors.first('email')}">
              <input
                type="email"
                class="form-control"
                id="email"
                autocomplete="off"
                v-model="email"
                name="email"
                v-validate="'required|email'"
                data-vv-validate-on="blur"
              >
              <label for="name" class="form-group__label">E-mail</label>
              <span class="invalid-text">{{ errors.first('email') }}</span>
            </div>
            <div class="form-group check">
              <input
                type="checkbox"
                class="form-check-input visually-hidden"
                id="check"
                v-model="check"
                name="check"
                v-validate="'required'"
              >
              <label for="check" class="check__label">I agree the processing of personal data</label>
            </div>
            <div class="form-group form-group--btn">
              <button
                type="submit"
                class="form__btn"
                :disabled="!isFormValid || loading"
              >Get in touch</button>
            </div>
          </form>
        </div>
        <div class="col-md-6 form__col form__col--right">
          <p
            class="form__text"
          >Please tell us more about your request and give us info about your company and country</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      check: false
    };
  },
  computed: {
    isFormValid() {
      return !Object.keys(this.fields).some(key => this.fields[key].invalid);
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    onSubmit() {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("phone", this.phone);

      this.$store.dispatch("fetchData", formData);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/variables.scss";
.form {
  padding: 30px 0;
  background: #00b660
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACgCAMAAACSVLaNAAAAHlBMVEUAt1oAvGYAvGcAvWcAwHEAw3gAxHoAx4EAyIMAyYaf6l1kAAAAYUlEQVR42u3UuwnAMBBEwZOs3/XfsMEoc2ywYKaCFywbAAAAAAAAAAAAf1L6nL3EUVo+Whyk5lbjHD23EeeYuS3R5vFScqsu72vXWGvUAAAAAAAAAAAAAAAAAAAAAADgUzfePwKjLM4fYwAAAABJRU5ErkJggg==);
  background-size: 90px;
  @media (min-width: 992px) {
    padding: 90px 0;
  }
}

.form-group {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 13px;
  .form-control {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #000;
    background: transparent;
    padding: 10px 0;
    padding-left: 90px;
    font-size: 18px;
    &:focus {
      outline: none;
      border-bottom: 1px solid #fff;
      color: #fff;
    }
    &:focus ~ label {
      color: #fff;
    }
  }
}

.form-group__label {
  width: 80px;
  margin-bottom: 0;
  position: absolute;
  left: 0;
  top: 50%;
  font-size: 18px;
  transform: translateY(-50%);
}

.form__heading {
  color: #fff;
  margin-bottom: 24px;
}

.check__label {
  position: relative;
  padding-left: 35px;
  margin-bottom: 0;
  font-size: 18px;
  letter-spacing: -0.4px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    width: 15px;
    height: 15px;
    background: #fff;
  }
}

.form-check-input:checked ~ label {
  &::after {
    content: "";
    position: absolute;
    left: 1px;
    top: 6px;
    width: 15px;
    height: 15px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAAsklEQVQoU5WRAQ0CMRAE5xWAA5AADsDB4wAJSEDCSwAFIAEJOOAlIIHMp22glNBecmnS7d7ubTvaag48uzYOI9C3kI7Axq4laesBrIGxlnTyMaAaNSQtXYGlIbyTplR+hHIDVLKnUmkFCDjxnhH3gC2WKtoTOAQwKsbld2HoF8kL5RfANqAu7R4O/Kg8CG1qcQhnWr5kL95pSeIMOMeI/ymJ98AlfGQeTEqvlLS2/MxivQBNyB4/bP4A1AAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
  }
}

.form-check-input:focus ~ label {
  color: #fff;
}

.form__text {
  font-size: 18px;
  line-height: 34px;
}

.form__col--left {
  @media (min-width: 768px) {
    padding-right: 40px;
  }
}
.form__col--right {
  @media (min-width: 768px) {
    padding-left: 40px;
  }
}

.form__btn {
  background: #000
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAGFBMVEUYGBgZGRkaGhobGxscHBweHh4fHx8hISFuCeYIAAAEkUlEQVRYw62YW7IdNxIDiUyA2v+O54PHDtvjh6Sr/45usqqQQPVZ6aoimG85XqiYchRPlSgw0bKtNNDGIT09zYna1rVXm1G2Dcuh7Uozm7PoQhOlTY3sLK1cYpmsbYsia9HLDuydt2pL9aR1JCrnuNnRosedGRclTYpX2cFwe7hisFS5Fa7rOClCrLeAc1BauCQ9gdHIZrlNjJlYWS2SIzDc0EkT0mtRJ2ZtdVYMvHN+o7cYCqU5hpaUq+5VOpPWCk6rWtNooWG39h6vYnmVoitTOprMUGzhFkE2kYTWd4i/fPlwWJyasel7RWaddzc63pGOrrXqjMWmrXLeqE0tvg+EmnE6xJPgMqqLtXBPtNbihXIwh6ZKLSEVJXesasHQQ0mu+Glki1qier63pUGLrILJgCxchhxLaayfA4nI1RuJa03SArGvxm00zTUhmNN2a3JYf75rZ10leCp40ZsasoB4ATbeQFKjsSql5gieP+hLPJiCpC28WnhTe/HeZqax8lvtLXjyzVxqXzOf6uo9YXtd5VsDB23hkaCTvLHpxUPmDJlET4O0jfEJiluOa5e1/VzIVmXa3J4hNdjSRz0HSltCGyJC6Fpkbiu0UMtx57v6+SmTmpXPJNU3bvX2qFDrKRZgtpVmkJlyzVJ4xTUNYmxW/fC6qZ21PbMpEYeYSaJlIOU9N0NrxJU1v0wMbVOe6E+pJn5mzSZ+H6yPq/dU6D6nD52Hgw0kUf+9hofX3gb9Vk5DJ71Gw+fs/2VCZ13J0egT2oQVsZYMJlxIt/TB7JVgPC17fphQsrRGLT3SjdMZtPepKT8njqP4acv2xt/VllXk0LJV02dKvOHwcMR2ht9fI/aIcpL+qJeeL2aAD6OO7w4DPe1ED+2rZrCtFiOcvVm+9JR3D2x6njNvpUB624bPVU8HOzqW+hrNsDTN8dS0vtoUglRgL3S0Xa3hdr6o1Vp76x5BZ2vr2Kfv9qKcFTsu6HygOj5i+jwXbpKUujFVcz7dX62ePp6sPAUlLa4vX/xzTjxfde9vXebBfCImM2vpWC+97ws1WStgHU/celzitelj8cQkCFybVN+4KU0fN4fsyfX/3fp8P/3/DUvnO7r5AVZfgqNhcxZ/H97zT65c8x7r92D2V3n4V6/ztHhO7amp0I8ivfeiaf1OyR3Hxghyr3H0uUBnAtClpg66M3kDnSecVjg/we9WXdJxO8B7aknG8+C68gFJj1Y3aZ9Xfbj/wPPHBHsykL3a6Fuk0H2y3aqeiVJiXD5MxLbp0F+FrV+yTnl+JqLBG7JIv83oQZhfteDz9/won12sL1e5+bw6nkscf1p9zk8Q82826/PjdRDz/Mx2GXc9m59OFjLmnnt7i7ZtQ+mV6RxPlc5wmyk97/1pPpvEyoPzTOKnyn3xpPTvY9VpXib8GtfP134qzNXR8yPrzj+D9Xw52jQx5w/BH9Ca50MunF3VkFZouOUif13mjpXqzS31PIzmtVmcL61r5WoMWCi8Vdz27ny5LJp4hr+pXVqa0rZ3MOibuP/C9fnpLPInZZ2v7wuZOb+Eof0fyNg4/tdBH4IAAAAASUVORK5CYII=);
  padding: 33px 94px;
  border: 0;
  box-shadow: none;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #fff;
  display: inline-block;
  &:hover {
    cursor: pointer;
    background: #000;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  &:disabled:hover {
    background: #000
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAGFBMVEUYGBgZGRkaGhobGxscHBweHh4fHx8hISFuCeYIAAAEkUlEQVRYw62YW7IdNxIDiUyA2v+O54PHDtvjh6Sr/45usqqQQPVZ6aoimG85XqiYchRPlSgw0bKtNNDGIT09zYna1rVXm1G2Dcuh7Uozm7PoQhOlTY3sLK1cYpmsbYsia9HLDuydt2pL9aR1JCrnuNnRosedGRclTYpX2cFwe7hisFS5Fa7rOClCrLeAc1BauCQ9gdHIZrlNjJlYWS2SIzDc0EkT0mtRJ2ZtdVYMvHN+o7cYCqU5hpaUq+5VOpPWCk6rWtNooWG39h6vYnmVoitTOprMUGzhFkE2kYTWd4i/fPlwWJyasel7RWaddzc63pGOrrXqjMWmrXLeqE0tvg+EmnE6xJPgMqqLtXBPtNbihXIwh6ZKLSEVJXesasHQQ0mu+Glki1qier63pUGLrILJgCxchhxLaayfA4nI1RuJa03SArGvxm00zTUhmNN2a3JYf75rZ10leCp40ZsasoB4ATbeQFKjsSql5gieP+hLPJiCpC28WnhTe/HeZqax8lvtLXjyzVxqXzOf6uo9YXtd5VsDB23hkaCTvLHpxUPmDJlET4O0jfEJiluOa5e1/VzIVmXa3J4hNdjSRz0HSltCGyJC6Fpkbiu0UMtx57v6+SmTmpXPJNU3bvX2qFDrKRZgtpVmkJlyzVJ4xTUNYmxW/fC6qZ21PbMpEYeYSaJlIOU9N0NrxJU1v0wMbVOe6E+pJn5mzSZ+H6yPq/dU6D6nD52Hgw0kUf+9hofX3gb9Vk5DJ71Gw+fs/2VCZ13J0egT2oQVsZYMJlxIt/TB7JVgPC17fphQsrRGLT3SjdMZtPepKT8njqP4acv2xt/VllXk0LJV02dKvOHwcMR2ht9fI/aIcpL+qJeeL2aAD6OO7w4DPe1ED+2rZrCtFiOcvVm+9JR3D2x6njNvpUB624bPVU8HOzqW+hrNsDTN8dS0vtoUglRgL3S0Xa3hdr6o1Vp76x5BZ2vr2Kfv9qKcFTsu6HygOj5i+jwXbpKUujFVcz7dX62ePp6sPAUlLa4vX/xzTjxfde9vXebBfCImM2vpWC+97ws1WStgHU/celzitelj8cQkCFybVN+4KU0fN4fsyfX/3fp8P/3/DUvnO7r5AVZfgqNhcxZ/H97zT65c8x7r92D2V3n4V6/ztHhO7amp0I8ivfeiaf1OyR3Hxghyr3H0uUBnAtClpg66M3kDnSecVjg/we9WXdJxO8B7aknG8+C68gFJj1Y3aZ9Xfbj/wPPHBHsykL3a6Fuk0H2y3aqeiVJiXD5MxLbp0F+FrV+yTnl+JqLBG7JIv83oQZhfteDz9/won12sL1e5+bw6nkscf1p9zk8Q82826/PjdRDz/Mx2GXc9m59OFjLmnnt7i7ZtQ+mV6RxPlc5wmyk97/1pPpvEyoPzTOKnyn3xpPTvY9VpXib8GtfP134qzNXR8yPrzj+D9Xw52jQx5w/BH9Ca50MunF3VkFZouOUif13mjpXqzS31PIzmtVmcL61r5WoMWCi8Vdz27ny5LJp4hr+pXVqa0rZ3MOibuP/C9fnpLPInZZ2v7wuZOb+Eof0fyNg4/tdBH4IAAAAASUVORK5CYII=);
    cursor: default;
    opacity: 0.7;
  }
}

.form-group--btn {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    display: block;
    margin-bottom: 0;
  }
}

.check {
  margin-bottom: 45px;
}

.is-invalid {
  input.form-control {
    border-color: $error;
    &:focus {
      border-color: $error;
    }
  }
  .form-group__label {
    color: $error;
  }
}

.invalid-text {
  position: absolute;
  top: 100%;
  color: $error;
  display: inline-block;
  font-size: 12px;
}
</style>
