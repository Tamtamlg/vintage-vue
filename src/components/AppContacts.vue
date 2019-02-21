<template>
  <section class="contacts">
    <div class="container">
      <div class="row">
        <div class="col-md-6 contacts__col contacts__col--left">
          <h2 class="contacts__heading">
            <span class="colored">GMS</span> Headquarters
          </h2>
          <div class="row">
            <div class="col-lg-6">
              <address class="contacts__address">
                <p>Global Message Services Ukraine LLC</p>
                <p>Bundesstrasse 5 | 3rd Floor</p>
                <p>6300 Zug</p>
                <p>Switzerland</p>
              </address>
              <a
                href="tel:+41415446206"
                class="contacts__link contacts__link--phone"
              >+41 41 544 62 06</a>
            </div>
            <div class="col-lg-6">
              <ul class="contacts__list">
                <li class="contacts__list-item">
                  <h3 class="contacts__subheading">Email</h3>
                  <a
                    href="mailto:info@gms-worldwide.com"
                    class="contacts__link"
                  >info@gms-worldwide.com</a>
                </li>
                <li class="contacts__list-item">
                  <h3 class="contacts__subheading">Send message</h3>
                  <a href="viber://chat?number=+41415446206" class="contacts__link">Viber us</a>
                </li>
                <li class="contacts__list-item">
                  <h3 class="contacts__subheading">Send form</h3>
                  <a
                    href="javascript:void(0);"
                    class="contacts__link"
                    v-scroll-to="'#contactUs'"
                  >Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 contacts__col contacts__col--right">
          <h2 class="contacts__heading">
            Technical support
            <span class="colored">24/7</span>
          </h2>
          <p>GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>
          <a href="tel:+41415446206" class="contacts__link contacts__link--phone">+41 41 544 62 06</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../scss/variables.scss";
.contacts {
  margin-bottom: 90px;
}

.contacts__heading {
  margin-bottom: 35px;
}

.contacts__address {
  margin-bottom: 30px;
  p {
    margin-bottom: 10px;
    line-height: 18px;
    letter-spacing: -0.3px;
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.contacts__link {
  display: inline-block;
  position: relative;
  color: $green;
  font-family: $fontBold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;

  &:hover {
    color: $green;
    text-decoration: none;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &::after {
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 100%;
    height: 1px;
    content: "";
    transition: transform 0.25s ease-out;
    transform: scaleX(0);
    background-color: $green;
  }
}

.contacts__link--phone {
  font-family: $fontLight;
  font-size: 26px;
  line-height: 36px;
}

.contacts__list {
  margin-top: 30px;
  padding: 0;
  list-style: none;
  @media (min-width: 992px) {
    margin: 0;
  }
}

.contacts__subheading {
  font-family: $fontLight;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 7px;
}

.contacts__list-item:not(:last-child) {
  margin-bottom: 7px;
}

.contacts__col--right {
  @media (min-width: 992px) {
    padding-left: 40px;
  }
}
.contacts__col--left {
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
}
</style>
