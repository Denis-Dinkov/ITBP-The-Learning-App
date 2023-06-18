import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyDJ6kO-NsPymkI3VEibDD0emYnWM4hmUj0",
  authDomain: "learning-73eac.firebaseapp.com",
  databaseURL: "https://learning-73eac-default-rtdb.firebaseio.com",
  projectId: "learning-73eac",
  storageBucket: "learning-73eac.appspot.com",
  messagingSenderId: "48349544110",
  appId: "1:48349544110:web:9441d78f1aa877b875373f"
}

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const courseCollection = db.collection("Courses");

export const createCourse = (course) => {
  return courseCollection.add(course);
};

export const getCourse = async (id) => {
  const course = await courseCollection.doc(id).get();
  return course.exists ? course.data() : null;
};

export const updateCourse = (id, course) => {
  return courseCollection.doc(id).update(course);
};

export const deleteCourse = (id) => {
  return courseCollection.doc(id).delete();
};

export const useLoadCourses = () => {
  const courses = ref([]);
  const close = courseCollection.onSnapshot((snapshot) => {
    courses.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return courses;
};
