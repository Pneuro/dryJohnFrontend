export default function PostTitle({ children }) {
  return (
    <h1
      style={styles.wrapper}
      className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
    >
      {children}
    </h1>
  );
}

const styles = {
  wrapper: {
    color: "#3485bc",
    fontSize: "45px",
    fontWeight: "200",
  },
};
