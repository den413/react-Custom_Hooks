import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUesrs } from "./hooks/useAllUesrs";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUesrs();

  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
