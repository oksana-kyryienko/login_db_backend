import { Link } from 'react-router-dom';
import { Header } from '../Header';
import './Main.css';

export const Main = () => {
  return (
    <>
      <Header />
      <div className="Main">
        <div className="main-content">
          <h1 className="title">The chemical negatively charged</h1>
          <p className="text">
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is{' '}
          </p>
          <Link className="get-started" to="/content">
          Get Started
        </Link>
        </div>
       
      </div>
    </>
  );
};
