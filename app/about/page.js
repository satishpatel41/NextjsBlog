import styles from "../page.module.css";
// import Layout from "../layout";
import aboutStyles from "./about.module.css";

export default function About() {
  return (
      <div className={`${styles.main} aboutPage`}>
        <div className={styles.description}>
          <p>
          Welcome to TTN Blog, where inspiration meets insight. We're more than just a blog; we're a community driven by passion, curiosity, and a thirst for knowledge.

At TTN Blog, we believe in the power of words to inform, enlighten, and entertain. Whether you're seeking thought-provoking articles, practical tips, or simply a moment of inspiration, you'll find it all here.

Our team of writers, researchers, and creatives are dedicated to bringing you the latest trends, timeless wisdom, and diverse perspectives across a wide range of topics. From technology to travel, wellness to world events, we strive to offer content that resonates with readers from all walks of life.

But TTN Blog is more than just a collection of articles—it's a platform for connection. We encourage lively discussions, respectful debates, and the sharing of ideas. Because we believe that the best insights often emerge through dialogue and collaboration.

So whether you're a seasoned expert or a curious novice, we invite you to join us on this journey of discovery. Together, let's explore the world of ideas, one blog post at a time."
          </p>
        </div>
      </div>
  );
}
