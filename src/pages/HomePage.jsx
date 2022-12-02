import Card from "../components/Card";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function HomePage() {
  const context = useContext(GlobalContext);
  const { users } = context;
  console.log(users);
  return (
    <>
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </>
  );
}

export default HomePage;
