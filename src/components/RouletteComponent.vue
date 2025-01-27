<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import Spinner from '@/components/Spinner.vue'

const cheeseDegreeRange = 60
const circleDegreeOffset = cheeseDegreeRange / 2

let totalSpinDegrees = 0

export default {
  components: { Spinner },
  emits: ['success'],
  data() {
    return {
      loading: true,
      userName: '',
      userId: '',
      groupId: '',
      cheeses: ['Cocinar', 'Baño', 'Basura', 'Cocina', 'Salón', 'Comprar'],
    }
  },
  mounted() {
    onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        this.userName = user.displayName || 'Usuario'
        this.userId = user.uid

        const db = getFirestore()
        const userDoc = await getDoc(doc(db, 'users', this.userId))
        if (userDoc.exists()) {
          this.groupId = userDoc.data().groupId
          this.loadCheesesFromFirestore()
        } else {
          console.error('User document not found in Firestore.')
        }
      } else {
        console.error('No authenticated user.')
      }
    })
  },
  methods: {
    async saveCheesesToFirestore() {
      if (!this.groupId) return

      const db = getFirestore()
      try {
        await setDoc(
          doc(db, 'groupAvailableTasks', this.groupId),
          { cheeses: this.cheeses },
          { merge: true },
        )
        console.log('Cheeses saved to Firestore successfully.')
      } catch (error) {
        console.error('Error saving cheeses to Firestore:', error)
      }
    },
    async loadCheesesFromFirestore() {
      if (!this.groupId) return

      const db = getFirestore()
      try {
        const docSnap = await getDoc(doc(db, 'groupAvailableTasks', this.groupId))
        if (docSnap.exists()) {
          const data = docSnap.data()
          if (data.cheeses) {
            this.cheeses = data.cheeses
            this.loading = false
            console.log('Cheeses loaded from Firestore successfully.')
          }
        } else {
          this.cheeses = ['Cocinar', 'Baño', 'Basura', 'Cocina', 'Salón', 'Comprar'];
          this.loading = false;
        }
      } catch (error) {
        console.error('Error loading cheeses from Firestore:', error)
      }
    },
    spinRoulette() {
      const degree = Math.floor(Math.random() * 360)
      const completeTurnsDegrees = 360 * 5 + degree
      const rouletteTable = this.$refs.rouletteTable

      rouletteTable.style.transition = 'transform ease-in-out 2.5s'
      rouletteTable.style.transform = `rotate(-${totalSpinDegrees + completeTurnsDegrees}deg)`
      totalSpinDegrees += completeTurnsDegrees

      setTimeout(() => {
        const degreesRoulette = (totalSpinDegrees + circleDegreeOffset) % 360
        const cheeseGradesRoulette = Math.ceil(degreesRoulette / cheeseDegreeRange)
        const selectedCheese = this.cheeses[cheeseGradesRoulette - 1]

        this.$emit('success', selectedCheese)
      }, 2500)
    },
    reset() {
      totalSpinDegrees = 0
      const rouletteTable = this.$refs.rouletteTable

      rouletteTable.style.transition = 'transform ease-in-out 0.1s'
      rouletteTable.style.transform = 'rotate(0deg)'
    },
  },
}
</script>

<template>
  <Spinner v-if="loading" message="Cargando tus tareas disponibles" />

  <div v-else>
    <div class="animate-appear" id="roulette">
      <div ref="rouletteTable" id="roulette-table" class="roulette-container">
        <div class="roulette-container cheese-container cook-container">
          <input type="text" class="cheese-input" v-model="cheeses[0]" @blur="saveCheesesToFirestore" />
        </div>
        <div class="roulette-container cheese-container bath-container">
          <input type="text" class="cheese-input" v-model="cheeses[1]" @blur="saveCheesesToFirestore" />
        </div>
        <div class="roulette-container cheese-container trash-container">
          <input type="text" class="cheese-input" v-model="cheeses[2]" @blur="saveCheesesToFirestore" />
        </div>
        <div class="roulette-container cheese-container kitchen-container">
          <input type="text" class="cheese-input" v-model="cheeses[3]" @blur="saveCheesesToFirestore" />
        </div>
        <div class="roulette-container cheese-container lounge-container">
          <input type="text" class="cheese-input" v-model="cheeses[4]" @blur="saveCheesesToFirestore" />
        </div>
        <div class="roulette-container cheese-container buy-container">
          <input type="text" class="cheese-input" v-model="cheeses[5]" @blur="saveCheesesToFirestore" />
        </div>
      </div>

      <img @click="spinRoulette" id="spinbutton" class="tap" src="../../public/tap.svg" alt="" />

      <img class="arrow" src="../../public/arrow.svg" alt="" />
    </div>

    <div class="container-tasksAssignment">
      <p>Usuario actual: {{ userName }}</p>
      <button @click="reset" class="reset">Reiniciar</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

