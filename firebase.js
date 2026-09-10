<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBI7itDx9xie4yIjg5C8UoMRDuRAt2TMz0",
    authDomain: "vaccination-summary.firebaseapp.com",
    projectId: "vaccination-summary",
    storageBucket: "vaccination-summary.firebasestorage.app",
    messagingSenderId: "958525895851",
    appId: "1:958525895851:web:5ed07d2a404d6f9dc733ee",
    measurementId: "G-L2G6KHX23M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
