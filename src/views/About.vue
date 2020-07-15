<template>
  <div class="about">
    <div class="title"><h2>Yords</h2></div>
    <div class="statement">
      <p>"Yords" is one of the extended version of the expression word "Yo" that is often used by some of the people in the Municipality of Bambang, Nueva Vizcaya, Philippines.
      </p>
      <p>This expression is usually heard at the end of an adjective, sometimes any word. For example, "Smelly yords". As you can smell, yords somewhat enhanced the word Smelly and adds like an impact. That said, yords is like your friend who always got your back and support you like crazy.</p>
      <p>Yes, its Covid19~Yords with "~" before the expression word yords because we negate Covid19. We do not support it. With all that, we fight Covid19.</p>
    </div>
    <div class="note">
      <p>Note that the statement shown above is just an opinion of a sane person that occasionally uses the expression "yords".</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.about {
  margin: 3% 5%;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3% 0;
  text-shadow: 0px 3px 3px $light_label;
}
.statement {
  padding: 3% 5%;
  margin: 1% 2%;
  box-shadow: 0 1px 5px 1px $light_label;
  // background-color:rgba(20, 169, 255, 0.904);
  p {
    font-size: 14pt;
    text-align: justify;
    text-indent: 5%;
    margin: 10px;
    padding: 10px;
    box-shadow: 0px 5px 10px -5px $light_container;
    // background-color: rgb(0, 98, 155);
  }
  // p:nth-child(odd) {
  //   animation: toLeft 3s ease-in-out;
  // }
  // p:nth-child(even) {
  //   animation: toRight 3s ease-in-out;
  // }
  // animation: toUp 1s ease-in-out;
}

.note {
  margin: 5% 0;
  box-shadow: 0 0.5px 5px 3px rgb(104, 43, 0);
  padding: 10px;
  background-color: rgba(165, 69, 0, 0.822);
  // z-index: -1;
  // opacity: 0;
  p {
    font-size: 100%;
    text-align: justify;
    text-indent: 5%;
  }
  // animation: toUp 3s ease-in-out;
}
</style>
