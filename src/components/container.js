export default function Container({ children }) {
  return (
    <div style={styles.wrapper} className="container mx-auto px-5">
      {children}
    </div>
  );
}

const styles = {
  wrapper: {
    margin: "auto",
  },
};
