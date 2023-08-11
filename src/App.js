import logo from './logo.svg';
import './App.css';

function App() {
    const categories = [
        {
            id : 1,
            tittle : 'HATS',
        },
        {
            id : 2,
            tittle : 'JACKETS',
        },
        {
            id : 1,
            tittle : 'SNEAKERS',
        },
        {
            id : 1,
            tittle : 'WOMENS',
        },
        {
            id : 1,
            tittle : 'MENS',
        },
    ]
  return (
    <div className="categories-contrainer">
        {categories.map(({tittle }) =>(
            <div className= "categories-contrainer">
                <div className= 'background-image' />
                <div className="category-body-container">
                    <h2>{tittle}</h2>
                    <p>shop now</p>
                </div>
            </div>
        ))}
    </div>


  );
}

export default App;
