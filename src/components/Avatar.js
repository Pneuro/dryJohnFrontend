export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={picture.url}
        className="w-12 h-12 rounded-full mr-4"
        alt={name[0].text}
        style={{ width: "100px", borderRadius: "5px" }}
      />
      <div className="text-xl font-bold">by: {name}</div>
    </div>
  );
}
Avatar.defaultProps = {
  name: "Pete Phinney",
  picture: "",
};
