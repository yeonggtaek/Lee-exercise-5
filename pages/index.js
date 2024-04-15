import styles from "@/styles/Home.module.css";
import VerticalChart from "@/components/VerticalChart";
import HorizontalChart from "@/components/HorizontalChart";
import PieChart from "@/components/pieChart";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <VerticalChart/>
        <HorizontalChart/>
        <PieChart/>
      </main>
    </>
  );
}
