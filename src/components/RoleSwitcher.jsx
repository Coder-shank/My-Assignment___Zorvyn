import { useApp } from "../context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useApp();

  return (
    <div className="role-switcher">
      <label> <b>Role: </b> </label>
      <select className="viewClass" value={role} onChange={e => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher; 
