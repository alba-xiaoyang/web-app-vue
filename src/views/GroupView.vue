<template>
  <div class="group">
    <h1>Crear o Unirse a un Grupo</h1>
    <div>
      <h2>Unirse a un Grupo</h2>
      <form @submit.prevent="joinGroup">
        <label for="group-id">ID del Grupo</label>
        <input type="text" v-model="groupIdToJoin" id="group-id" required />
        <button type="submit">Unirse</button>
      </form>
    </div>

    <div>
      <h2>Crear un Nuevo Grupo</h2>
      <form @submit.prevent="createGroup">
        <label for="new-group-name">Nombre del Grupo</label>
        <input type="text" v-model="newGroupName" id="new-group-name" required />
        <label for="new-group-id">ID del Grupo</label>
        <input type="text" v-model="newGroupId" id="new-group-id" required />
        <button type="submit">Crear</button>
      </form>
    </div>
  </div>
</template>

<script>
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export default {
  data() {
    return {
      groupIdToJoin: "",
      newGroupName: "",
      newGroupId: "",
    };
  },
  methods: {
    async joinGroup() {
try {
  const groupRef = doc(db, "groups", this.groupIdToJoin);
  const groupSnap = await getDoc(groupRef);

  if (groupSnap.exists()) {
    const userRef = doc(db, "users", auth.currentUser.uid);

    // Agregar el usuario a la lista de miembros del grupo
    await updateDoc(groupRef, {
      members: arrayUnion(auth.currentUser.uid),  // Agrega el UID del usuario al grupo
    });

    // Actualizar el grupo del usuario
    await updateDoc(userRef, { groupId: this.groupIdToJoin });

    this.$router.push("/home");
  } else {
    alert("El grupo no existe.");
  }
} catch (error) {
  alert("Error al unirse al grupo: " + error.message);
}
},
    async createGroup() {
      try {
        const groupRef = doc(db, "groups", this.newGroupId);
        await setDoc(groupRef, {
          name: this.newGroupName,
          members: [auth.currentUser.uid],
        });

        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, { groupId: this.newGroupId });

        this.$router.push("/home");
      } catch (error) {
        alert("Error al crear el grupo: " + error.message);
      }
    },
  },
};
</script>

<style scoped>
.group {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
form {
  margin-bottom: 20px;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #218838;
}
</style>
