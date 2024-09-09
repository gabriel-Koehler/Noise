/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Outlet, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/about');

  return (
    <div className=" bg-blue-400 w-full">
      <div onClick={handleNavigate}>about</div>
      <br />
      <h1>oi</h1>
      <Outlet />
    </div>
  );
}
