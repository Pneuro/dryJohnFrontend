import "../App.css";
import "../components/module.styles.css";
export default function DryJohn({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}
