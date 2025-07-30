import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    id: 1,
    name: "hs",
    job: "Programmer",
    imageSrc: "avatar.webp",
  },
  {
    id: 2,
    name: "현수",
    job: "우주비행사",
    imageSrc: "avatar2.webp",
  },
  {
    id: 3,
    name: "가나다",
    job: "작가",
    imageSrc: "avatar3.jpeg",
  },
];

const App = () => {
  return (
    <>
      {userData.map((value) => (
        <UserCard
          key={value.id}
          name={value.name}
          job={value.job}
          imageSrc={value.imageSrc}
        />
      ))}
    </>
  );
};

export default App;