body {
  background-color: #e8e8e8;
  margin: 0;
  padding: 0;
  font-family: Nunito, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.roulette-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#roulette {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: solid 6px hsl(180deg 4% 24%);
}

.cheese-container {
  width: 13.25rem;
  height: 11.25rem;
  position: absolute;
  font-family: Nunito, sans-serif;
  font-weight: bold;
}

.cheese-container>.cheese-input {
  writing-mode: vertical-lr;
  max-height: 5rem;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  font-weight: bold;
}

.cheese-container>.cheese-input:focus {
  outline: none;
}

.cook-container {
  background-image: linear-gradient(hsl(152.14deg 40% 50%), hsl(152.14deg 40% 70%));
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%);
  transform-origin: bottom;
}

.bath-container {
  background-image: linear-gradient(hsl(185.29deg 40% 50%), hsl(185.29deg 40% 70%));
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(60deg);
  transform-origin: bottom;
}

.trash-container {
  background-image: linear-gradient(hsl(198.11deg 40% 50%), hsl(198.11deg 40% 64%));
  background-color: #9abfcf;
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(120deg);
  transform-origin: bottom;
}

.kitchen-container {
  background-image: linear-gradient(hsl(0deg 40% 55%), hsl(0deg 40% 70%));
  background-color: #ee6f6f;
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(180deg);
  transform-origin: bottom;
}

.lounge-container {
  background-image: linear-gradient(hsl(7deg 40% 65%), hsl(7deg 40% 80%));
  background-color: #ffb6ad;
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(240deg);
  transform-origin: bottom;
}

.buy-container {
  background-image: linear-gradient(hsl(39deg 40% 60%), hsl(39deg 40% 80%));
  background-color: #ffdc9c;
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(300deg);
  transform-origin: bottom;
}

.tap {
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 1s infinite ease-in-out alternate;
}

@keyframes pulse {
  from {
    transform: translate(-50%, -50%) scale(1);
  }

  to {
    transform: translate(-50%, -50%) scale(1.2);
  }
}

.arrow {
  width: 100px;
  height: 25px;
  z-index: 1;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.container-tasksAssignment {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#name {
  height: 3.75rem;
  font-size: 1rem;
  padding: 0.5rem;
  border: 0.125rem solid hsl(180deg 4% 24%);
  border-radius: 0.25rem;
  box-shadow: 0 0 0.625rem hsl(180deg 4% 24%);
  font-family: Questrial, sans-serif;
  transition: all 0.3s ease;
}

#name:hover {
  border-color: var(--rojopastel);
  box-shadow: 0 0 0.625rem var(--rojopastel);
  background-color: #fefefe;
}

#name:focus {
  outline: none;
  border-color: var(--rojopastel);
  box-shadow: 0 0 0.625rem var(--rojopastel);
  background-color: #fff;
}

.reset {
  height: 3.75rem;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  border-radius: 0.25rem;
  background-color: var(--rojopastel);
  box-shadow: 0 0 0.625rem var(--rojopastel);
  font-family: Questrial, sans-serif;
  border: none;
  font-weight: bold;
  text-align: center;
  padding: 0 1.5rem;
  margin-top: 10px;
}

.link:hover,
button:hover {
  background-color: white;
  color: var(--rojopastel);
}
</style>
