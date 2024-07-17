import { useGetPeopleByNumberQuery } from "./apis/api";

const App = () => {
  const { data: people } = useGetPeopleByNumberQuery(5);
  return (
    <ul>
      {people?.results?.map((person) => (
        <li key={person.login.uuid}>
          {person.name.first} {person.name.last}
        </li>
      ))}
    </ul>
  );
};

export default App;
