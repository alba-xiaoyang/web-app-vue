<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Lista de tareas</h1>

    <!-- Formulario -->
    <div class="mb-6">
      <input v-model="newTask.name" placeholder="Tarea" class="border p-2 mr-2">
      <input v-model="newTask.note" placeholder="Nota" class="border p-2 mr-2">
      <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded">
        {{ editing ? 'Actualizar' : 'Agregar' }} Tarea
      </button>
    </div>

    <!-- Lista de tareas -->
    <div class="grid gap-4">
      <div v-for="task in task" :key="task.id" class="border p-4 rounded">
        <h3>{{ task.name }} = {{ task.note }}</h3>
        <div class="mt-2">
          <button @click="editTask(task)" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
            Editar
          </button>
          <button @click="deleteTask(task.id)" class="bg-red-500 text-white px-2 py-1 rounded">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, deleteDoc, doc, updateDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default {
  name: 'App',

  data() {
    return {
      task: [],
      editing: false,
      editingId: null,
      newTask: {
        name: '',
        note: ''
      }
    }
  },

  firestore() {
    return {
      task: collection(db, 'tasks')
    }
  },

  methods: {
    async addTask() {
      if (this.editing) {
        await updateDoc(doc(db, 'tasks', this.editingId), {
          name: this.newTask.name,
          country: this.newTask.note
        })
        this.editing = false
        this.editingId = null
      } else {
        await setDoc(doc(db, 'tasks', this.generateRandonName()), {
          name: this.newTask.name,
          note: this.newTask.note
        })
      }
      this.newTask = { name: '', note: '' }
    },

    editTask(task) {
      this.newtask = {
        name: task.name,
        country: task.country
      }
      this.editing = true
      this.editingId = task.id
    },

    async deleteTask(id) {
      await deleteDoc(doc(db, 'tasks', id))
    },

    generateRandonName() {
      const timestamp = Date.now().toString(36); // Base 36 para reducir longitud
      const randomString = Math.random().toString(36).substring(2, 8); // 6 caracteres aleatorios
      return `T-${timestamp}-${randomString}`; // Prefijo opcional para identificar tareas
    }
  }
}
</script>
