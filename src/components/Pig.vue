<template>
  <div id="pig">
    <menu-top></menu-top>
    <v-container grid-list-md pig-contain>
      <v-layout pig-row>
        <v-flex md6 player-1-panel active>
          <div class="player-name" id="name-1">Player 1</div>
          <div class="player-score" id="score-1">0</div>
          <div class="player-current-box">
            <div class="player-current-label">Points</div>
            <div class="player-current-score" id="current-1">0</div>
          </div>
        </v-flex>
        <v-flex md6 player-2-panel md4>
          <div class="player-name" id="name-2">Player 2</div>
          <div class="player-score" id="score-2">0</div>
          <div class="player-current-box">
            <div class="player-current-label">Points</div>
            <div class="player-current-score" id="current-2">0</div>
          </div>
        </v-flex>
      </v-layout>

      <button class="btn-new"><i class="ion-ios-plus-outline"></i>New Game</button>
      <button class="btn-roll" @click="diceRoll"><i class="ion-ios-loop"></i>Roll</button>
      <button class="btn-hold" @click="diceHold"><i class="ion-ios-download-outline"></i>Hold</button>

      <img src="./../assets/dice/dice-5.png" alt="Dice" class="dice">
    </v-container>
  </div>
</template>
<script>
  import MenuTop from './MenuTop.vue'

  export default {
    components: {
      MenuTop
    },
    data() {
      return {
        score: [10, 10],
        roundScore: 0,
        activePlayer: 1,
        dice: [],
      }
    },
    mounted() {
      document.querySelector('.dice').style.display = "none";
      document.querySelector('.btn-new').style.display = "none";
    },
    computed: {

    },
    methods: {
      diceRoll(){
        var dice = Math.floor(Math.random() * 6) + 1;
        var player = this.activePlayer;

        var diceDom = document.querySelector('.dice');

        console.log(dice);
        console.log(player);
        diceDom.style.display = "block";
        diceDom.src = require('./../assets/dice/dice-' + dice + '.png');


        if (dice == 1 && this.activePlayer == 1){
          document.querySelector('.player-1-panel').classList.remove("active");
          document.querySelector('.player-2-panel').classList.add("active");
          document.querySelector('#current-' + this.activePlayer).textContent = 0;
          this.activePlayer = 2;
          this.roundScore = 0;
          console.log('Perdeu a vez. Player '+this.activePlayer);
          return
        } else if (dice == 1 && this.activePlayer == 2){
          document.querySelector('.player-2-panel').classList.remove("active");
          document.querySelector('.player-1-panel').classList.add("active");
          document.querySelector('#current-' + this.activePlayer).textContent = 0;
          this.activePlayer = 1;
          this.roundScore = 0;
          console.log('Perdeu a vez. Player '+ this.activePlayer);
          return
        } else {
          console.log('Continue. Player '+ this.activePlayer)
          this.roundScore += dice;
        }
        document.getElementById('current-' + this.activePlayer).textContent = this.roundScore;
      },
      diceHold() {
        var score = document.querySelector('#score-' + this.activePlayer).textContent;
        score = parseInt(score);
        score += this.roundScore;

        document.querySelector('#score-' + this.activePlayer).textContent = score;

        if (this.activePlayer === 1) {
          this.roundScore = 0;
          document.querySelector('#current-' + this.activePlayer).textContent = 0;
          document.querySelector('.player-1-panel').classList.remove("active");
          document.querySelector('.player-2-panel').classList.add("active");
          this.victory();
          console.log('Passou a rodada com '+score+' pontos. Vez do Player '+this.activePlayer)
          this.activePlayer = 2
        } else {
          this.roundScore = 0;
          document.querySelector('#current-' + this.activePlayer).textContent = 0;
          document.querySelector('.player-2-panel').classList.remove("active");
          document.querySelector('.player-1-panel').classList.add("active");
          this.victory();
          console.log('Passou a rodada com '+this.score+' pontos. Vez do Player '+this.activePlayer)
          this.activePlayer = 1
        }
      },
      victory() {
        var winCondition = document.querySelector('#score-' + this.activePlayer).textContent;
        if (winCondition >= 100) {
          document.querySelector('.player-'+this.activePlayer+'-panel').classList.add("winner");
          document.querySelector('.btn-new').style.display = "block";
          document.querySelector('.btn-roll').style.display = "none";
          document.querySelector('.btn-hold').style.display = "none";
          document.querySelector('.player-2-panel').classList.remove("active");
          document.querySelector('.player-1-panel').classList.remove("active");
        }
      }
    }
  }


</script>
<style scoped lang="scss" src="./../style/scss/pig.scss"></style>