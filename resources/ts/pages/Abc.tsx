import { Link } from "react-router-dom"

export const Abc = () => {
  return (
    <div className="App">
      <p>This is abc Page</p>
      <Link to="/"><p>To Top Page</p></Link>
    </div>
  );
}

